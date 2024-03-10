import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Mood from "@/scenes/mood";
import About from "@/scenes/about";
import Calender from "@/scenes/calander";
import Result from "@/scenes/result";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import UserDataService from "./services/userService";
import HabitList from "./form/habitLists";
import HabitDetails from "./form/habitDetails";
import CustomHabits from "./form/newCustomHabit";
import HabitDataService from "./services/habitService";

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

    // UserDataService.create({
    //   "username": "front",
    //   "email": "f@t.ca",
    //   "password": "asdfgd"
    // })
    //   .then(response => { console.log(response.data) });
    
      // HabitDataService.create({
      //   "habit_name": "front",
      //   "habit_desc": "test",
      //   "icon": "ico",
      //   "color": "col",
      //   "habit_type": "asdfgd",
      //   "goal": "asdfgd",
      //   "start_date": "asdfgd",
      //   "end_date": "asdfgd"
      // })
      //   .then(response => { console.log(response.data) });

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
      <CustomHabits />
      <Mood />
      <Result />
      <About />
    </div>
  )
}


export default App;
