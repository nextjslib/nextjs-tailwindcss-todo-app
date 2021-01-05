import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  verticalDivider?: boolean
  shadow?: boolean
  rounded?: boolean
}
export default function Paper({
  children,
  className,
  verticalDivider,
  shadow,
  rounded,
}: Props) {
  return (
    <div
      className={`flex flex-col w-full h-full bg-light-0 dark:bg-dark-1 p-1 space-y-2
      ${
        verticalDivider
          ? 'divide-y divide-light-2 dark:divide-dark-6 divide-opacity-50 divide-y-2'
          : ''
      }
      ${shadow ? 'shadow-md' : ''}
      ${rounded ? 'rounded-md' : ''}
      ${className}`}
    >
      {children}
    </div>
  )
}
