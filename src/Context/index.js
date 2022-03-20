import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API } from "../Components/Utils/API/api";

const APIContext = createContext();

const initialState = {
  user: "",
  repos: "",
  starred: "",
};

const clientKey = "7c06a32b31a84b418a0ae60dcb89f32a8a2835fe";
const clientId = "ca16af2199f680077113";

export const Context = ({ children }) => {
  const [apiData, setApiData] = useState(initialState);
  const { user } = initialState;

  const generateToken = async (code) => {
    // const url = "https://github.com/login/oauth/access_token";
    // const config = { headers: { client_id: clientId, client_secret: clientKey, code: code } }

    // const response = await axios.post(url, config);

    console.log('code generateToken', code)
    // const response = await axios.post(
    //   `/access_token?client_id=${clientId}&client_secret=${clientKey}$code=${code}`
    // );

    const response = await axios.post('/https://github.com/login/oauth/acess_token', { 
      headers: { client_id: clientId, client_secret: clientKey, code: code}
    })

    // const response = await axios.post(`https://github.com/login/oauth/acess_token${code}`, {
    //     headers: {
    //         //     'Access-Control-Allow-Origin': '*',
    //         // 'Acce 'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"ss-Control-Allow-Origin': 'http://localhost:3030',
    //         // 'Content-Type': 'application/json',
    //         'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
    //         // 'Access-Control-Allow-Methods': 'POST, GET',
    //         //     // 'Access-Control-Allow-Credentials': true
    //         //     // 'Authorization': `Bearer ${code}`
    //     },
    //     //   auth: {
    //     client_id: clientId, client_secret: clientKey, code
    //     //   }
    // })

    console.log("response do generateToken", response);
    // const response = await axios.get(`https://github.com/login/oauth/authorize`, {
    //     header: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //       },
    //       params: {
    //           clientId
    //       }
    // })
  };

  const getUser = async (user) => {
    // console.log('getUser', user)
    // let user = 'rafaaandrade'
    // const response = await axios.get(`https://api.github.com/users/${user}`)
    const response = await axios.get(
      `${API.user}${user}?client_id=${clientId}`
    );
    setApiData((prevState) => ({
      ...prevState,
      user: response.data,
    }));
    console.log("response getUser", response);
  };

  const getRepos = async (user) => {
    // let user = 'rafaaandrade'
    // const response = await axios.get(`https://api.github.com/users/${user}/repos`)
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`,
      {
        params: {
          clientId,
        },
      }
    );

    setApiData((prevState) => ({
      ...prevState,
      repos: response.data,
    }));
    // console.log('response getRepos', response)
    // console.log('apiData getRepos', apiData)
  };

  const getStarred = async (user) => {
    // let user = 'florinpop17'
    const response = await axios.get(
      `https://api.github.com/users/${user}/starred?client_id=${clientId}`
    );
    setApiData((prevState) => ({
      ...prevState,
      starred: response.data,
    }));
    // console.log('response getStarred', response)
    // console.log('apiData getStarred', apiData)
  };

  return (
    <APIContext.Provider
      value={{
        generateToken,
        getUser,
        apiData,
        setApiData,
        getRepos,
        getStarred,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useMyContext = () => {
  const { generateToken, getUser, apiData, setApiData, getRepos, getStarred } =
    useContext(APIContext);

  return { generateToken, getUser, apiData, setApiData, getRepos, getStarred };
};
