import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import ItemLikeGenre from '../ItemLikeGenre';
ListLikeGenre.propTypes = {
    
};

function ListLikeGenre(props) {
    const listLikeGenre = [
        {
            nameGenre : "Action",
            imgUrl : "https://assets.dichtruyenvip.com/assets/images/img_type03.png",
            genre : "action"
        } ,
        {
            nameGenre : "Isekai",
            imgUrl : "https://i.pinimg.com/236x/af/6e/3a/af6e3a22dfc194830eceacb8860eedfd.jpg",
            genre : "isekai"
        },
        {
            nameGenre : "Adult",
            imgUrl : "https://assets.dichtruyenvip.com/assets/images/img_type02.png",
            genre : "adult"
        },
        {
            nameGenre : "Horror",
            imgUrl : "https://i.pinimg.com/236x/8b/fe/b7/8bfeb783fe6b96e14a4fbbbb5316f1ce.jpg",
            genre : "horror"
        },
        {
            nameGenre : "Fantasy",
            imgUrl : "https://i.pinimg.com/236x/20/67/4c/20674c503908669fac92065bc46401aa.jpg",
            genre : "fantasy"
        },
        ] ;
    return (
        <div className='listLikeGenre'>
            <span>THỂ LOẠI ĐƯỢC YÊU THÍCH</span>
            <div className='listLikeGenre-content'>
                {
                    listLikeGenre.map((item,index) => (
                        <ItemLikeGenre item={item} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ListLikeGenre;