import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

const About = () => {
const {contextValue} = useContext(SomeContext)
  
  return (
    <div>
      <h2>Consumindo context em outro componente</h2>
      <p>Valor do context: {contextValue}</p>
    </div>
  )
}

export default About