import React from 'react'
import "../CSS/card.css"
import ChangeHistoryRoundedIcon from '@mui/icons-material/ChangeHistoryRounded';

const Card = ({ company_name, name, time, year, type, role, votes, tags }) => {
    const typeName = ["Intern", "FTE", "Intern+FTE"]
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-preview">
                    <h6>{typeName[type]}</h6>
                    <h3>{company_name}</h3>
                </div>
                <div className="card-info">
                    <div className="votes-container">
                        <ChangeHistoryRoundedIcon />
                        <span className="votes-text">
                            &nbsp; 
                            {votes}
                        </span>
                    </div>
                    <h6>{name} - {time}</h6>
                    <h4>{year} - {role}</h4>
                    <div className="tags_container">
                        {tags.map(tag => (
                            <div className="article_tag">
                                <a href='/'>{tag}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card