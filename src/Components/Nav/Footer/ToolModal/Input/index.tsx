import * as React from 'react'

type Props = React.HTMLAttributes<HTMLInputElement>

const InputRange = (props:Props) => {
    
    return  <input type="range" {...props}/>
}

export default InputRange