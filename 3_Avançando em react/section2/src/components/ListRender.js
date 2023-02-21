import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Pedro", "Henrique", "Gustavo"])

    const [users, setUsers] = useState([
        { id: 1, name: 'Pedro', age: 18 },
        { id: 2, name: 'Henrique', age: 28 },
        { id: 3, name: 'Gustavo', age: 12 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4); //gerar numero aleatorio de 0 a 4

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item} - {i}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} tem {user.age} anos.</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>
                Delete random user
            </button>
        </div>
    )
}

export default ListRender;