import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animations";

export const StyledCartModalBox = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: rgba(51, 51, 51, .5);
    z-index: 1001;

    dialog{
        animation: ${AnimationFadeIn} .5s;
        width: 100%;
        max-width: 500px;
        background: ${({theme}) => theme.colors.white};

        header{
            display: flex;
            background: ${({theme}) => theme.colors.primary};
            padding: 12px 20px;

            h2{
                color: ${({theme}) => theme.colors.white};
            }

            button{
                background: transparent;
                color: ${({theme}) => theme.colors.white};
                opacity: .5;
                transition: .4s;

                :hover{
                    opacity: 1;
                }
            }
        }

        .cartBox{
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 20px;

            @media (max-width: 450px){
                padding: 15px;
            }
        }
    }
`