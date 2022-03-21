import React, { useEffect, useState } from "react";
import ReposList from "../../Components/ReposList";
import StarredList from "../../Components/StarredList";
import { useMyContext } from "../../Context";
import "./styles.css";

const User = () => {
  const { apiData, getRepos, getStarred } = useMyContext();
  const { user, repos, starred } = apiData;
  const [index, setIndex] = useState();

  useEffect(() => {
    if (user) {
      getRepos(user.login);
      getStarred(user.login);
    }
  }, [user]);


  return (
    <div className="userContainer">
      {user ? (
        <div className="userContainer--userInfoDiv">
          Informações de usuário
          <p>{user.name}</p>
          <img
            className="userContainer--userInfoDiv--img"
            src={user.avatar_url}
            alt={user.name}
          />
          {user.bio && <h4>{user.bio}</h4>}
          <span>Seguidores: {user.followers}</span>
          <span>Seguindo: {user.following}</span>
          <div className="userContainer--userInfoDiv--buttons">
            <button onClick={() => setIndex(1)}>Repos</button>
            <button onClick={() => setIndex(2)}>Starred</button>
          </div>
        </div>
      ) : (
        "Não existe usuário!"
      )}
      <div>

      </div>
      {user && (
        <div className="userContainer--reposInfo">
          {index === 1 && <ReposList repos={repos} index={index} />}
          {index === 2 && <StarredList index={index} starred={starred} />}
        </div>
      )}

    </div>
  );
};

export default User;
