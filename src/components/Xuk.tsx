import React, {useState} from 'react';

export const Xuk = () => {
    let [a,setA] = useState(1);

    const onClickHandler = () => {
        setA(++a)
    }

    const onClickReset = () => {
        setA(0)
    }
    return (
        <>
            <h1>
                {a}
            </h1>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickReset}>reset</button>
        </>
    );
};

