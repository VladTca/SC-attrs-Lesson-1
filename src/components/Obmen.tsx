import React, {useState} from 'react';
import {ObmenMex} from "./ObmenMex";


export type filterType = 'all' | 'dollars' | 'rubls'


export const Obmen = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [nameButton, setNameButton] = useState<filterType>('all')
    let currentMoney = money;
    if (nameButton === 'rubls') {
        currentMoney = money.filter((x) => x.banknots === 'RUBLS');

    }
    if (nameButton === 'dollars') {
        currentMoney = money.filter((x) => x.banknots === 'Dollars');
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setNameButton(nameButton)
    }
    return (
        <ObmenMex currentMoney={currentMoney}
                  onClickFilterHandler={onClickFilterHandler}/>
    );
};

