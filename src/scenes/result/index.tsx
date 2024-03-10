import { useEffect, useState } from "react";
import Article from "./article";
import HabitDataService from "@/services/habitService";

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

type Props = {
    habits: Array<Habit>;
    onDeleteHabit: Function;
}

const result = (props: Props) => {
    


    return (
        <section id="result" className="flex flex-col items-center p-20">
            <h1 className="text-gray-500 leading-tight tracking-tight" >Your Habits</h1>

            {
                props.habits.map(item => (
                    <div className="flex flex-row flex-wrapper">
                        <Article
                            key={item.habit_id}
                            name={item.habit_name}
                            desc={item.habit_desc}
                            icon={item.icon}
                            color={item.color}
                            type={item.habit_type}
                            goal={item.goal}
                            start={item.start_date}
                            end={item.end_date}
                            onDelete={() => props.onDeleteHabit(item.habit_id, props.habits)}
                        ></Article>
                    </div>
                ))
            }
        </section>
    )
}

export default result