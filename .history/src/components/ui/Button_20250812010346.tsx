import { clsx } from 'clsx'
import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  href?: string
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  variant?: Variant
  size?: Size
}

const baseClasses =
  'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-transform active:scale-[0.99]'

const variantClasses: Record<Variant, string> = {
  primary:  'bg-white text-slate-900 hover:bg-white/90 ring-1 ring-white/20 shadow',
  secondary:'bg-slate-800/60 text-white hover:bg-slate-800 ring-1 ring-white/10',
  ghost:    'bg-transparent text-white hover:bg-white/10 ring-1 ring-white/10',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

export default function Button({
  href,
  children,
  onClick,
  className,
  type = 'button',
  ariaLabel,
  variant = 'primary',
  size = 'md',
}: Props) {
  const classes = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className)

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    )
  }
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  )
}
