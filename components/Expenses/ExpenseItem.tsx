import ExpenseDate from "./ExpenseDate";
// import Card from "../UI/Card";
// import "./ExpenseItem.css";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";

interface ExpensesItemType{
  id:number;
  title: string;
  amount: number;
  date: { 
    month: string;
     day: string;
     year: number;
  };
}

const ExpenseItem = (props: ExpensesItemType) => {
  const [title, setTitle] = useState(props.title);
  const [enteredTitle, setEnteredTitle] = useState('');
  const [message, setMessage] = useState('Enter updated title');
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  let id = `${props.id}`;
  const url = `http://localhost:9000/products/`+ id ;
  const clickHandler = () => {
    console.log(title);
    if(enteredTitle!== ''){
    setTitle(enteredTitle);
    setMessage('Enter updated title');
    axios.patch(url, {title: enteredTitle}, config)
      .then(
        (response) => {
          console.log(response);
          console.log(response.status === 200, 'product updated');
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((err) => console.log(err));
    }
    else{
      setMessage('Fill out this field to update');
    }
    setEnteredTitle('');
  };
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    
    setEnteredTitle(event.target.value);
  }
  console.log(props);
  return (
    // <Card className="flex justify-between items-center shadow-sm p-2 my-4 mx-0 rounded-xl bg-slate-300">
    //   <div className= "flex gap-4 my-2">
    //     <ExpenseDate date={props.date} />
    //     <h2 className="text-white text-base flex-auto mx-4 my-4">{title}</h2>
    //   </div>
    //   <div className="flex flex-row gap-4 items-end justify-start flex-auto">
        
        

    //     <div className= "flex flex-row flex-wrap gap-4 mb-2">
    //     <div className="text-base font-bold text-white bg-violet-800 border-solid border border-white p-2 rounded-xl">${props.amount}</div>
    //         <input className="p-2 rounded-md border border-solid border-gray-200" type="text" value= { enteredTitle } onChange={titleChangeHandler} />
          
    //       <button className="text-base font-bold text-white bg-violet-800 border-solid border border-white p-2 rounded-xl" onClick={clickHandler}>Change Title</button>
    //     </div>
    //   </div>
      
    // </Card>

    <div className="flex justify-between items-center shadow-sm p-2 my-4 mx-2 rounded-xl bg-slate-300">
      <div className="w-full sm:w-1/8 flex gap-2 items-end justify-start">
        <div className="w-full sm:w-1/2">
          <ExpenseDate date={props.date} />
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-black font-bold text-base flex-auto mx-4 mb-7">{title}</h2>
        </div>
      </div>
      {/* <div className="flex flex-col gap-5 items-end justify-start flex-auto"> */}
        <div className="w-full sm:w-7/8 flex flex-wrap gap-3 mb-2">
        <div className="w-full w-full md:w-1/4 text-base font-bold text-white bg-violet-800 border-solid border border-white p-2 rounded-xl">${props.amount}</div>
        <input className="w-full sm:w-1/3 md:w-1/4 p-2 rounded-md border border-solid border-gray-200" type="text" placeholder={message} value= { enteredTitle } required onChange={titleChangeHandler} />
        <button className="w-full sm:w-1/3 md:w-1/4 text-base font-bold text-white bg-violet-800 border-solid border border-white p-2 rounded-xl" onClick={clickHandler}>Change Title</button>
      </div>
      
    </div>
  );
};

export default ExpenseItem;
