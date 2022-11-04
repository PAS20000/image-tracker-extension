import styled from "styled-components";

const Error = styled.div`
    color : ${props => props.theme.color.red};
    display: grid;
    padding: 20px;
    margin-bottom: 20px;
    background: ${props => props.theme.color.bg[0]};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    justify-content: center;
    text-align: center;
    width: 100%;
    h2 svg {
        transform: translate(2px, 2px);
    }
    p {
        margin: 10px 0px;
        font-size: 1.2rem;
    }

    img {
        border-radius: 8px;
        margin: 10px 0px;
        border: solid 1px ${props => props.theme.color.icon};
    }
`

export {
    Error
}