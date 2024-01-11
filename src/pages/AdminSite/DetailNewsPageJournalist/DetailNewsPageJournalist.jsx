import './DetailNewsPageJournalist.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateTime } from '../../../utils/formatDateTime';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../components/axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const DetailNewsPageJournalist = () => {

    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();

    const { idNews } = useParams();
    const [article, setArticle] = useState({});
    const [tags, setTags] = useState([]);

    const getArticle = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/skynews/api/v1/article/detail/${idNews}`);
            setArticle(response.data.article);
            setTags(response.data.tags);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSendEditor = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await api.put(`/article/send-editor/${idNews}`, idNews, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success('Gửi yêu cầu phê duyệt bài viết thành công!', {
                position: toast.POSITION.TOP_CENTER,
                containerId: "sendArticleToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            navigate('/admin/journalist/my-articles');
        } catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        getArticle();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <ToastContainer containerId="sendArticleToast" limit={1}/>
        <div className='detail-news-page-journalist'>
            <div className='top-container'>
                <div><h2 className="name-page">Chi tiết bài báo</h2></div>
                <div onClick={() => navigate('/admin/journalist/my-articles')} className='back-btn'>
                    <div style={{ fontSize: '17px' }}>Về trang trước</div>
                    <div><FontAwesomeIcon style={{ fontSize: '19px' }} icon={faArrowLeft} /></div>
                </div>
            </div>
            <div className='news-content'>
                <div className='header-content'>
                    <div className='category-topic'>
                        <div className='category-name'>{article.category?.name}</div>
                        {article.topic && (<div><FontAwesomeIcon className='icon-right' icon={faAngleRight} /></div>)}
                        {article.topic && (<div className='topic-name'>{article.topic?.name}</div>)}
                    </div>
                    <div className='time'>
                        {getFormattedDateTime(new Date(article.createTimestamp))}
                    </div>
                </div>
                <div className='news-body'>
                    <div className='title-news'>{article.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: article.content }} className='description'></div>
                    <div className='list-tag-container'>
                        <div className='title'>Tags:</div>
                        <div className='list-tag'>
                            {tags.length > 0 && tags.map((tag, index) => (
                                <React.Fragment key={index}>
                                    <div className="item">{tag}</div>
                                    {index < tags.length - 1 && <div style={{ color: '#aaaaaa', fontSize: '18px' }}>/</div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {article.approvalStatus === 'not-send' && (
                    <div className='btn-container'>
                        <div className='btn' onClick={() => navigate(`/admin/journalist/edit-news/${idNews}`)}>Chỉnh sửa</div>
                        <div className='btn' onClick={handleSendEditor}>Gửi biên tập</div>
                    </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default DetailNewsPageJournalist;