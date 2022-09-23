import { FunctionComponent, useEffect, useState } from "react";
import Header from "../components//Header";
import BaseLayout from "../components/BaseLayout";
import axios from "axios";
import NewExpense from '../components/NewExpense/NewExpense';


interface ExpensesType{
    title: string;
    amount: number| undefined;
    date: Date;
    id: string;
  }
  
const AllExpenses: FunctionComponent = () => {
 
    const url ="http://localhost:9000/products";
    const [expenses, setExpenses] = useState(null);
  
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };
  
    const addExpenseHandler = (expense: ExpensesType) =>{
      console.log("in App.js");
      console.log(expense);
       axios.post(url, {
          title: expense.title,    
          price: expense.amount,
          date: expense.date   //this is of type date 
        },config)
        .then((response) => {
          setExpenses(response.data);
        });
    };

  return (
    <BaseLayout>
           <NewExpense onAddExpense = {addExpenseHandler} />

    </BaseLayout>
  );
};

export default AllExpenses;