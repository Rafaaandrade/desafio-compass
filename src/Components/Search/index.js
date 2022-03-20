import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../Context';
import './styles.css';

const Search = () => {
    const [data, setData] = useState("");
    const {Authorize, getUser, apiData} = useMyContext();
    const {user} = apiData;
    const [state,setState] = useState();
    const navigate = useNavigate();
    const handlePesquisa = () => {
        if(data){
            getUser(data);
            navigate("/user");
            setState("code")
        }

    }


    return (
        <div className="searchDiv">
            <label>Digite um nome de usuário</label>
            <input type="text" onChange={(ev) => setData(ev.target.value)} />
            <button onClick={handlePesquisa}>Pesquisar</button>
            {/* <button onClick={Authorize}>Authorize</button> */}
        </div>
    )
}

export default Search