import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    const [filterValue, setFilterValue] = useState(props.selected)

    const changeFilterValue = (value) => {
        setFilterValue(value);
        props.changeFilterValue(value);
    }

    const filteredExpenses = props.expenses.filter(element => {
        return (
            element.date.getFullYear().toString() === filterValue
        )
    });



    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onSelectedValue={changeFilterValue} selected={props.selected} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;