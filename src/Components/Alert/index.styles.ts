import styled from "styled-components";

const Error = styled.div`
    color : ${props => props.theme.color.red};
    padding: 20px;
    margin: 20px;
    background: ${props => props.theme.color.bg[0]};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    border-radius: ${props => props.theme.utils.borderRadius};
    border: solid 2px ${props => props.theme.color.red};
    text-align: center;
    transform: translate(0px, 25vh);
    position: absolute;
    svg {
        transform: translate(2px, 2px);
    }
`

export {
    Error
}