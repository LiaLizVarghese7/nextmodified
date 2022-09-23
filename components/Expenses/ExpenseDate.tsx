
// import './ExpenseDate.css';

interface ExpenseDateType {
  date: { 
    month: string;
    day: string;
    year: number;
  };
}

const ExpenseDate = (props: ExpenseDateType) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // // const year = props.date.getFullYear();
  // const year = '2013'
  console.log(props);
  const month = props.date.month;
  const day = props.date.day;
  const year = props.date.year
  // const month = "Jan";
  // const day = 'Wednesday';
  // const year = 2015;
  return (
    <div className='bg-red-300 w-20 h-20 border-2 rounded-xl border-white border-solid text-center justify-center'>
      <div className='text-xs font-bold'>{month}</div>
      <div className='text-xl font-bold'>{day}</div>
      <div className='text-2xl font-bold'>{year}</div>
    </div>
  );
}
export default ExpenseDate;
