'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useStore} from "@/lib/store";

export default function TransitionLink({ url, children, className = null }) {
    const router = useRouter()
    const { isTransitionActive, setIsTransitionActive } = useStore()

    return (
        <Link className={className}
            onClick={(e) => {
                // j'empêche le lien de fonctionner
                e.preventDefault()

                // j'évite de superposer des transitions
                if (isTransitionActive) return

                // je déclare globalement qu'une transition se lance
                setIsTransitionActive(true)

                // j'attends un petit temps de sorte à ce que mon animation de sortie
                // se termine puis je push la nouvelle url dans le router
                setTimeout(() => {
                    router.push(url)
                }, 900)
            }}
            href={url}
        >
            {children}
        </Link>
    )
}