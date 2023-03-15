import React, { useState } from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
    {id: 0, value: 0, name: "Ненужная вещь"},
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" }];
    

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        console.log(newCounters)
        setCounters(newCounters);
    }

    const handleReset = () => {
        setCounters(initialState);
    }

    const onIncrement = (id) => {
        const newCounters2 = counters.map((elem, index)=> index === id? { ...elem, value: elem.value + 1}: elem)
        setCounters(newCounters2)
    }

    const onDecrement = (id) => {
        const newCounters3 = counters.map((elem, index)=> (index === id &&  elem.value > 0) ? { ...elem, value: elem.value - 1}: elem)
        setCounters(newCounters3)
    }

    // const handelUpdate = () => {
    //     const updatedState = [
    //         {id: 0, value: 1, name: "Ненужная вещь"},
    //         { id: 1, value: 2, name: "Ложка" },
    //         { id: 2, value: 3, name: "Вилка" },
    //         { id: 3, value: 0, name: "Тарелка" },
    //         { id: 4, value: 0, name: "Набор минималиста" }];
        
    //     setCounters(updatedState);
    // }

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} onDelete={handleDelete} onIncrement={onIncrement} onDecrement={onDecrement} {...count} />))}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
            {/* <button className="btn btn-primary btn-sm m-2" onClick={handelUpdate}>Обновить состояние</button> */}
        </>
    );
}
export default CountersList;