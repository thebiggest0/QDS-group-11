import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "@/util/calendar";
import cn from "@/util/cn";
import { useEffect, useState } from "react";

interface Mood {
  mood_date: string;
  mood: string;
  reason: string;
  note: string;
}

type Props = {
  moods: Array<Mood>
}

const calender = ({ moods }: Props) => {
  // calender app
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [daysMoods, setDaysMoods] = useState([]);
  const [moodDays, setMoodDays] = useState([])

  useEffect(() => {
    getDaysMoods(selectDate);
  }, [moods]);

  const getDaysMoods = (date) => {
    const moodList: Array<Mood> = moods.filter((mood) => {
      return dayjs(mood.mood_date).isSame(date, 'day')
    });
    setDaysMoods(moodList);
  }

  const handleDateSelect = (date) => {
    getDaysMoods(date);
    setSelectDate(date);
  }

  const getMoodDays = () => {

  }

  return (
    <section id="calendar" className="p-20">
      <div className="flex w-5/6 mx-auto flex-col items-center gap-10">
        <div className="w-96 h-96">

          <div className="flex justify-between">
            <div>
              <h1 className="text-base lg:text-6xl font-light text-gray-500 leading-tight tracking-tight">{months[today.month()]}, {today.year()}</h1>
            </div>

            <div className="flex items-center gap-5">
              <GrFormPrevious className="w-5 h-5 cursor-pointer" onClick={() => {
                setToday(today.month(today.month() - 1))
              }} />
              <h1 className="cursor-pointer text-base lg:text-6xl font-light text-gray-500 leading-tight tracking-tight" onClick={() => {
                setToday(currentDate)
              }}>Today</h1>
              <GrFormNext className="w-5 h-5 cursor-pointer" onClick={() => {
                setToday(today.month(today.month() + 1))
              }} />
            </div>
          </div>

          <div className="w-full grid grid-cols-7">
            {days.map((day, index) => {
              return (
                <h1 key={index} className="h-14 grid place-content-center text-sm text-gray-400 lg:text-6xl font-light leading-tight tracking-tight">{day}</h1>
              )
            })}
          </div>

          <div className="w-full grid grid-cols-7"
          >
            {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
              return (
                <div key={index} className="h-14 border-t grid place-content-center">
                  <h1 className={cn(
                    currentMonth ? "text-sm" : "text-gray-300 text-sm lg:text-6xl font-light leading-tight tracking-tight",
                    today ? "bg-red-600 text-white" : "",
                    selectDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white" : "",
                    "h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"
                  )}
                    onClick={() => {
                      handleDateSelect(date)
                    }}

                  >
                    {date.date()}
                  </h1>
                </div>
              )
            })}
          </div>
        </div>

        <div className="pt-10">
          <h1 className="text-base">Schedule for {selectDate.toDate().toDateString()}</h1>
          <p>Nothing at the moment</p>
          <br></br>
          {daysMoods.length > 0 && <h1 className="text-base">Moods</h1>}
          {daysMoods.map((mood) => <p>Mood: {mood.mood}    Reason: {mood.reason}</p>)}

        </div>
      </div>
    </section>
  )
}

export default calender





