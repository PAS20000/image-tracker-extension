import { RiErrorWarningFill } from "react-icons/ri"
import { Error } from "./index.styles"

type Props = {
    title : string
    describe : string
}

const Alert = ({
    title,
    describe
} : Props) => {
   
    return (
        <Error>
            <h2>
                <RiErrorWarningFill /> {title}
            </h2>
            <p>
                {describe}
            </p>
        </Error>
    )
}

export default Alert