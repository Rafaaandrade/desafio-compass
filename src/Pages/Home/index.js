import React, { useEffect, useState } from "react";
import Search from "../../Components/Search";
import { useMyContext } from "../../Context";
import "./styles.css";

const Home = () => {
  const { generateToken, apiData } = useMyContext();
  const [code, setCode] = useState();
  const { user } = apiData;

  useEffect(() => {
    getUrlCode();
  }, [user])


  useEffect(() => {
    if (code) {
      generateToken(code);

    }
  })
  // console.log('data', data)


  const getUrlCode = () => {
    const urlCompleta = window.location.href;
    const urlDividida = urlCompleta.split("code=");
    const urlCode = urlDividida[1];
    setCode(urlCode);

  }
  return (
    <div className="homeContainer">
      <div className="homeContainer--divLogin">
      <a href="https://github.com/login/oauth/authorize?client_id=ca16af2199f680077113">
        Faça login com o Github
      </a>

      </div>
      <Search />
    </div>
  );
};

export default Home;
