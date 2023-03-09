import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
export default function Expenses(props) {
  return (
    <div className="expenses">
      {
        props.expenses.map((expense) => {
          return (
            <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />
          )
        })
      }
    </div>
  )
}