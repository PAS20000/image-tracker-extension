import styled from "styled-components";

const CountImagesStyle = styled.h2`
    margin: 15px 10px;
    color: ${props => props.theme.color.icon};
    span{
       background: ${props => props.theme.color.bg[1]};
       border-radius: ${props => props.theme.utils.borderRadius};
       padding: 5px;
       text-align:center;
       svg {
         margin: 0px 5px 0px 0px;
         transform: translateY(4px);
       }
    }
`

export {
  CountImagesStyle
}