import './DetailNewsPageEditor.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateTime } from '../../../utils/formatDateTime';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../components/axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const DetailNewsPageEditor = () => {

    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const { idNews } = useParams();
    const path = window.location.pathname;

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

    const handleNavigateEditPage = () => {
        if (path.startsWith('/admin/editor/pending-articles/news')) navigate(`/admin/editor/pending-articles/edit-news/${idNews}`);
        else if (path.startsWith('/admin/editor/list-articles/news')) navigate(`/admin/editor/list-articles/edit-news/${idNews}`);
    }

    const handleNavigateListPage = () => {
        if (path.startsWith('/admin/editor/pending-articles/news')) navigate("/admin/editor/pending-articles");
        else if (path.startsWith('/admin/editor/list-articles/news')) navigate("/admin/editor/list-articles");
    }

    const handleApproveArticle = async (action) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await api.put(`/article/approve/${idNews}/${action}`, idNews, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success(`${action === 'accept' ? 'Đăng' : 'Từ chối'} bài viết thành công!`, {
                position: toast.POSITION.TOP_CENTER,
                containerId: "approveArticleToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            navigate('/admin/editor/list-articles');
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
        <ToastContainer containerId="approveArticleToast" limit={1}/>
        <div className='detail-news-page-editor'>
            <div className='top-container'>
                <div><h2 className="name-page">Chi tiết bài báo</h2></div>
                <div onClick={handleNavigateListPage} className='back-btn'>
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
                        {getFormattedDateTime(new Date(article.sendEditorTimestamp))}
                    </div>
                </div>
                <div className='news-body'>
                    <div className='title-news'>{article.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: article.content }} className='description'></div>
                    <div className='author-name'>{article.authorName}</div>
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
                    {/*
                        status là chờ duyệt thì có từ chối, sửa, đăng
                        status là đăng thì có chỉnh sửa
                        status là từ chối thì không có nút gì
                    */}
                    <div className='btn-container'>
                        {article.approvalStatus === 'pending' && (
                        <div onClick={() => handleApproveArticle('decline')} className='btn decline'>Từ chối</div>
                        )}
                        {/* Viết phương thức xử lý navigate cho nút chỉnh sửa, nếu là pending thì sang edit của pending, nếu là duyệt thì sang edit của duyệt */}
                        {(article.approvalStatus === 'pending' || article.approvalStatus === 'accept') && (
                        <div className='btn' onClick={handleNavigateEditPage}>Chỉnh sửa</div>
                        )}
                        {article.approvalStatus === 'pending' && (
                        <div onClick={() => handleApproveArticle('accept')} className='btn post'>Đăng</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default DetailNewsPageEditor;