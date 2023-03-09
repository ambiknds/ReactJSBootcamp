import React, {useState} from 'react';
import './ExpensesForm.css';
export default function ExpensesForm(props){
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const titleChangeHandler=(e)=>{
    setEnteredTitle(e.target.value);
    console.log(e.target.value);
  }
  const amountChangeHandler=(e)=>{
    setEnteredAmount(e.target.value);
    console.log(e.target.value);
  }
  const dateChangeHandler=(e)=>{
    setEnteredDate(e.target.value);
    console.log(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('data Submit')
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  }

  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
      </div>
      <div className="new-expense-control">
        <label>Amount</label>
        <input type="number" min="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
      </div>
      <div className="new-expense-control">
        <label>Date</label>
        <input type="date"  min="2020-01-01"  onChange={dateChangeHandler} value={enteredDate}/>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  )
}