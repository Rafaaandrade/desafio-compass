import React, { useEffect, useState } from 'react'
import { useMyContext } from '../../Context'
import ReposList from './ReposList';
import StarredList from './StarredList';

import './styles.css';

const Details = () => {
    const { apiData, getStarred, getRepos } = useMyContext();
    const { user, repos, starred, } = apiData;
    const [index, setIndex] = useState()

    useEffect(() => {
        if (user) {
            getStarred(user.login)
            getRepos(user.login)
        }
    }, [user])

    return (
        <div className="detailsDiv">
            {user && (
                <div >
                    <button onClick={() => setIndex(1)}>Repos</button>
                    <button onClick={() => setIndex(2)}>Starred</button>
                    {index === 1 && <ReposList repos={repos} index={index} />}
                    {index === 2 && <StarredList index={index} starred={starred} />}
                </div>
            )}
        </div>
    )
}

export default Details