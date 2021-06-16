import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [onAddActive, setOnAddActive] = useState(true)

    const saveNewExpanseData = (enteredExpenseData) => {
        const enteredData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpense(enteredData);
        setOnAddActive(!onAddActive);
    }

    const switchForm = () => {
        setOnAddActive(!onAddActive)
    }


    return <div className='new-expense'>
        {!onAddActive && (<button onClick={switchForm}>Add new expenses</button>)}
        {onAddActive && (<ExpenseForm onNewExpenseData={saveNewExpanseData} switchForm />)}
    </div>
}

export default NewExpense;