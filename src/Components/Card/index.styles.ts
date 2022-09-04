import styled from "styled-components";

const ImageStyle = styled.img`
    width:100%;
    height:100%;
    transform-origin: 'center center';
    object-fit:cover;
`

const Box = styled.div`
    width:50vh;
    height:70vh;
    margin:10px;
    overflow:hidden;
    border-radius:8px 8px 0px 0px;
    box-shadow:${props => props.theme.utils.boxShadow};
    cursor: zoom-in;
`

const Container = styled.div`
  @keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  }
   animation: show 1s ease-in;
   display: grid;
`

export {
    ImageStyle,
    Box,
    Container
}