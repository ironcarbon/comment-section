import React from 'react';
import faker from 'faker';

const commentDetail = (props) => {
    console.log(props);
    return(
        <div className="ui conteiner comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt= "avatar" src={props.avatar}/>
                </a>    
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div> 
                <div className="text">
                   <p>{faker.lorem.sentence()}</p>
                </div>
    
            </div>
        </div>
    )
}

export default commentDetail;