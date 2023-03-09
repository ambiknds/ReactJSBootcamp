import React, {useState} from 'react';
import './App.css'
import Expenses from './Components/Expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';

const expensesData = [
    {
      id: 1,
      title: 'TV',
      amount: '$20.5',
      date: new Date(2020, 4, 14)
    },
    {
      id: 2,
      title: 'Bike',
      amount: '$200.5',
      date: new Date(2021, 6, 18)
    },
    {
      id: 3,
      title: 'Car Insurance',
      amount: '$60.5',
      date: new Date(2022, 7, 23)
    }
  ]

export default function App() {

  const [expenses, setExpenses] = useState(expensesData)
  const addExpenseHandler = (expense) => {
    console.log('Inside App ', expense)
    setExpenses([expense, ...expenses]);
  }
  return (
    <div className='App'>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}
