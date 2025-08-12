import clsx from "clsx"

export default function Container({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={clsx('container-gutter', className)}>{children}</div>
}
