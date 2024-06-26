import './App.css';

import {Xuk} from "./components/Xuk";
import {Obmen} from "./components/Obmen";
import {useState} from "react";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {ButtonIn} from "./components/ButtonIn";





function App() {
    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    let [title, setTitle] = useState('')



    const addMessage = (title: string) => {
        let newMessage = {message:title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title);
        setTitle('')
    }


    return (
        <div className="App">
            {/*<Title>Styled-components <span>.attrs</span> method</Title>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <ButtonIn name={'+'} callBack={callBackButtonHandler} />
            {message.map((m, index) => {
                return (
                    <div key={index}>
                        {m.message}
                    </div>
                )
            })}

            {/*<Car topCars={topCars}/>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={()=>foo2(100200)}>2</button>*/}
            {/*<Button callBack={foo1} name="My youtube chennel 1"/>*/}
            {/*<Button callBack={()=>foo2(100500)} name="My youtube chennel 2"/>*/}
            {/*<Button name={'My youtube chennel 3'} callBack={()=>foo3('Alex', 25)}/>*/}
            {/*<Xuk/>*/}
            {/*<Obmen/>*/}
            {/*<Form>*/}
            {/*    <Field pad="50px" placeholder="HEllo" title="help"/>*/}
            {/*    <Field/>*/}
            {/*    <Field/>*/}

            {/*    <Checkbox/>*/}
            {/*</Form>*/}
        </div>
    );
}


export default App;

// const foo1 = () => {
//     console.log('100200')
// }
// const foo2 = (cifra: number) => {
//     console.log(cifra);
// }
// const foo3 = (name: string, age: number) => {
//     console.log(name, age);
// }
//

//
//
// const topCars = [
//     {id: 1, manufacturer: 'BMW', model: 'm5cs'},
//     {id: 2, manufacturer: 'Mercedes', model: 'e63s'},
//     {id: 3, manufacturer: 'Audi', model: 'rs6'}
// ]
//
// type CarType = {
//     id: number
//     manufacturer: string
//     model: string
// }
//
// type CarPropsType = {
//     topCars: CarType[]
// }
//
//
// const Car = (props: CarPropsType) => {
//     return (
//         <div>
//             <table>
//                 <tr>
//                     <th>
//                         manufacturer
//                     </th>
//                     <th>
//                         model
//                     </th>
//                 </tr>
//                 {props.topCars.map((car) =>
//                     <tr key={car.id}>
//                         <td>{car.manufacturer}</td>
//                         <td>{car.model}</td>
//                     </tr>)}
//             </table>
//         </div>
//     )
// }
//
//
// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     margin-bottom: 32px;
//
//     span {
//         color: #e91e63;
//     }
// `;
//
// const Form = styled.form`
//     width: 100%;
//     max-width: 500px;
// `;
//
// const Field = styled.input.attrs(({placeholder, title}) => ({
//     placeholder: placeholder || 'type smth...',
//     title: title || "hello"
// }))<{ pad?: string }>`
//     //neobazatelnoe svoistvo -?-
//     padding: 5px ${props => props.pad || '10px'}px;
//     margin: 10px 0;
//     width: 100%;
//     font-size: 1rem;
// `;

// const Checkbox = styled(Field).attrs((props) => ({
//     type: 'checkbox',
//     title: props.title || "Checkbox"
//
// }))``

