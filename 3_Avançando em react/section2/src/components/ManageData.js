import { useState } from 'react'; //importando o hook

const ManageData = () => {
    let someData = 10;
    console.log(someData)

    const [number, setNumber] = useState(15); //sintaxe
//          número inicial = 15
    return (
        <div>
            <div>
                <p>Valor:{someData}</p>
            </div>
            <div>
                <button onClick={() => {
                    someData = 20;
                }}>Alterar Valor</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick = {() => setNumber(number * 2)}>Mudar o State</button>
            </div>
        </div>
    )
}

export default ManageData