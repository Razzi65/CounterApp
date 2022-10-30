import { Button } from "@chakra-ui/react"
import counter from "./counter"


type Button1type = {
    title:string,
    onclickhandle?:() =>void
}


const Button1 = (props:Button1type) => {

    const onclickhandler = () => {
        return 
    } 

  
    return (
       
        <button onClick={props.onclickhandle}> {props.title} </button>

    )
}



export default Button1