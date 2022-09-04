import styled from "styled-components";
import BreakPoints from "../../../../../Styles/BreakPoints";

const Container = styled.div`
    @keyframes Show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: Show 0.6s ease-in;
    color: ${props => props.theme.color.icon};
    display: grid;
    grid-template-rows: 1.5fr 1fr;
    padding: 20px;
    margin: 30px;
    background: ${props => props.theme.color.bg[0]};
    box-shadow: ${props => props.theme.utils.boxShadow};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    border-radius: ${props => props.theme.utils.borderRadius};
    @media(max-width : ${BreakPoints.width[0]}) {
        margin: 10px 40px;
    }
    h2 {
        text-align: center;
    }
`

const Shield = styled.img`
    width: 35px;
    height: 35px;
    transform: translate(5px, 11px);
`

const Info = styled.div`
   margin: 80px 0px;
   h3 {
     margin: 10px;
   }
`

export {
    Container,
    Info,
    Shield
}