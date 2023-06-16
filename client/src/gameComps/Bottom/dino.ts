import styled, { keyframes } from "styled-components";

const anims = {
    jp: keyframes`
    {
        0% {margin-top: 60px; }
        50% {margin-top: 5px; }
        100% {margin-top: 60px; }
    }`,
    rn: keyframes`
    {
        0% {background-image: url('../left.com.png'); }
        50% {background-image: url('../right.com.png'); }
        100% {background-image: url('../left.com.png'); }
    }`,

    c: keyframes`
    {
        form {margin-left: 580px ;}
        to {margin-left: -5px;}
    }
    `,
}

export const Cactus1 = styled.div<{$speed:number}>`{
    position: absolute;
    background-image: url('../cactus.com.png');
    width: 15px;
    height: 20px;
    margin-top: 72px;
    margin-left: 580px;
    background-size: 15px 20px;
    animation: ${anims.c} linear ${props => props.$speed}s infinite;
  }`


export const Dinj = styled.div<{$speed:number}>`
    position: absolute;
    background-image: url('../pngwing.com.png');
    width: 40px;
    height: 40px;
    margin-top: 60px;
    background-size: 40px 40px;
    animation: ${anims.jp} ${props => props.$speed}s linear;
`;

export const Dinr = styled.div`
    position: absolute;
    background-image: url('../pngwing.com.png');
    width: 40px;
    height: 40px;
    margin-top: 60px;
    background-size: 40px 40px;
    animation: ${anims.rn} 0.3s infinite;
`;