import { Button, ButtonGroup } from '@chakra-ui/react'

type buttontype = {
    colorScheme:string,
    buttonName:string | number,
    onclick?:()=>void
}

const Buttons = (props:buttontype)=> {
    return (

        <Button margin={5} colorScheme={props.colorScheme} onClick={props.onclick}> {props.buttonName}</Button>
    )
}


export default Buttons