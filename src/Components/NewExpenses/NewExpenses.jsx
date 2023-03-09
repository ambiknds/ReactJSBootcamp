import ExpensesForm from './ExpensesForm';
import './NewExpenses.css';
export default function NewExpenses(props){
  const saveExpenseDataHandler = (enteredExpenseData) => {
    props.onAddExpense(enteredExpenseData);
    console.log("Inside parent new expense ", enteredExpenseData);
  }
  return(
    <div className='new-expense'>
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}