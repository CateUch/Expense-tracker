import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    function onTitleChange(event) {
        setEnteredTitle(event.target.value);
        console.log(event.target.value)
    };

    function onEnteredAmount(event) {
        setEnteredAmount(event.target.value);
        console.log(event.target.value)
    };

    function onEnteredDateChange(event) {
        setEnteredDate(event.target.value);
        console.log(event.target.value)
    };

    function handleSubmit(event) {
        event.preventDefault();

        const enteredData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }

        props.onNewExpenseData(enteredData)

        console.log(enteredData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text"
                    onChange={onTitleChange}
                    value={enteredTitle} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number'
                    min='0.01'
                    step='0.01'
                    onChange={onEnteredAmount}
                    value={enteredAmount} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date"
                    min='2019-01-01'
                    max='2021-11-06'
                    onChange={onEnteredDateChange}
                    value={enteredDate} />
            </div>
            <button type='submit'>Add expense</button>
            <button onClick={props.switchForm}>Cancel</button>
        </div>
    </form>
}


export default ExpenseForm;