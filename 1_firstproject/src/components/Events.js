const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
        alert('Evento ativado')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou')}>
                    Clique aqui também!
                </button><br></br>
                <button onClick={() => {
                    if (true) {
                        alert('Essa função complica meu html já que é muito grande')
                    }
                }}>Clique aqui novamente</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;