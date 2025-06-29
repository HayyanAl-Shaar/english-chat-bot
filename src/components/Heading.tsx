import type { ReactNode } from "react"

type HeadingProps = {title: string, children: ReactNode}
const Heading = ({title, children}: HeadingProps) => {
  return (
    <>
      <h2>{children}</h2>
      <h1>{title}</h1>
    </>
  )
}

export default Heading