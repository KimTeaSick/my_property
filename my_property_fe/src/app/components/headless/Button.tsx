import { createContext, useContext } from "react"

type ButtonContextProps = {
  primary: boolean
  title: string
  event: () => void
}

type ButtonType = ButtonContextProps & React.PropsWithChildren<{}>

const ButtonContext = createContext({
  primary: false,
  title: "",
  event: () => { }
})

const useButtonContext = () => {
  const context = useContext(ButtonContext)
  return context
}

const Button = ({ primary, title, event, children }: ButtonType) => {
  const value = { primary, title, event }
  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  )
}

const ButtonBody = ({ children }: React.PropsWithChildren) => {
  const { event } = useButtonContext()
  return (
    <div onClick={event}>
      {children}
    </div>
  )
}

const ButtonLabel = () => {
  const { title } = useButtonContext()
  return (
    <label className="cursor-pointer">{title}</label>
  )
}

Button.Body = ButtonBody
Button.Label = ButtonLabel

export default Button