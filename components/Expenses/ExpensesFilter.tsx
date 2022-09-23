import React, { ChangeEvent } from 'react';

// import './ExpensesFilter.css';

interface Props {
  selected: number;
  onClickFilter: (selectedYear: number)=>void;
  onChangeFilter: (selectedYear: number)=>void;

  }

const ExpensesFilter = (props: Props) => {
 const dropdownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) =>{
    props.onChangeFilter(Number(event.target.value));
 }
const clickHandler = () => {
  props.onClickFilter(props.selected);
}

  return (
    <div className=" py-4	px-4 bg-violet-400">
      <div className="flex w-full	items-center justify-between my-4	mx-0">
        <label className="font-bold text-white mb-2">Filter by year</label>
       
        <select className="px-12 py-2 font-bold rounded-md" value= {props.selected} onChange= { dropdownChangeHandler }>
        <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          
        </select>

        <button className="text-base font-bold text-white bg-violet-800 border-solid border border-white p-2 rounded-xl" onClick={clickHandler}>Filter</button>
      </div>
    </div>
  );
};

export default ExpensesFilter;