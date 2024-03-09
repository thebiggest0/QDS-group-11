// import dayjs from "dayjs";

// export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
//     const firstDateOfMonth = dayjs().month(month).year(year).startOf('month').startOf('month');
//     const lastDateOfMonth = dayjs().month(month).year(year).endOf('month').endOf('month');

//     const arrayOfDate = []

//     for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
//         arrayOfDate.push(firstDateOfMonth.date(i));
//     }

//     return arrayOfDate;
// }