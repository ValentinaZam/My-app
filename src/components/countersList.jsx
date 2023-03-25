import React, { useState } from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" }];


    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const updateCounters = counters.filter(c => c.id !== id)
        setCounters(updateCounters);
    }

    const handleReset = () => {
        setCounters(initialState);
    }

    const onIncrement = (id) => {
        const сounterIncrement = counters.map((elem) => {
            const copy = { ...elem };
            if (copy.id === id) {
                copy.value = copy.value + 1;
                return copy;
            } else {
                return copy;
            }
        })
        setCounters(сounterIncrement)
    }

    const onDecrement = (id) => {
        const сounterDecrement = counters.map((elem) => {
            const copy = { ...elem };
            if (copy.id === id && copy.value > 0) {
                copy.value = copy.value - 1;
                return copy;
            } else {
                return copy;
            }
        })
        setCounters(сounterDecrement)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} onDelete={handleDelete} onIncrement={onIncrement} onDecrement={onDecrement} {...count} />))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </>
    );
}
export default CountersList;