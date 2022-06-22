import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


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

import { useSelector, useDispatch } from 'react-redux'
import Register from '../../pages/Login/Register'
import Login from '../../pages/Login/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logOut } from '../../pages/Login/userSlice';
import { Link, useNavigate } from 'react-router-dom';
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




    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (even , respon) => {
        if(respon !== "escapeKeyDown" && respon !== "backdropClick")
        setOpen(false);
    };

    const [isLogin , setIsLogin] = useState(true);
    const handleChangeLogin = () => {
        setIsLogin(x => !x);
    }


    const userState = useSelector(state => state.user);
    const isHadLogin = userState?.current.id;

    const [showSmallMenuLogin, setShowSmallMenuLogin] = useState(false);
    const handleShowSmallMenuLogin = () => {
        setShowSmallMenuLogin(x => !x)
    }

    const dispatch = useDispatch();
    const handleLogOut = () => {
        const action = logOut();
        dispatch(action);
        handleShowSmallMenuLogin();
    }

    const UrlCurrent = useNavigate();
    const handleGotoFollow = () =>{
        ToggleResponMenu()
        UrlCurrent('/webdichtruyen/follow')
    }
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
                        {
                            isHadLogin ? <></> : <div className='header-pageLogin' onClick={handleClickOpen}>Đăng nhập</div>
                        }
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
                        <a href="/webdichtruyen" className='header-mainLogo'>
                            <img src="https://assets.dichtruyenvip.com/assets/images/logo-1.png" alt="logoPage" />
                        </a>
                        <div className='header-flow2_buttonMenu header-button_type'>
                            Thể loại
                            <ArrowDropDownRoundedIcon />
                            <MenuGenre listGenres={genre} number={4} index={0}/>
                        </div>
                        {
                            isHadLogin ? (
                            <div className='header-flow2_buttonMenu' onClick={handleGotoFollow}>
                            Yêu thích
                            </div>) : <></>
                        }
                        <div className='header-flow2_buttonMenu header-button_type'>
                            Xếp hạng
                            <ArrowDropDownRoundedIcon />
                            <MenuLevel listGenres={levelListManga} number={3} index={isHadLogin ? 2 : 1}/>
                        </div >
                    </div>
                    <div className='header-flow2_right'>
                        {
                            isHadLogin ? 
                            (
                                <>
                                    <AccountCircleIcon className='IconUser' onClick={handleShowSmallMenuLogin}/>
                                    {
                                        showSmallMenuLogin && 
                                        <ul className='login-smallMenu'>
                                            <li onClick={handleLogOut}>Đăng xuất</li>
                                        </ul>
                                    }
                                </>
                            )
                            : <></>
                        }
                    </div>
                </div>
            </div>

        </div>
        {/* --------------------------------------------------------------------------------------------- */}
        <div className='header-responsive'>
            <div className='header-responsive_content'>
                <a href="/webdichtruyen" className='headerResponsive-mainLogo'>
                    <img src="https://assets.dichtruyenvip.com/assets/images/logo-1.png" alt="logoPage" />
                </a>
                <div className='header-responsive_buttons'>
                    {
                        isHadLogin ? 
                        (
                            <>
                                <AccountCircleIcon className='IconUser' onClick={handleShowSmallMenuLogin}/>
                                {
                                    showSmallMenuLogin && 
                                    <ul className='login-smallMenu'>
                                        <li onClick={handleLogOut}>Đăng xuất</li>
                                    </ul>
                                }
                            </>
                        )
                        : <button onClick={handleClickOpen}>Đăng nhập</button>
                    }
                    
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
                            {
                                isHadLogin ? (
                                <div className='header-responsive_buttonMenu' onClick={handleGotoFollow}>                   
                                    Yêu Thích
                                </div> ) : <></>
                            }
                            <div className='header-responsive_buttonMenu' onClick={ShowMenuLevel}>
                                    Xếp hạng
                                    <ArrowDropDownRoundedIcon />
                            </div >
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
                            <MenuGenre listGenres={genre} number={3} onCloseMenu={CloseMenuGenre}/>
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
                            <MenuLevel listGenres={levelListManga} number={3} onCloseMenu={CloseMenuLevel}/>
                        </div>
                        </div>
                    )
                }


            </div>
        </div>

        


        <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {
            isLogin ? (
                <>
                    <Login onCloseMenuLogin={handleClose}/>
                    <p className='title-formLogin' onClick={handleChangeLogin}>You don't have account ? <span>Register here</span> !!</p>
                </>
            )
            :
            (
                <>
                    <Register onCloseMenuLogin={handleClose}/>
                    <p className='title-formLogin' onClick={handleChangeLogin}>You already have account ? <span>Login here</span> !!</p>
                </>
            )
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
       </>
    );
}

export default Header;