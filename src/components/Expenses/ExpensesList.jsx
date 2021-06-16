
import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    if (props.filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return <ul className='expenses-list'>
        {props.filteredExpenses.map(i =>
            <ExpenseItem key={i.id}
                title={i.title}
                amount={i.amount}
                date={i.date}
            />
        )}
    </ul>
}

export default ExpensesList;