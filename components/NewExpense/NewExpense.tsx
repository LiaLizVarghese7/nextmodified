// import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
interface ExpensesType{
  
  date: Date;
  title: string;
  amount: number| undefined;
  id: string;
}

interface EnteredExpenseDataType{
  
  date: Date;
  title: string;
  amount: number| undefined;
}

interface NewExpenseType {
onAddExpense: (expense: ExpensesType)=>void;
}

const NewExpense = ( props: NewExpenseType ) => {
  
  const saveExpenseDataHandler = (enteredExpenseData: EnteredExpenseDataType) => {
    console.log(enteredExpenseData);
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(typeof expenseData.id);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="flex justify-center">
      <div className="flex bg-violet-400 p-4 rounded-xl my-[10%] w-1/2 justify-center shadow-sm">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </div>
  );
};
export default NewExpense;
