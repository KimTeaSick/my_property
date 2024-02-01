"use client"

import ButtonHd from "../headless/Button"

type Props = {
  title: string
  primary: boolean
  size: string
  event: () => void
}

const buttonStyle = "cursor-pointer flex justify-center items-center bg-sky-50 border-[1px] border-stone-100 text-sky-800 text-lg font-medium rounded-md"

const Button = ({ title, primary, size, event }: Props) => {
  return (
    <ButtonHd
      title={title}
      event={event}
      primary={primary}
    >
      <ButtonHd.Body>
        <div className={[buttonStyle, size].join(" ")}>
          <ButtonHd.Label />
        </div>
      </ButtonHd.Body>
    </ButtonHd>
  )
}

export default Button