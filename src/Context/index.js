import axios from "axios";
import { createContext, useContext, useState } from "react";
import { API } from "../Components/Utils/API/api";

export const APIContext = createContext();

const initialState = {
  user: "",
  repos: "",
  starred: "",
};

// const clientKey = "7c06a32b31a84b418a0ae60dcb89f32a8a2835fe";
const clientId = "ca16af2199f680077113";

export const Context = ({ children }) => {
  const [apiData, setApiData] = useState(initialState);

  // const generateToken = async (code) => {
  //   const response = await axios.post(
  //     "https://api.github.com/login/oauth/acess_token",
  //     {
  //       headers: { client_id: clientId, client_secret: clientKey, code: code },
  //     }
  //   );

  //   console.log("response do generateToken", response);
  // };

  const getUser = async (user) => {
    const response = await axios.get(`${API.user}${user}`, {
      // params: { client_id: clientId },
    });
    setApiData((prevState) => ({
      ...prevState,
      user: response.data,
    }));
  };

  const getRepos = async (user) => {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`, {
      // params: { client_id: clientId }
    }
    );

    setApiData((prevState) => ({
      ...prevState,
      repos: response.data,
    }));
  };

  const getStarred = async (user) => {
    const response = await axios.get(
      `https://api.github.com/users/${user}/starred`, {
      // params: { client_id: clientId }
    }
    );

    setApiData((prevState) => ({
      ...prevState,
      starred: response.data,
    }));
  };

  return (
    <APIContext.Provider
      value={{
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
  const { getUser, apiData, setApiData, getRepos, getStarred } =
    useContext(APIContext);

  return { getUser, apiData, setApiData, getRepos, getStarred };
};
