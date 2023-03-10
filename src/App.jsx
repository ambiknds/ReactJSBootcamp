import React, {useState} from 'react';
import './App.css'
import Expenses from './Components/Expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';

const expensesData = [
    {
      id: 1,
      title: 'Product 1',
      price: '$20.5',
      date: new Date(2020, 4, 14),
      description: 'First product'
    },
    {
      id: 2,
      title: 'Product 2',
      amount: '$200.5',
      date: new Date(2021, 6, 18),
      description: 'Second product'
    },
    {
      id: 3,
      title: 'Product 3',
      amount: '$60.5',
      date: new Date(2022, 7, 23),
      description: 'Third product'
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
