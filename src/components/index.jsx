const getFilterFutureDate = futDate => {
  const getCurDate = new Date();

  // ? set full year
  getCurDate.setFullYear(2027);

  // ? set users Future Date
  getCurDate.setDate(futDate);

  const [day, date, month, year] = getCurDate.toDateString().split(' ').splice(0, 4);

  const [pureDay] = day.split(',').splice(0, 1);

  return `${day} days from today is ${pureDay} ${month} ${date} ${year}`;
};

export default getFilterFutureDate;
