import styled from "styled-components"
import BreakPoints from "../../../../Styles/BreakPoints"

const Card = styled.div`
    display: grid;
    grid-template-columns: 0.5fr auto;
    padding: 20px;
    margin: 30px 20px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    font-size: 0.8rem;
    @media(max-width : ${BreakPoints.width[0]}) {
        margin: 15px 20px;
    }
    img {
        width: 100px;
        height: 100px;
        background-position: 0%;
    }
`

const Sign = styled.a<{bg : string}>` 
    transition: 0.5s ease;
    background: ${props => props.bg};
    margin: 20px 20px;
    text-align: center;
    padding: 8px;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};
    cursor: pointer;
    :hover {
        transition: 0.5s ease;
        transform: scale(1.1);
    }
`

const Label = styled.span<{deg ?: string, trans ?: string, width ?: string, bg ?: string, margin ?: string, position ?: string}>`
    position: ${props => props.position ?? 'absolute'};  
    background: ${props => props.bg ?? props.theme.color.red};
    padding: 4px;
    font-size: 1rem;
    margin: ${props => props.margin ?? '0px'};
    transform: rotate(${props => props.deg ?? '-40deg'}) translate(${props => props.trans ?? '-15px'});
    width: ${props => props.width ?? '65px'};
    text-align: center;
    z-index: 10;
    box-shadow: ${props => props.theme.utils.boxShadow};
    border-radius: ${props => props.theme.utils.borderRadius};

    @media(min-width: ${BreakPoints.width[1]}) {
        transform: rotate(-40deg) translate(5px, 18px);
    }
`

export {
    Card,
    Sign,
    Label
}