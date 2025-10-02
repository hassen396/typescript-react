interface props {
    text: string
}

const Alert = ({text}: props) => {
    return ( <div>{text}</div> );
}
 
export default Alert;