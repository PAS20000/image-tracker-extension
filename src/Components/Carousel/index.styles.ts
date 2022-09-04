import styled from "styled-components";

const Container = styled.div`
    display:flex;
    justify-content:center;
    ::-webkit-scrollbar { //chrome
        display:none;
    }
    scrollbar-width:none;
    overflow-x:auto;
    scroll-behavior:smooth !important;
`

export {
    Container,
}