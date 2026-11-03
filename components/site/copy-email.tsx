'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-11 items-center gap-2 self-start rounded-full border border-foreground/20 px-5 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground md:self-auto"
    >
      {copied ? <Check className="size-4 text-signal" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? 'Copied to clipboard' : 'Copy email'}</span>
    </button>
  )
}
