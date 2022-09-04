import styled from "styled-components";
import BreakPoints from "../../Styles/BreakPoints";

const Style = styled.form`
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    padding: 15px;
    min-width: 50%;
    min-height: 50%;
    max-width: 60%;
    max-height: 60%;
    transform: translate(40vh, 40vh);
    text-align: center;
    color: ${props => props.theme.color.icon};

    @media(max-width: ${BreakPoints.width[0]}){
        transform: translate(21vh, 30vh);
    }

    p{
        font-size: 0.7rem;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 75px;
        max-height: 75px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    input {
        color: ${props => props.theme.color.icon};
        padding: 8px;
        margin: 10px 15%;
        border-radius: ${props => props.theme.utils.borderRadius};
        outline-color: ${props => props.theme.color.cyan};
        background: ${props => props.theme.color.bg[0]};
    }
    button {
        transition: 0.7s ease;
        padding: 15px;
        font-weight: bold;
        font-family: sans-serif;
        box-shadow: ${props => props.theme.utils.boxShadow};
        border-radius: ${props => props.theme.utils.borderRadius};
        border: solid 2px ${props => props.theme.color.icon};
        cursor: pointer;
        svg {
            font-size: 24px;
            margin: -7px 5px;
        }

        &:hover {
            transition: 0.7s ease;
            transform: scale(1.2);
        }
    }

    button.Login {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px 15%;
    }

    button.Google {
        color: ${props => props.theme.color.icon};
        background: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
        
        margin: 10px 15%;

        &:hover {
            transition: 0.7s ease;
            color: ${props => props.theme.color.red};
            border: solid 2px ${props => props.theme.color.red};
        }
    }

    button.Git {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px 15%;
    }

    button.Instagram {
        color: ${props => props.theme.color.icon};
        background-image: linear-gradient(70deg, ${props => props.theme.color.red}, ${props => props.theme.color.purple});
        margin: 10px 15%;
    }

    button.Recovery {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px;
    }

    button.SignUp {
        color: ${props => props.theme.color.icon};
        background: ${props => props.theme.color.bg[0]};
        margin: 10px;
    }
`

export {
    Style
}