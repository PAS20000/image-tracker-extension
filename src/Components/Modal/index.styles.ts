import styled from "styled-components";
import BreakPoints from '../../Styles/BreakPoints/index'

const BackGround = styled.div`
    width: 100%;
    height: 120vh;
    position: fixed;
    z-index: 9999;
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    opacity: 0.8;
`

const Container = styled.div`
    @keyframes FadeIn {
        from {
           transform: translate(65vh, 100vh);
        }
        to {
            transform: translate(65vh, 0vh);
        }
    }
    animation: FadeIn 0.5s ease-out;
    background-image: linear-gradient(70deg,${props => props.theme.color.bg[0]}, ${props => props.theme.color.bg[1]});
    position:fixed;
    width:80vh;
    height:100vh;
    transform: translate(65vh, 0vh);
    box-shadow:${props => props.theme.utils.boxShadow};
    border-radius:${props => props.theme.utils.borderRadius};
    z-index: 99999;

    @media(max-width: ${BreakPoints.width[0]}) {
        @keyframes FadeIn {
            from {
                transform: translate(13vh, 100vh);
            }
            to {
                transform: translate(13vh, 0vh);
            }
        }
       animation: FadeIn 0.5s ease-out;
       transform: translate(13vh, 0vh);
       width:80vh;
       height:100vh;
    }

    @media(min-height: ${BreakPoints.height[0]}) {
        @keyframes FadeIn {
            from {
                transform: translate(35vh, 100vh);
            }
            to {
                transform: translate(35vh, 5vh);
            }
        }
       animation: FadeIn 0.5s ease-out;
       transform: translate(35vh, 5vh);
    }
`

export {
    BackGround,
    Container
}