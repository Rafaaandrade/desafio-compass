import React from 'react';
import './styles.css';

const ReposList = ({ repos, index }) => {
    return (
        <div className="reposDiv">
          <label>Repos</label>         
        {repos && index === 1 && (
          <div>
            {repos.map((r) => (
              <li className="reposDiv--listItem" key={r.id}>{r.name}</li>
            ))}
           
          </div>
        )}
      </div>
    )
}

export default ReposList