import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SortIcon from '@mui/icons-material/Sort';
import ListMostView from '../ListMostView';
import { Link } from 'react-router-dom';
ShowMangaChaps.propTypes = {
    
};

function ShowMangaChaps(props) {
    const {data = [], mangaName} = props;
    const [reverse , setReverse] = useState(false);
    const handleClickReverse = () => {
        setReverse(x => !x);
    } 

    useMemo(() => {
        data.reverse();
    },[reverse])
    return (
        <div className='showMangaChaps'>
            <div className='showMangaChaps-container'>
                <div className='showMangaChaps-left'>
                    <div className='showMangaChaps-main'>
                        <div className='showMangaChaps-main_header borderBottom chapItemAria'>
                            <div className='chapItemLocation'>
                                <span>TẬP</span>
                                {
                                    !reverse ? <ArrowDownwardIcon className='chapItemLocation-icon' onClick={handleClickReverse}/> : <ArrowUpwardIcon className='chapItemLocation-icon' onClick={handleClickReverse}/>
                                }
                                <SortIcon />
                            </div>
                            <div className='chapItemLocation chapItemLocationMidle'>
                                <span>CẬP NHẬT</span>
                            </div>
                            <div className='chapItemLocation chapItemLocationMidle'>
                                <span>LƯỢT XEM</span>
                            </div>
                        </div>
                        <div className='showMangaChaps-main_chaps'>
                            {
                                data.map((item,index) => (
                                    <Link to={`/webdichtruyen/manga/${mangaName}/${item.chapEP}`} key={index}>
                                        <div className='chap-item borderBottom chapItemAria'>
                                            <div className='chap-item_tittle chapItemLocation bold'>{item?.chapTitle}</div>
                                            <div className='chapItemLocation chapItemLocationMidle'>{item?.chapTime}</div>
                                            <div className='chapItemLocation chapItemLocationMidle'>{Math.floor(Math.random()*1000)}</div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='showMangaChaps-right'>
                        <ListMostView />
                </div>
            </div>
        </div>
    );
}

export default ShowMangaChaps;