import './App.css'
import Expenses from './Components/Expenses';
import NewExpenses from './Components/NewExpenses/NewExpenses';
export default function App() {

  const expenses = [
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
  return (
    <div className='App'>
      <NewExpenses/>
      <Expenses expenses={expenses}/>
    </div>
  )
}
