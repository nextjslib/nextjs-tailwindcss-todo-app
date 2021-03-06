import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  verticalDivider?: boolean
  shadow?: boolean
  rounded?: boolean
  centerContent?: boolean
}
export default function Paper({
  children,
  className,
  verticalDivider,
  shadow,
  rounded,
  centerContent,
}: Props) {
  return (
    <div
      className={`flex flex-col h-full bg-light-0 dark:bg-dark-1 p-1 space-y-2
      ${
        verticalDivider
          ? 'divide-y divide-light-2 dark:divide-dark-6 divide-opacity-50 divide-y-2'
          : ''
      }
      ${shadow ? 'shadow-md' : ''}
      ${rounded ? 'rounded-xl' : ''}
      ${centerContent ? 'text-center items-center justify-center' : ''}
      ${className}`}
    >
      {children}
    </div>
  )
}
