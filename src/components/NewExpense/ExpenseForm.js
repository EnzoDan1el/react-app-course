import "./ExpenseForm.css"
import { useState } from "react";

const ExpenseForm = () =>{

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        }

        console.log(expenseData);

        // clear the input
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={(event) => setEnteredTitle(event.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        value={enteredAmount} 
                        min="0.01" 
                        step="0.01"
                        onChange={(event) => setEnteredAmount(event.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="date" 
                        value={enteredDate}
                        min="2019-01-01" 
                        step="2020-12-31" 
                        onChange={(event) => {
                            setEnteredDate(event.target.value)

                        }}
                    />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;