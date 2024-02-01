import { createContext, useContext } from "react"

type InputContextType = {
  text: string
  type: string
  placeholder: string
  onChange: () => void
}

type InputType = InputContextType & React.PropsWithChildren<{}>

const InputContext = createContext({
  text: "",
  type: "",
  placeholder: "",
  onChange: () => { }
})

const useInputContext = () => {
  const context = useContext(InputContext)
  return context
}

const Input = ({ text, type, placeholder, onChange, children }: InputType) => {
  const value = { text, type, placeholder, onChange }
  return (
    <InputContext.Provider value={value}>
      {children}
    </InputContext.Provider>
  )
}

const InputBody = ({ children }: React.PropsWithChildren<{}>) => {
  const { text, type, placeholder, onChange } = useInputContext()
  return (
    <input value={text} placeholder={placeholder} type={type} onChange={onChange}>
      {children}
    </input>
  )
}

Input.Body = InputBody

export default Input