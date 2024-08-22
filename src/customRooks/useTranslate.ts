import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { RefObject } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

type useTranslateProps = {
    component: RefObject<HTMLDivElement>
    portuguese: string
}
export const useTranslate = ({ component, portuguese }: useTranslateProps) => {
    if (!component) return

    const duration = portuguese.split('').length / 20
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: component.current,
                    start: 'bottom center',
                },
            })
            tl.to(component.current, {
                delay: 0.5,
                duration,
                text: portuguese,
                ease: 'none',
            })
        },
        { scope: component }
    )
}
