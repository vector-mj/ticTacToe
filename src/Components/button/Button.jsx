//@ts-nocheck

import "./Button.css"
const Button = ({val,clickHandler}) =>{
    return (<div className="btn" onClick={clickHandler}>{val}</div>)
}

export default Button;