import './ExpensesForm.css';
export default function ExpensesForm(){
  const titleChangeHandler=()=>{
    console.log('Entered')
  }
  return(
    <form>
      <div className="new-expense-control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense-control">
        <label>Amount</label>
        <input type="number" min="0.01" />
      </div>
      <div className="new-expense-control">
        <label>Date</label>
        <input type="date"  min="2019-01-01" max="2023-01-01"/>
      </div>
      <div className="new-expense-actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  )
}