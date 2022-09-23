import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
//import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import React from "react";
import axios from "axios";
import { type } from "os";

interface ExpensesProps{
  items: Array<ExpensesType>
}

interface ExpensesType{
  
   id:number;
   date: { 
     month: string;
      day: string;
      year: number;
   };
   title: string;
   price: number;
  
}

const Expenses = (props: ExpensesProps) => {

  const [expensesFiltered, setExpensesFiltered] = useState<ExpensesType[]>([]);
  const [isLoading,setIsloading]=useState(false);
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear: number) => {
    setFilteredYear(selectedYear);
    // console.log(selectedYear);
  };
  const myItems=props.items;
  console.log(props);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };

const filterClickHandler = (selectedYear: number)=> {

  console.log(selectedYear);
  setIsloading(true)
  let url ="http://localhost:9000/products/"+filteredYear;
  console.log(url);
  axios.get(url,config).then((response) => {
    setExpensesFiltered(response.data);
    console.log(response.data);
    setIsloading(false)
  });
  
  
}
{
  console.log(expensesFiltered)
}

  return (
    <div>
      <div className="exp-4 bg-gray-800 my-8 mx-auto rounded-xl shadow-smpenses">
       <ExpensesFilter selected={filteredYear} onClickFilter={filterClickHandler} onChangeFilter={filterChangeHandler} />
       {/* <label className="font-bold text-white mb-2">Filtered expenses</label> */}
       {!isLoading && expensesFiltered &&
        expensesFiltered.map((product: ExpensesType) =>  {
          
          return(
            <ExpenseItem
              key={product.id}
              id={product.id}
              title={product.title}
              amount={product.price}
              date={product.date}
              />
            
          )
        })
      }
   
      <br></br>
      {
        myItems.map((product: ExpensesType) =>  {
          
          return(
            <ExpenseItem 
            key={product.id}
            id={product.id}
            title={product.title}
            amount={product.price}
            date={product.date}
            />
          )
        })
      }
       
      
      </div>
    </div>
  );
};

export default Expenses;
