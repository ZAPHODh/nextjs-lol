'use client'

import { ThemeProvider } from 'styled-components'
import { brightTheme } from './theme'

type ThemeClientProps = {
    children: React.ReactNode
}

export const ThemeClient = ({ children }: ThemeClientProps) => {
    return <ThemeProvider theme={brightTheme}>{children}</ThemeProvider>
}
