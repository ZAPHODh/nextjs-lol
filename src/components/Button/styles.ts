import styled, { keyframes } from 'styled-components'

const glowing = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
`

export const Button = styled.button`
    background-color: #1c1c1c;
    color: #fff;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        background: linear-gradient(
            45deg,
            #7debf3,
            #537989,
            #7debf3,
            #537989,
            #7debf3,
            #537989,
            #7feff2,
            #537989,
            #7debf3,
            #537989
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: ${glowing} 10s linear infinite;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        border-radius: 10px;
    }

    &:hover::before {
        opacity: 1;
    }

    &:active::before {
        background: transparent;
    }

    &::after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #111;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    &:active {
        color: #000;
    }
`
