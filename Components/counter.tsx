import { getRandomValues } from "crypto"
import { useState } from "react"
import Buttons from "./button"

const Counter = () => {

    const [varib, functon] = useState(0)

    const plusMethod = () => {
        functon(varib + 1)
        console.log(varib);
        
    }

    const minusMethod = () => {
        functon(varib - 1)
        console.log(varib);

    }

    return (
        <div>
            <Buttons colorScheme='blue' buttonName='Plus' onclick={()=>plusMethod()}/>

            <Buttons colorScheme='teal' buttonName={varib}  />

            <Buttons colorScheme='blue' buttonName='Minus' onclick={()=>minusMethod()}/>
        </div>

    )
}

export default Counter