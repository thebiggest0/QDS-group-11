import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
<<<<<<< HEAD
import Mood from "@/scenes/mood";
=======
>>>>>>> 9150514def4e35aab231362a89b20b8965198180
import About from "@/scenes/about";
import Calender from "@/scenes/calander";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import UserDataService from "./services/userService";
import HabitList from "./form/habitLists";
import HabitDetails from "./form/habitDetails";
import CustomHabits from "./form/newCustomHabit";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.home);
      } else {
        setIsTopOfPage(false);
      }
    }
    // Add the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Get users from API and set state
    UserDataService.getAll()
      .then(response => { console.log(response.data) });

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app" bg-gray-20>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Calender />
      {/* <Form /> */}
      <HabitList />
      <HabitDetails />
      <CustomHabits />
      {/* <Mood /> */}
      <About />
    </div>
  )
}


export default App;
