import React from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import WarningIcon from '@mui/icons-material/Warning';
import './style.css'
import { Link, useParams } from 'react-router-dom';
import { addMangaLove } from '../../pages/DetailManga/LoveMangaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
HeaderDetailPage.propTypes = {
    
};

function HeaderDetailPage(props) {
    const { enqueueSnackbar } = useSnackbar();
    const {data} = props;
    let authors;
    if(data?.author){
        authors = data?.author == "Chưa được cập nhật" ? ["Đang cập nhật"] : data?.author
    }
    else{
        authors = ["Chưa cập nhật"];
    }
    const genres = data?.genres || [];
    const isAdult = genres.includes("Adult") || genres.includes("Ecchi");




    const nameLink = useParams();
    const dispatch = useDispatch();
    const handleFollowManga = () => {
        const payload = {
            title : data?.title,
            cover : data?.cover,
            mangaEP : nameLink.mangaId,
            lastChap : `chapter ${data.chapsTotal}`,
            lastUpdate : data.lastUpdate
        }
        if(payload.cover == undefined)
        {
            enqueueSnackbar("Có lỗi khi thêm vào danh sách , vui lòng thử lại",{variant:"error"})
        }
       else{
        const action = addMangaLove(payload);
        dispatch(action);
        enqueueSnackbar("Đã thêm truyện vào danh sách yêu thích của bạn",{variant:"success"})
       }
    }
    const paramManga = useSelector(state => state.user);
    const isLogin = paramManga.current.id || null;
    const handleLogin = () =>{
        enqueueSnackbar("Bạn cần đăng nhập để follow truyện tranh!!",{variant:"info"})
    }
    return (
        <div className='HeaderDetailPage'>
            <div className='HeaderDetailPage-container'>
                <div className='HeaderDetailPage-img' style={{backgroundImage: `url(${data?.cover})`}}>
                    <div className='HeaderDetailPage-img_buttons'>
                        <button className='HeaderDetailPage-img_faceShare'>
                            <FacebookIcon className='HeaderDetailPage-img_Icon'/>
                            <span>Chia sẻ</span>
                        </button>
                        <button className='HeaderDetailPage-img_likeButton' onClick={isLogin ? handleFollowManga : handleLogin}>
                            <FavoriteIcon className='HeaderDetailPage-img_Icon'/>
                            <span>Theo dõi</span>
                        </button>
                    </div>
                </div>
                <div className='HeaderDetailPage-mangaInfor'>
                    <h1 className='marginInfor'>{data?.title}</h1>
                    <div className='HeaderDetailPage-mangaInfor_status marginInfor'>
                        Trạng thái : <span className='marginLef-11px'>{data?.status}</span>
                    </div>
                    <div className='HeaderDetailPage-mangaInfor_view marginInfor'>
                        <span>Lượt xem : </span>
                        <span className='marginLeft-20px'>{data?.view}</span>
                    </div>
                    <div className='HeaderDetailPage-mangaInfor_rating marginInfor'>
                        <span className='SpaceLeftInfor'>Rating : </span>
                        <div className='List-container marginLeft-20px'>
                            {
                                Array.from(new Array(data?.rating)).map((index) => (
                                    <StarIcon className='ratingIcon'/>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mangaAuthorList marginInfor'>
                        <span className='SpaceLeftInfor'>Tác giả :</span>
                        <div className='List-container'>
                            {
                                authors.map((item) => (
                                    <div className='ItemList'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='TypeMangaList marginInfor'>
                        <span className='SpaceLeftInfor'>Thể loại :</span>
                        <div className='List-container'>
                            {
                                genres.map((item) => (
                                    <div className='ItemList'>
                                        {item}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='MangaDescription marginInfor'>
                        <p>{data.description}</p>
                    </div>
                   {
                        isAdult && (
                            <div className='adultWarning'>
                                <p>
                                    <span><WarningIcon className='iconWarning'/></span> <span>Cảnh báo độ tuổi</span>: Truyện bạn đang xem <span>có thể không phù hợp cho mọi lứa tuổi</span>, 
                                    nếu bạn <span>dưới 18 tuổi</span>, vui lòng chọn một truyện khác. <span>DichTruyenVip.Com sẽ không chịu trách nhiệm liên quan nếu bạn 
                                    bỏ qua cảnh báo này.</span>
                                </p>
                            </div>
                        )
                   }
                </div>

            </div>
        </div>
    );
}

export default HeaderDetailPage;