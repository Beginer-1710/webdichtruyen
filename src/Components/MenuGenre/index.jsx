import React from 'react';
import PropTypes from 'prop-types';

import './style.css'
import { Link } from 'react-router-dom';

MenuGenre.propTypes = {
    
};

function MenuGenre(props) {
    const {listGenres , number , index} = props;
    return (
        <div className='menuGenre' style={{left : `-${index*118 + 170}px`}}>
            <div className='menuGenre-content'>
                {
                    listGenres.map((genre) => (
                        <Link to={`/type/genre=${genre.EP}`} style={{flex: `${100/number}%`}}><p key={genre.genre || genre.genre} className="MenuGenre-item">{genre.genre}</p></Link>
                    ))
                }
            </div>
        </div>
    );
}

export default MenuGenre;