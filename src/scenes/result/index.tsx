import { useEffect, useState } from "react";
import Article from "./article";
import HabitDataService from "@/services/habitService";

type Props = {}

interface Habit {
    habit_name: string;
    habit_desc: string;
    icon: string;
    color: string;
    habit_type: string;
    goal: string;
    start_date: string;
    end_date: string;
}

const result = (props: Props) => {
    const [habits, setHabits] = useState<Array<Habit>>([]);

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



    return (
        <section id="result" className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-500 leading-tight tracking-tight" >Results</h1>

            {
                habits.map(item => (
                    <div>
                        <Article
                            name={item.habit_name}
                            desc={item.habit_desc}
                            icon={item.icon}
                            color={item.color}
                            type={item.habit_type}
                            goal={item.goal}
                            start={item.start_date}
                            end={item.end_date}
                        ></Article>
                    </div>
                ))
            }
        </section>
    )
}

export default result