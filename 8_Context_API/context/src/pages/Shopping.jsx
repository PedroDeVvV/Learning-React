import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Shopping = () => {
  const {counter} = useContext(CounterContext)
  const { color} = useTitleColorContext();

  return (
    <div>
      <p style={{color: color}}>Shopping</p>
      <p>Valor do contexto em mais um componente: {counter}</p>
    </div>
  )
}

export default Shopping