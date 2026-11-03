'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: 'fade-up' | 'scale' | 'fade'
  as?: 'div' | 'li' | 'p' | 'span' | 'figure' | 'section' | 'article'
}

export function Reveal({ children, className, delay = 0, variant = 'fade-up', as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const variantClass = variant === 'scale' ? 'reveal-scale' : variant === 'fade' ? 'reveal-fade' : 'reveal'

  return (
    <Tag
      // @ts-expect-error -- ref type is shared across the allowed intrinsic tags
      ref={ref}
      className={cn(variantClass, className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
