'use client'

import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useStore} from "@/lib/store";

export default function PageTransition({ children }) {
    const pathname = usePathname()
    const refPage = useRef(null)
    const refTransition = useRef(null)
    const {
        isTransitionActive,
        setIsTransitionActive,
        isFirstLoad,
        setIsFirstLoad,
    } = useStore()

    const _hide = () => {
        gsap.to(refTransition.current, {
            opacity: 0,
            duration: 0.6,
            delay: isFirstLoad ? 0.3 : 0,
            onComplete: () => {
                gsap.set(refTransition.current, { visibility: 'hidden' })
                setIsFirstLoad(false)
                setIsTransitionActive(false)
            },
        })
    }

    const _show = () => {
        gsap.set(refTransition.current, { visibility: 'visible', opacity: 0 })
console.log(refTransition.current)
        gsap.to(refTransition.current, {
            opacity: 1,
            duration: 0.6,
        })
    }

    useGSAP(() => {
        // Quand je change de route, je joue l'animation d'entrée
        // et refresh scrolltrigger
       setIsTransitionActive(true)
        ScrollTrigger.refresh()
        _hide()
    }, [pathname])

    useGSAP(() => {
        // Code spécifique à la première visite du site
        if (isFirstLoad) {
            gsap.set(refTransition.current, { opacity: 1 })
        }
    }, [isFirstLoad])

    useGSAP(() => {
        // Chaque fois que isTransitionActive se fait set à true, je joue
        // l'animation de sortie
        if (isTransitionActive) {

            _show()
            console.log('transition active')
        }
    }, [isTransitionActive])

    return (
        <>
            <div ref={refPage} key={pathname}>
                {children}
            </div>
            <div ref={refTransition} className="transition">
                <img src="/assets/images/logo-small.png" alt="logo" />
            </div>
        </>
    )
}
