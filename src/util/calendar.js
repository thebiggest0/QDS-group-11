import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDayOfMonth = dayjs().month(month).year(year).startOf('month');
    const lastDayOfMonth = dayjs().month(month).year(year).endOf('month');
    const daysInMonth = lastDayOfMonth.date(); // Get the last date number of the month
    const arrayOfDate = [];

    // create prefix date
    for (let i = 0; i < firstDayOfMonth.day(); i++) {
        arrayOfDate.unshift({ // use unshift to add to the beginning
            currentMonth: false,
            date: firstDayOfMonth.subtract(i + 1, 'day'), // go backwards for prefix days
            today: false
        });
    }

    // generate current month date
    for (let i = 0; i < daysInMonth; i++) {
        const date = firstDayOfMonth.add(i, 'day'); // iterate through the current month
        arrayOfDate.push({
            currentMonth: true,
            date: date,
            today: date.isSame(dayjs(), 'day') // check if it's today
        });
    }

    // create suffix date
    const daysToAdd = 42 - arrayOfDate.length; // to make up a total of 6 weeks
    for (let i = 1; i <= daysToAdd; i++) {
        arrayOfDate.push({
            currentMonth: false,
            date: lastDayOfMonth.add(i, 'day'), // continue with next month's dates
            today: false
        });
    }

    return arrayOfDate;
};


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