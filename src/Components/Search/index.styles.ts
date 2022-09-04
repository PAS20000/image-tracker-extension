import styled from "styled-components";

const Select = styled.select`
    transition: 0.5s ease;
    border-radius: ${props => props.theme.utils.borderRadius};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background: ${props => props.theme.color.bg[1]};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    color: ${props => props.theme.color.icon};
    border: solid 1px;
    cursor: pointer;
    text-align: center;
    padding: 5px;
    :hover{
        transition: 0.5s ease;
        transform:scale(1.1);
    }
    :focus{
        transition: 0.5s ease;
        transform:scale(1.1);
    }
`

export {
    Select
}