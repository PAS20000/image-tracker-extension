import styled from "styled-components";

const Container = styled.a`
    transition: 1s;
    text-decoration: none;
    cursor: pointer;
    color:${props => props.theme.color.icon};

    :hover{
        transition: 0.6s;
        color:${props => props.theme.color.red};
        transform: scale(2);
    }
`

export {
    Container
}