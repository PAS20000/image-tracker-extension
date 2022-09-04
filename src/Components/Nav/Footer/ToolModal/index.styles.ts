import styled from "styled-components";
import BreakPoints from "../../../../Styles/BreakPoints";

const Header = styled.div`
    margin: 0px 30px 5px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    padding: 20px;
    height: 170px;
    select{
        margin: 10px 10px 5px 10px;
    }

    @media(min-height: ${BreakPoints.height[0]}) {
        margin: 30px 30px;
    }
`

const Card = styled.div`
    display: grid;
    margin: 5px 30px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    padding: 20px;

    @media(min-height: ${BreakPoints.height[0]}) {
        margin: 30px 30px;
    }
`

const Subtitle = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    color: ${props => props.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    svg{
        transform: translateY(2px);
    }
`

const ExtensionContainer = styled.div`
    margin: 16px 10px;
    select{
        transition: 0.5s ease;
        cursor: pointer;
        padding: 5px;
        border-radius: ${props => props.theme.utils.borderRadius};
        background: ${props => props.theme.color.bg[1]};
        color: ${props => props.theme.color.icon};
        border: solid 1px;

        :hover{
            transition: 0.5s ease;
            transform: scale(1.2);
        }
        :focus{
            transition: 0.5s ease;
            transform: scale(1.2);
        }
    }
`

export {
    Header,
    Card,
    Subtitle,
    ExtensionContainer
}