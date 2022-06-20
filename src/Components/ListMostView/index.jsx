import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'
import ItemListMostView from '../ItemListMostView';
import mangaApi from '../../api/mangaApi'
ListMostView.propTypes = {
    
};

function ListMostView(props) {
    const [listManga , setListManga] = useState([])
    const params = {
        list: true,
        sort: 4
    }
    useEffect(()=>{
        (async () => {
            try {
                const respon  = await mangaApi.getManga(params);
                respon.data.data.mangas.splice(10,18);
                setListManga(respon.data.data.mangas)
            } catch (error) {
                console.log("false to get list most view");
            }
        })()
    },[])
    console.log(listManga,"hahahah");
    return (
        <div className='listLikeGenre'>
            <span>TRUYỆN ĐƯỢC XEM NHIỀU NHẤT</span>
            <div className='listLikeGenre-content'>
                {
                    listManga.map((item) => (
                        <ItemListMostView item={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default ListMostView;