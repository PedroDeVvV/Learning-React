import { useNavigate } from "react-router-dom"

import { useState } from "react"

const SearchForm = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState(); //gerenciando o estado de busca
    
    const handleSubmit = (e) => {
        e.preventDefault(); //capturando envio do form

        navigate("/search?q=" + query) //atribuindo o valor da busca ao navigate
        ///search se deve a rota estabelecida em app.js
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />  {/*capturando o alvo e a cada vez que o input muda, atribui o valor ao query */}
        <input type="submit" value="Buscar" />

    </form>
  )
}

export default SearchForm