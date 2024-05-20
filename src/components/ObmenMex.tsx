import React from 'react';
import {filterType} from "./Obmen";
type Money = {
    banknots: string
    value: number
    number: string
}



type ObmenMexTypes={
    currentMoney: Money[];
    onClickFilterHandler: (nameButton: filterType) => void;
}

export const ObmenMex = ( {currentMoney, onClickFilterHandler}: ObmenMexTypes) => {
    return (
        <>
            <ul>

                {currentMoney.map((x, index) => {
                    return (
                        <li key={index}>
                            <span>{x.banknots}</span>
                            <span>{x.value}</span>
                            <span>{x.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => onClickFilterHandler('all')}>all</button>
            <button onClick={() => onClickFilterHandler('rubls')}>rubls</button>
            <button onClick={() => onClickFilterHandler('dollars')}>dollars</button>
        </>
    );
};
