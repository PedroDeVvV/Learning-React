import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const Shopping = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <p>Shopping</p>
      <p>Valor do contexto em mais um componente: {counter}</p>
    </div>
  )
}

export default Shopping