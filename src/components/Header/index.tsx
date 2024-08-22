'use client'

import { useRef } from 'react'
import * as Styled from './styles'

import { useTranslate } from '@/customRooks/useTranslate'

export type HeaderProps = {
    portuguese: string
    english: string
}

export const Header = ({ portuguese, english }: HeaderProps) => {
    const container = useRef<HTMLDivElement>(null)
    useTranslate({ component: container, portuguese })
    return <Styled.Wrapper ref={container}>{english}</Styled.Wrapper>
}
