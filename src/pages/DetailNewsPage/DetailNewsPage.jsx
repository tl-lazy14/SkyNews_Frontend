import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetailNewsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateTime } from '../../utils/formatDateTime';
import News8 from '../../assets/news8.png';
import { useState } from 'react';
import React from 'react';
import InputComment from '../../components/InputComment/InputComment';
import Comment from '../../components/Comment/Comment';
/*
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
*/

const DetailNewsPage = () => {

    const [save, setSave] = useState(false);
    const [selectCommentReply, setSelectCommentReply] = useState();
    const tagsArray = ["cạnh tranh", "dừng hoạt động", "giao đồ ăn", "Baemin Việt Nam"];

    const handleReplyClick = (commentId) => {
        setSelectCommentReply(commentId);
    };
    /* const [contentQuill, setContentQuill] = useState(''); */
    /*
    const handleEditorChange = (value) => {
        setContentQuill(value);
    };
    */

    return (
        <>
        <div className='detail-news-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='news-content'>
                    <div className='header-content'>
                        <div className='category-topic'>
                            <div className='category-name'>Kinh doanh</div>
                            <div><FontAwesomeIcon className='icon-right' icon={faAngleRight} /></div>
                            <div className='topic-name'>Doanh nghiệp</div>
                        </div>
                        <div className='time'>
                            {getFormattedDateTime(new Date())}
                        </div>
                    </div>
                    <div className='news-body'>
                        <div className='title-news'>Baemin dừng hoạt động tại Việt Nam</div>
                        <div className='description'>
                            {/* <div dangerouslySetInnerHTML={{ __html: contentQuill }} /> */}
                            <p>Ông lớn giao đồ ăn Hàn Quốc Baemin thông báo chia tay thị trường Việt Nam từ 8/12, hai tháng sau khi nói "thu hẹp hoạt động".</p>
                            <p>Xác nhận với VnExpress, đại diện Baemin Việt Nam - ứng dụng giao đồ ăn - cho biết sẽ "chính thức dừng hoạt động tại thị trường Việt Nam từ ngày 8/12". Thông báo về việc này cũng đã được hãng gửi đến các khách hàng trong hôm nay.</p>
                            <p>"Quyết định rời khỏi Việt Nam của Baemin được thúc đẩy bởi tình hình kinh tế khó khăn trên toàn cầu, cũng như thực trạng cạnh tranh khốc liệt của thị trường nước sở tại", thông báo của công ty cho hay.</p>
                            <p>Delivery Hero, công ty mẹ của Baemin Việt Nam, cho biết chiến lược lúc này là tập trung các thị trường đang dẫn đầu và có khả năng dẫn đầu. Tại Việt Nam, ưu tiên hàng đầu của ứng dụng này trong vài tuần tới là hỗ trợ cũng như hoàn tất nghĩa vụ và trách nhiệm với toàn thể nhân viên, các đối tác tài xế và đối tác nhà hàng.</p>
                            <p>Trước đó, cuối tháng 9, ông lớn giao đồ ăn của Hàn Quốc đã thông báo thu hẹp hoạt động. Trong một email gửi tới nhân viên Baemin Việt Nam khi đó, bà Cao Thị Ngọc Loan, Giám đốc điều hành tạm thời của Baemin Việt Nam, cho biết việc thu hẹp bởi thị trường giao đồ ăn đầy thách thức ở Việt Nam.</p>
                            <p><img src={News8} alt='thumb-art' /></p>
                            <p>Baemin được vận hành bởi Woowa Brothers Việt Nam, thành viên của liên doanh giữa Woowa Brothers - công ty giao đồ ăn đứng đầu tại Hàn Quốc và Delivery Hero - tập đoàn công nghệ giao đồ ăn tại hơn 50 quốc gia. Bên cạnh lĩnh vực giao đồ ăn cốt lõi, Baemin còn cung cấp một số dịch vụ khác như đi chợ hộ, cửa hàng bách hóa trực tuyến, bán mỹ phẩm.</p>
                            <p>Thương hiệu này bắt đầu xuất hiện ở Việt Nam từ giữa năm 2019 sau khi hoàn tất thâu tóm ứng dụng giao đồ ăn Việt Nam. Ông lớn Hàn Quốc gia nhập đúng thời điểm thị trường giao đồ ăn đang sôi động. Hàng loạt tên tuổi trong và ngoài nước tham gia thị trường, "đốt tiền" cho cuộc đua giành thị phần bằng cách tung ra khuyến mãi "khủng".</p>
                            <p>Hồi tháng 8, Niklas Östberg, đồng sáng lập, kiêm CEO Delivery Hero, nói với Reuters rằng triển vọng của công ty tại châu Á là tích cực, trừ Việt Nam - thị trường họ cho rằng hoạt động kinh doanh "không bao giờ có lãi".</p>
                            <p>Trong khi các đối thủ lớn như Grab, ShopeeFood thường xuyên khuyến mãi lớn để thu hút khách hàng, chính sách này lại không phải là yếu tố Baemin ưu tiên. Kết quả là sự hụt hơi trong cuộc đua thị phần. Thống kê của Momentum Works, năm 2022, Baemin chỉ nắm 12% thị phần giao đồ ăn tại Việt Nam, còn Grab chiếm 45%, ShopeeFood chiếm 41%.</p>
                        </div>
                        <div className='author-name'>Minh Sơn</div>
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
                    </div>
                    <div className='action-button'>
                        <div className='btn-back btn'>Trở lại Kinh doanh</div>
                        <div className='btn-save-news btn' onClick={() => setSave(!save)}>
                            <div><FontAwesomeIcon className={`bookmark-icon ${save ? 'bookmark-icon-saved' : ''}`} icon={faBookmark} /></div>
                            <div>Lưu</div>
                        </div>
                    </div>
                </div>
                <div className='comment-container'>
                    <div className='title'><span className='title-name'>Bình luận</span> (7)</div>
                    <InputComment />
                    <div className='list-comment'>
                        <div className='comment-group'>
                            <Comment id={1} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                            <div className='comment-child-group'>
                                <Comment id={2} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                                <Comment id={3} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                                <Comment id={4} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                            </div>
                        </div>
                        <div className='comment-group'>
                            <Comment id={5} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                        </div>
                        <div className='comment-group'>
                            <Comment id={6} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                            <div className='comment-child-group'>
                                <Comment id={7} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
        </>
    );
}
/*
<ReactQuill
    className='quill'
    value={contentQuill}
    theme='snow'
    onChange={handleEditorChange}
    modules={{
        toolbar: {
        container: [
            [{ header: "1" }, { header: "2" }],
            [{ size: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["code-block"],
            ["clean"],
            ],
        },
    }}
/>
*/

export default DetailNewsPage;