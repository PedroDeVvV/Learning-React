import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext'

const About = () => {
  const {counter} = useContext(CounterContext);
  return (
    <div>
      <p>Sobre</p>
      <p>Valor do contador em outro componente: {counter}</p>
    </div>
  )
}

export default About