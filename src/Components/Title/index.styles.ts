import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Text = styled.h1`
    padding: 5px;
    color:${props => props.theme.color.icon};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px 0px 0px 0px;
`

export {
    Container,
    Text,
    Image
}