import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().month(month).year(year).startOf('month').startOf('month');
    const lastDateOfMonth = dayjs().month(month).year(year).endOf('month').endOf('month');
    const arrayOfDate = []

    // create prefix date

    for (let i = 0; i < firstDateOfMonth.day(); i++) {
        arrayOfDate.push({ currentMonth: false, date: firstDateOfMonth.day(i) })
    }

    // generate current date

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        arrayOfDate.push({
            currentMonth: true,
            date: firstDateOfMonth.day(i),
            today: firstDateOfMonth.day(i).toDate().toDateString() === dayjs().toDate().toDateString()
        }
        );
    }

    // create suffix date
    const remaining = 42 - arrayOfDate.length;

    for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
        arrayOfDate.push({ currentMonth: false, date: lastDateOfMonth.date(i) });
    }

    return arrayOfDate;
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]