import React from 'react';

const Media = (props) => {
    return (
        <article className="media">
        <figure className="media-left">
            <p className="image is-64x64">
            <img src="https://source.unsplash.com/random"/>
            </p>
        </figure>
        <div className="media-content">
            <div className="content">
            <p>
                <strong>{props.title}</strong>
                <br/>
                {props.description}
            </p>
            </div>
            <nav className="level is-mobile">
            <div className="level-left">
                <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
                </a>
                <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                </a>
                <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
                </a>
            </div>
            </nav>
        </div>
        <div className="media-right">
            <button className="delete"></button>
        </div>
        </article>
    );
}

export default Media;
