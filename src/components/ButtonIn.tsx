type ButtonInPropsType = {
    callBack: () => void
    name: string
}


export const ButtonIn = ({callBack,name}: ButtonInPropsType) => {

    const OnClickButtonHandler = () => {
        callBack();
    }

    return (
        <button onClick={OnClickButtonHandler}>{name}</button>
    );
};