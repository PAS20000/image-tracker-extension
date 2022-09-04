import styled from "styled-components";

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border: solid 2px ${props => props.theme.color.icon};
    position: absolute;
    z-index: 2;
`

const Welcome = styled.h3`
    transform: translate(30px, -9px);
    background-image: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    box-shadow: ${props => props.theme.utils.boxShadow};
    border: solid 2px ${props => props.theme.color.icon};
    text-align: center;
    margin: 25px 35px;
    padding: 10px 25px;
    border-radius: ${props => props.theme.utils.borderRadius};
    position: absolute;
    text-transform: capitalize;
    z-index: 1;
`

const DefaultImage = styled.span`
        div.Image {
            font-size: 40px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-image: linear-gradient(70deg, ${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
            box-shadow: ${props => props.theme.utils.boxShadow};
            border: solid 2px ${props => props.theme.color.icon};
            position: absolute;
            z-index: 2;
            div {
               text-transform: capitalize;
               transform: translate(25%, 15%);
            }
        }
`

export {
    Image,
    DefaultImage,
    Welcome
}