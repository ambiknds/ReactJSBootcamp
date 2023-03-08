import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';
function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item-description">
        <h1>{props.title}</h1>
      </div>
      <div className="expense-item-price">{props.amount}</div>
    </div>
  )
}
export default ExpenseItem;