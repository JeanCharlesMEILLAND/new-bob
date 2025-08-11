// components/ui/Button.tsx
import { clsx } from 'clsx'
import Link from 'next/link'

type Props = {
  href?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function Button({ href, children, onClick, className, type = 'button', ariaLabel }: Props) {
  const base = clsx(
    'inline-flex items-center justify-center rounded-xl2 px-5 py-3 text-sm font-semibold',
    'bg-white text-ink hover:bg-white/90 active:scale-[0.99]',
    'shadow-glow ring-1 ring-white/20 transition-transform'
  )

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={clsx(base, className)}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={clsx(base, className)}>
      {children}
    </button>
  )
}
