import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import WarningIcon from '@mui/icons-material/Warning';
import ViewListIcon from '@mui/icons-material/ViewList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import { useSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import { useState } from 'react';
HeaderMangaChap.propTypes = {
    
};

function HeaderMangaChap(props) {
    const {nextChap , currentChap , preChap , mangaName ,chapList = []} = props;
    const heightMenuManga = chapList.length * 25;
    const menuChap = useRef();
    const { enqueueSnackbar} = useSnackbar();
    const [showMenuChap , setShowMenuChap] = useState(false);
    const handleShowMenuChap = () => {
        setShowMenuChap(x => !x)
        console.log("hanle2");
    }
    const handleCloseMenuChap = () => {
        console.log("handle");
        setShowMenuChap(false)
    }
    const handleOnclickWarning = () =>{
        enqueueSnackbar("Cảm ơn bạn đã thông báo lỗi cho chúng tôi! DichTruyen.net sẽ khắc phục sớm nhất có thể" , {variant: "info"})
    }

    var lastScrollTop = useRef();
    const navBar = useRef(0);
    let widthWindow ;
    useEffect(() => {
        window.addEventListener('scroll' , () => {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // window.pageYOffset và document.documentElement.scrollTop đều trả về khoảng cách từ đầu cửa sổ đến phần tử đang hiển thị , nói nôm na là khoảng cách đã scroll đc 
            //window.pageYOffset không được hỗ trợ dưới IE 9. 
            // 2 thằng này đề trả về cùng 1 giá trị cho tất cả trường hợp
            //window.pageYOffset làm việc trên tất cả trình duyệt 
            // vậy ý nghĩa của code này là ta sẽ lưu lại giá trị mỗi lần scroll , và nếu scroll lên tức giá trị new < giá trị đã đc lưu trc đó
            if(scrollTop > lastScrollTop.current)
            {
                navBar.current.style.top = "0px"
                handleCloseMenuChap();
            }
            else{
                if(window.innerWidth < 1200)
                {
                    navBar.current.style.top = "40px"
                }
                else{
                    navBar.current.style.top = "73px"
                }
            }
            lastScrollTop.current = scrollTop;
        })
    },[window.innerWidth])
    
    // useEffect(() => {
    //     const CloseClick = (e) => {
    //         console.log(e.target);
    //         // if(e.target.className === "IconShowMenuChapManga")
    //         // {
    //         //     handleShowMenuChap();
    //         // }
    //         if(e.target.className !== "handleShow")
    //         {
    //             // handleShowMenuChap();
    //              handleCloseMenuChap();
    //         }
    //     }
    //     window.addEventListener("click",CloseClick)
    //     return () => {
    //         window.removeEventListener("click" ,CloseClick)
    //     }
    // },[])

    const handleGoTop = () => {
        window.pageYOffset = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className='headerMangaChap' ref={navBar}>
            <div className='headerMangaChap-container'>
                <div className='headerMangaChap-button'>
                    <WarningIcon className='headerMangaChapIcon' onClick={handleOnclickWarning}/>
                </div>
                <div className='headerMangaChap-button'>
                    <Link to={`/detail/${mangaName}`}><ViewListIcon className='headerMangaChapIcon'/></Link>
                </div>
                <div className='headerMangaChap-button'>
                    {
                        preChap === "" ? 
                        <ArrowBackIcon className='headerMangaChapIcon-disable' /> 
                        : <Link to={`/manga/${mangaName}/${preChap}`}><ArrowBackIcon className='headerMangaChapIcon'/></Link>
                    }
                </div>
                <div className='headerMangaChap-button IconShowMenuChapManga handleShow' onClick={handleShowMenuChap}>
                    <MenuBookIcon className='headerMangaChapIcon handleShow'/>
                    {
                        showMenuChap ? (
                            <ul className='headerManga-menuChap handleShow' ref={menuChap} style={{height:`${heightMenuManga}px`}}>
                            {
                                // chapEP
                                chapList.map((item) => (
                                        item?.chapter === currentChap ?
                                        <Link to={`/manga/${mangaName}/${item.chapEP}`} onClick={handleCloseMenuChap}><li className='headerManga-menuChap_item headerManga-menuChap_itemCurrent'>{item?.chapter}</li></Link>
                                        : <Link to={`/manga/${mangaName}/${item.chapEP}`} onClick={handleCloseMenuChap}><li className='headerManga-menuChap_item'>{item?.chapter}</li></Link>    
                                ))
                            }
                            </ul>
                        )
                        :
                        (
                            <ul className='headerManga-menuChap'>
                                {
                                    chapList.map((item) => (
                                            item?.chapter === currentChap ?
                                            <li className='headerManga-menuChap_item headerManga-menuChap_itemCurrent'>{item?.chapter}</li>
                                            : <li className='headerManga-menuChap_item'>{item?.chapter}</li>    
                                    ))
                                }
                            </ul>
                        )
                    }
                </div>
                <div className='headerMangaChap-button'>
                    {
                        nextChap === "" ?
                        <ArrowForwardIcon className='headerMangaChapIcon-disable'/>
                        : <Link to={`/manga/${mangaName}/${nextChap}`}><ArrowForwardIcon className='headerMangaChapIcon'/></Link>
                    }
                </div>
                <div className='headerMangaChap-button'>
                    <SettingsIcon className='headerMangaChapIcon'/>
                </div>
                <div className='headerMangaChap-button'>
                    <ArrowUpwardIcon className='headerMangaChapIcon' onClick={handleGoTop}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderMangaChap;