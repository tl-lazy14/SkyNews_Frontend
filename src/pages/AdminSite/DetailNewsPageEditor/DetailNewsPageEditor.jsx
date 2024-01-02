import './DetailNewsPageEditor.css';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateTime } from '../../../utils/formatDateTime';
import News15 from '../../../assets/news15.jpg';
import News16 from '../../../assets/news16.jpg';
import { useNavigate } from 'react-router-dom';

const DetailNewsPageEditor = () => {

    const navigate = useNavigate();

    const tagsArray = ["SLNA", "CLB TPHCM", "V-League", "CLB Bình Dương", "CLB Khánh Hòa", "CLB Hà Tĩnh", "CLB Công An Hà Nội", "V-League 2023-2024"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='detail-news-page-editor'>
            <div className='top-container'>
                <div><h2 className="name-page">Chi tiết bài báo</h2></div>
                <div onClick={() => navigate(-1)} className='back-btn'>
                    <div style={{ fontSize: '17px' }}>Về trang trước</div>
                    <div><FontAwesomeIcon style={{ fontSize: '19px' }} icon={faArrowLeft} /></div>
                </div>
            </div>
            <div className='news-content'>
                <div className='header-content'>
                    <div className='category-topic'>
                        <div className='category-name'>Thể thao</div>
                        <div><FontAwesomeIcon className='icon-right' icon={faAngleRight} /></div>
                        <div className='topic-name'>Bóng đá</div>
                    </div>
                    <div className='time'>
                        {getFormattedDateTime(new Date())}
                    </div>
                </div>
                <div className='news-body'>
                    <div className='title-news'>CAHN - Bình Dương: Khi chủ nhà cùng đường</div>
                    <div className='description'>
                        {/* <div dangerouslySetInnerHTML={{ __html: contentQuill }} /> */}
                        <p>Muốn chấm dứt chuỗi bốn trận liền không thắng ở V-League, nhưng Công an Hà Nội phải tiếp đón đội bóng đang dẫn đầu Bình Dương ở vòng 8 V-League 2023-2024.</p>
                        <p><img src={News15} alt='thumb-art' /></p>
                        <p>CAHN vẫn chưa có duyên với những HLV ngoại, khi đã thay ba cái tên kể từ khi lên V-League. HLV Brazil Paulo Foiani chia tay sau năm tháng, trợ lý Flavio Cruz lên thay cũng chỉ tạm quyền ba tháng và bây giờ, HLV Hàn Quốc Gong Oh-kyun phải ra đi sau 40 ngày với năm trận (một ở Cup Quốc gia và bốn ở V-League).</p>
                        <p>Giám đốc Kỹ thuật Trần Tiến Đại một lần nữa đóng thế, trong lúc chờ cựu HLV tuyển Thái Lan Mano Polking. CAHN muốn tìm lại cảm giác chiến thắng nhưng trước mắt là vòng 8 ẩn chứa nhiều khó khăn, với cuộc tiếp đón Bình Dương đang đạt phong độ cao.</p>
                        <p>Ở mùa thứ hai, HLV Lê Huỳnh Đức giúp Bình Dương chơi chắc chắn hơn với năm chiến thắng, một trận hoà và chỉ thua duy nhất Hà Nội sau một khoảnh khắc xuất thần. Bình Dương đạt 16 điểm bằng Nam Định, nhưng xếp nhì bảng vì kém hiệu số bàn thắng bại. Nếu tiếp tục thắng, đội sẽ nới rộng khoảng cách với nhà đương kim vô địch lên 10 điểm trước khi bước vào kỳ nghỉ dài nhường chỗ cho đội tuyển quốc gia.</p>
                        <p>CAHN muốn tránh khỏi kết cục ấy và quan trọng là khôi phục sự tự tin của cầu thủ. Tiền vệ Nguyễn Quang Hải thừa nhận CLB đang sở hữu những cầu thủ chất lượng và quan trọng là định hình được lối chơi phù hợp. Không thua Bình Dương là nhiệm vụ trước mắt, còn đường dài đội bóng cần tìm được sự ổn định ở ghế huấn luyện.</p>
                        <p><img src={News16} alt='thumb-art' /></p>
                        <p>Cùng giờ với trận đấu ở Hàng Đẫy, CLB TP HCM tiếp Hà Tĩnh trên sân Thống Nhất. Giống Bình Dương, CLB TP HCM là hiện tượng đầu mùa dù phải sớm thay HLV và đối mặt lùm xùm nợ lương. HLV Phùng Thanh Phương lên thay ông Vũ Tiến Thành giúp đội giành năm điểm trước ba đối thủ mạnh là Thể Công, Hải Phòng và Thanh Hoá, trước khi hạ SLNA 1-0 ở vòng trước nhờ bàn phản lưới.</p>
                        <p>Từ nhóm cuối, TP HCM chen chân đứng thứ năm với 12 điểm. Tinh thần lên cao lại có lợi thế sân nhà giúp TP HCM được đánh giá cao hơn đối thủ Hà Tĩnh đang thất thường và xếp áp chót.</p>
                        <p>Trước đó, Khánh Hoà chạm trán SLNA lúc 18h trên sân nhà 19/8 Nha Trang. Chính nơi này vòng trước Khánh Hoà có chiến thắng CAHN 2-1 gây sốc, dù được giúp sức không nhỏ bởi mặt sân lầy lội sau cơn mưa. Khánh Hoà đang đứng thứ 12 với sáu điểm, bằng SLNA nhưng kém hiệu số bàn thắng bại. Một chiến thắng sẽ giúp chủ nhà bứt xa hơn khỏi những vị trí phải đua trụ hạng. Mục tiêu này có cơ sở khi lực lượng SLNA mùa này yếu về chất và thiếu kinh nghiệm khi 70% là cầu thủ trẻ.</p>
                    </div>
                    <div className='author-name'>Tùng Lâm</div>
                    <div className='list-tag-container'>
                        <div className='title'>Tags:</div>
                        <div className='list-tag'>
                            {tagsArray.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <div className="item">{tag}</div>
                                    {index < tagsArray.length - 1 && <div style={{ color: '#aaaaaa', fontSize: '18px' }}>/</div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {/*
                        status là chờ duyệt thì có từ chối, sửa, đăng
                        status là đăng thì có chỉnh sửa
                        status là từ chối thì không có nút gì
                     */}
                    <div className='btn-container'>
                        <div className='btn decline'>Từ chối</div>
                        {/* Viết phương thức xử lý navigate cho nút chỉnh sửa, nếu là pending thì sang edit của pending, nếu là duyệt thì sang edit của duyệt */}
                        <div className='btn' onClick={() => navigate('/admin/editor/pending-articles/edit-news/1')}>Chỉnh sửa</div>
                        <div className='btn post'>Đăng</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default DetailNewsPageEditor;