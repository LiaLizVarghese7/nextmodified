import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BaseLayout from '../components/BaseLayout';


import Expenses from '../components/Expenses/Expenses';
import axios from 'axios';
import React from 'react';
import { builtinModules } from 'module';

// interface ExpensesType{
//   title: string;
//   price: number| undefined;
//   date: Date;
//   id: string;
// }
// interface ExpensesState{
//   expenses: Array<ExpensesType>
// }

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

const Home: NextPage = () => {

  const url ="http://localhost:9000/products";
  const [expenses, setExpenses] = React.useState<ExpensesType[]>([]);;
  // const [expensesData, setExpensesData] = React.useState(null);


  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
  React.useEffect(() => {
    
    axios.get(url,config).then((response) => {
      setExpenses(response.data);
      console.log(response.data);
    });
    
  }, []);
  return (
  
      <BaseLayout>
        <Expenses items={expenses}></Expenses>
      </BaseLayout>
  
  )
}

export default Home
