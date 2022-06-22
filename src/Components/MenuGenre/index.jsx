import React from 'react';
import PropTypes from 'prop-types';

import './style.css'
import { Link, useNavigate } from 'react-router-dom';

MenuGenre.propTypes = {
    
};

function MenuGenre(props) {
    const {listGenres , number , index , onCloseMenu} = props;
    const currentUrl = useNavigate();
    const handleClickCloseMenu = (genreEP) => {
        currentUrl(`/type/genre=${genreEP}`)
        if(onCloseMenu)
        onCloseMenu();
    }
    return (
        <div className='menuGenre' style={{left : `-${index*118 + 170}px`}}>
            <div className='menuGenre-content'>
                {
                    listGenres.map((genre) => (
                        <p onClick={() => {handleClickCloseMenu(genre.EP)}} key={genre.genre} className="MenuGenre-item" style={{flex: `${100/number}%`}}>{genre.genre}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default MenuGenre;