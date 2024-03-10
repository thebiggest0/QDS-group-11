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
import MoodDataService from "./services/moodService";

interface Habit {
  habit_id: number;
  habit_name: string;
  habit_desc: string;
  icon: string;
  color: string;
  habit_type: string;
  goal: string;
  start_date: string;
  end_date: string;
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [habits, setHabits] = useState<Array<Habit>>([]);

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

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHabits = async () => {
    try {
      const response = await HabitDataService.getAll();
      const habitsFromServer = response.data;
      setHabits(habitsFromServer);
    } catch (error) {
      // Handle any errors that might occur during the API call
      console.error("Error fetching habits:", error);
    }
  };

  useEffect(() => {
    getHabits();
  }, []);

  useEffect(() => {
    console.log(habits);
  }, [habits]);

  const deleteHabit = async (id: number, habits: Array<Habit>) => {
    try {
      await HabitDataService.delete(id);
      const filteredHabits = habits.filter((habit) => { return habit.habit_id != id });
      console.log("habits: " + habits.length);
      console.log("filtered habits: " + filteredHabits.length);
      setHabits(filteredHabits);
    } catch (error) {
      // Handle any errors that might occur during the API call
      console.error("Error deleting habit: ", error);
    }
  };

  const addHabit = async (name: string, desc: string, icon: string, color: string, type: string, goal: string, start: string, end: string) => {
    const newHabit = {
      "habit_id": 0,
      "habit_name": `${name}`,
      "habit_desc": `${desc}`,
      "icon": `${icon}`,
      "color": `${color}`,
      "habit_type": `${type}`,
      "goal": `${goal}`,
      "start_date": `${start}`,
      "end_date": `${end}`
    }

    console.log('in addHabit')

    HabitDataService.create(newHabit)
      .then(response => { newHabit.habit_id = response.data });

    const newHabits = [...habits, newHabit];
    setHabits(newHabits);
  }

  // function handleHabitSubmit(event: React.FormEvent<HTMLFormElement>,
  //   name: string, desc: string, icon: string, color: string, type: string, goal: string, start: string, end: string) {
  //   event.preventDefault();

  //   console.log("Habit name:", name);
  //   console.log("Habit description:", desc);
  //   console.log("Habit icon:", icon);
  //   console.log("Habit colour:", color);
  //   console.log("Habit goal type:", type);
  //   console.log("Habit goal:", goal);
  //   console.log("Habit term starts :", start);
  //   console.log("Habit term ends :", end);

  //   addHabit(name, desc, icon, color, type, goal, start, end);

  //   console.log("Submitted!");
  // }

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
      <CustomHabits onAddHabit={addHabit} />
      <Mood />
      <Result habits={habits} onDeleteHabit={deleteHabit} />
      <About />
    </div>
  )
}


export default App;
