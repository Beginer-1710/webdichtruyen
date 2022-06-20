import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'


import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

import mangaApi from '../../api/mangaApi.js';
import MenuGenre from '../MenuGenre';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuLevel from '../MenuLevel';
Header.propTypes = {
    
};

function Header(props) {
    const [genre , setGenre] = useState([]);
    const [showMenuGenre , setShowMenuGenre] = useState(false);
    const [showMenuLevel , setShowMenuLevel] = useState(false);
    const [showResponMenu , setShowResponMenu] = useState(false);
    const ToggleResponMenu = () => {
        setShowResponMenu(x => !x);
    }
    const ShowMenuGenre = () => {
        setShowMenuGenre(true);
        setShowResponMenu(x => !x);

    }
    const CloseMenuGenre = () => {
        setShowMenuGenre(false);
    }
    const ShowMenuLevel = () => {
        setShowMenuLevel(true);
        setShowResponMenu(x => !x);

    }
    const CloseMenuLevel = () => {
        setShowMenuLevel(false);
    }
    useEffect(() => {
        (async () => {
            try {
                const respon = await mangaApi.getGenres();
                setGenre(respon.data.data.genresListFilter);
            } catch (error) {
                console.log("false to fetch RengerManga");
            }
        })()
    },[]) 
    const levelListManga = [
        {
            genre : "Truyện mùa này",
            EP : "list=true&status=0&nameType=Truyện mùa này"
            
        },
        {
            genre : "Truyện Mới",
            EP : "list=true&sort=3&nameType=Truyện Mới"
        },
        {
            genre : "Mới cập nhật",
            EP : "list=true&sort=2&nameType=Mới cập nhật"
        },
        {
            genre : "Truyện Hot",
            EP : "list=true&sort=4&nameType=Truyện Hot"
        },
        {
            genre : "Truyện Yêu Thích",
            EP : "list=true&sort=5&nameType=Truyện Yêu Thích"
        },
        {
            genre : "Hoàn Thành",
            EP : "list=true&status=2&nameType=Hoàn Thành"
        },
    ]




    return (
       <>
         <div className="header">
            <div className='header-flow1'>
                <div className='header-flow1_content'>
                    <div className='header-flow1_contact'>
                        <a href="#">Điều khoản sử dụng</a>
                        <div className='header-flow1_content_contact'>
                                <MailOutlineIcon className='header-Icon_mediumSize'/>
                            <span>Email liên hệ: <strong>dichtruyen.net@gmail.com</strong></span>
                        </div>
                    </div>
                    
                    <div className='header-login_page'>
                        <div className='header-pageLogin'>Đăng nhập</div>
                        <div className='header-pageInfor'>
                            <FacebookIcon className='header-Icon_mediumSize'/>
                            <p>Fanpage: DichTruyen.NET</p>
                            <button className='header-Button'>
                                    <ThumbUpIcon className='header-Icon_smallSize'/>
                                Thích 47K
                            </button>
                            <button className='header-Button'>Chia sẻ</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-flow2'>
                <div className='header-flow2_content'>
                    <div className='header-flow2_left'>
                        <a href="/" className='header-mainLogo'>
                            <img src="https://assets.dichtruyenvip.com/assets/images/logo-1.png" alt="logoPage" />
                        </a>
                        <div className='header-flow2_buttonMenu header-button_type'>
                            Thể loại
                            <ArrowDropDownRoundedIcon />
                            <MenuGenre listGenres={genre} number={4} index={0}/>
                        </div>
                        <div className='header-flow2_buttonMenu'>
                            Nhóm dịch
                            <ArrowDropDownRoundedIcon />
                        </div>
                        <div className='header-flow2_buttonMenu header-button_type'>
                            Xếp hạng
                            <ArrowDropDownRoundedIcon />
                            <MenuLevel listGenres={levelListManga} number={3} index={2}/>
                        </div >
                        <div className='header-flow2_buttonMenu'>Lịch sử</div>
                    </div>
                </div>
            </div>
        </div>
        {/* --------------------------------------------------------------------------------------------- */}
        <div className='header-responsive'>
            <div className='header-responsive_content'>
                <a href="#" className='headerResponsive-mainLogo'>
                    <img src="https://assets.dichtruyenvip.com/assets/images/logo-1.png" alt="logoPage" />
                </a>
                <div className='header-responsive_buttons'>
                    <button>Đăng nhập</button>
                    <SearchIcon className='header-responsive_searchIcon'/>
                    <div onClick={ToggleResponMenu}>
                        {
                            showResponMenu ? <CloseIcon /> : <MenuIcon className='header-responsive_menuIcon'/>
                        }
                    </div>
                </div>

                {
                    showResponMenu && (
                        <div className='header-responsive_smallMenu'>
                            <div className='header-responsive_title'>
                                <h3>MENU</h3>
                            </div>
                            <div className='header-responsive_buttonMenu' onClick={ShowMenuGenre}>
                                Thể loại
                                    <ArrowDropDownRoundedIcon />
                            </div>
                            <div className='header-responsive_buttonMenu'>
                                Nhóm dịch
                                <ArrowDropDownRoundedIcon />
                            </div>
                            <div className='header-responsive_buttonMenu' onClick={ShowMenuLevel}>
                                Xếp hạng
                                <ArrowDropDownRoundedIcon />
                            </div >
                            <div className='header-responsive_buttonMenu'>Lịch sử</div>
                        </div>
                    )
                }

                {
                    showMenuGenre && 
                    (
                        <div className='genreMenu_responsive'>
                        <div className='genreMenu_responsive-content'>
                            <div className='genreMenu_responsive-tittle'>
                                <h3>XẾP HẠNG</h3>
                                <div onClick={CloseMenuGenre}>
                                    <CloseIcon />
                                </div>
                            </div>    
                            <MenuGenre listGenres={genre} number={3} />
                        </div>
                        </div>
                    )
                }

{
                    showMenuLevel && 
                    (
                        <div className='genreMenu_responsive'>
                        <div className='genreMenu_responsive-content'>
                            <div className='genreMenu_responsive-tittle'>
                                <h3>THỂ LOẠI</h3>
                                <div onClick={CloseMenuLevel}>
                                    <CloseIcon />
                                </div>
                            </div>    
                            <MenuLevel listGenres={levelListManga} number={3}/>
                        </div>
                        </div>
                    )
                }


            </div>
        </div>

        
       </>
    );
}

export default Header;