import React from "react";
import './styles.css';

const StarredList = ({ starred, index }) => {
    return (
        <div className="starredDiv">
            <label>Starred</label>
            {starred && index === 2 && (
                <div>
                    {starred.map((s) => (
                        <li className="starredDiv--listItem" key={s.id}>{s.name}</li>
                    ))}

                </div>
            )}
        </div>
    );
};

export default StarredList;
