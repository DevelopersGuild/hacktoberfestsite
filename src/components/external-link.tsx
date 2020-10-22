import React from "react"

type Props = {
  style?: React.CSSProperties
  className?: string
  href: string
  children: React.ReactNode
}

/**
 * Serves as an external Link
 */
function ExternalLink(props: Props) {
  return (
    <a
      rel="noreferrer noopener"
      target="__blank"
      className={props.className}
      style={props.style}
      href={props.href}
    >
      {props.children}
    </a>
  )
}

export default ExternalLink
