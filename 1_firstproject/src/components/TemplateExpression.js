const TemplateExpressions = () => {

    const name = "Pedro"
    const data = {
        age: 18,
        school: 'ETEC',
        job: 'Assistente de Fotografia'
    }
    return (
        <div>
            <h1>Olá {name}, tudo bem ?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{5 + 5}</p>
            <p>{console.log('Bom dia, 15-02-2023')}</p>
        </div>

    )
}

export default TemplateExpressions;