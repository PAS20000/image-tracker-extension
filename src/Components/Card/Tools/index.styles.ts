import styled from "styled-components";

const Container = styled.div` 
    padding:15px;
    margin:10px;
    display:flex;
    justify-content:space-evenly;
    transform:translate(0, -20px);
    background-image:linear-gradient(${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    border-radius:0px 0px 8px 8px;
    box-shadow:${props => props.theme.utils.boxShadow}
`

export default Container