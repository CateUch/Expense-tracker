import React from 'react';
import './ExpensesFilter.css';


const ExpensesFilter = (props) => {

    function selectValue(event) {
        const selectedValue = event.target.value;
        props.onSelectedValue(selectedValue);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control' >
                <label >Filter</label>
                <select value={props.selected}
                        onChange={(event) => selectValue(event)}
                        >
                    <option value='2022' >2022</option>
                    <option value='2021' >2021</option>
                    <option value='2020' >2020</option>
                    <option value='2019' >2019</option>
                </select>
            </div>
        </div>
    )

}

export default ExpensesFilter;