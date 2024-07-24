'use client'

import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'
export const GlobalStyle = createGlobalStyle`${(props) => css`
    html,
    body {
        padding: 0;
        margin: 0;
    }
    a {
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
`}`
