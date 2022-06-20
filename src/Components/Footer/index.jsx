import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-TeamPage'>
                    <h3>Fanpage của tụi mình nè!</h3>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdichtruyenteam%2F&amp;tabs&amp;width=270&amp;height=70&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=false&amp;appId=215198303871132" width="270" height="70" style={{border:"none", overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

                </div>
                <div className='footer-inforTeam'>
                    <h3>Thông báo từ DichTruyenVip.Com | Net | Info</h3>
                    <p>Toàn bộ truyện trên website DichTruyenVip.Com | Net | Info điều được sưu tầm trên internet hoặc do các nhóm dịch đăng tải và chia sẻ theo các điều khoản của website. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên website này. Nếu nội dung có làm ảnh hưởng đến cá nhân hay tổ chức nào theo quy định của Pháp luật nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.</p>
                </div>
                <div className='footer-inforContact'>
                    <h3>Thông tin</h3>
                    <strong>Email: <span>dichtruyen.net@gmail.com</span></strong>
                    <p><span>BĐS Nhà Phố</span> | <span>Nấu Ăn</span> <br/>
                        <span>Điều khoản sử dụng</span> <br />
                        Copyright © 2019 - 2022 by <span>D4Teams</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;