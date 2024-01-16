import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetailNewsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateTime } from '../../utils/formatDateTime';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import InputComment from '../../components/InputComment/InputComment';
import Comment from '../../components/Comment/Comment';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../components/userContext';
import api from '../../components/axiosInterceptor';
import { LoaderComponent } from '../../utils/loading';

const DetailNewsPage = () => {

    const [save, setSave] = useState(false);
    const [selectCommentReply, setSelectCommentReply] = useState();
    const { idNews } = useParams();
    const [article, setArticle] = useState({});
    const [tags, setTags] = useState([]);
    const [listComment, setListComment] = useState([]);
    const [numComment, setNumComment] = useState(0);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const accessToken = localStorage.getItem("accessToken");
    const hash = window.location.hash.substring(1);

    const getArticle = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8080/skynews/api/v1/article/detail/${idNews}`);
            setArticle(response.data.article);
            setTags(response.data.tags);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const getListComment = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/skynews/api/v1/article/list-comment/${idNews}/${(user && accessToken) ? user.id : 0}`);
            const comments = response.data;
            setListComment(comments);
            let numComment = 0;
            for (let x of comments) {
                numComment = numComment + 1 + x.childComments.length;
            }
            setNumComment(numComment);
        } catch (err) {
            console.log(err);
        }
    }

    const checkIsUserSaveNews = async () => {
        try {
            const response = await api.get(`/article/check-save/${user.id}/${idNews}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            const isSave = response.data.isSave === 1 ? true : false;
            setSave(isSave);
        } catch (err) {
            console.log(err);
        }
    }

    const addViewArticle = async () => {
        try {
            await api.put(`/article/add-view/${idNews}/${(user && accessToken) ? user.id : 0}`);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSaveArticle = async () => {
        try {
            const response = await api.get(`/article/handle-save/${user.id}/${idNews}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            const isSave = response.data.isSave === 1 ? true : false;
            setSave(isSave);
        } catch (err) {
            console.log(err);
        }
    }

    const handleReplyClick = (commentId) => {
        setSelectCommentReply(commentId);
    };

    useEffect(() => {
        getArticle();
        if (user && accessToken) checkIsUserSaveNews();
        getListComment();
        addViewArticle();
        window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hash]);

    useEffect(() => {
        if (hash) {
          // Tìm phần tử có ID tương ứng và cuộn trang đến đó
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, [listComment]);

    return (
        <>
        <div className='detail-news-page'>
            <Header />
            <CategoryNav />
            { !loading && (
            <div className='content'>
                <div className='news-content'>
                    <div className='header-content'>
                        <div className='category-topic'>
                            <div onClick={() => navigate(`/category/${article.category?.name}`)} className='category-name'>{article.category?.name}</div>
                            {article.topic && (<div><FontAwesomeIcon className='icon-right' icon={faAngleRight} /></div>)}
                            {article.topic && (<div onClick={() => navigate(`/category/${article.category?.name}/${article.topic?.name}`)} className='topic-name'>{article.topic?.name}</div>)}
                        </div>
                        <div className='time'>
                            {getFormattedDateTime(new Date(article.decisionTimestamp))}
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
                    </div>
                    <div className='action-button'>
                        <div className='btn-back btn' onClick={() => navigate(`/category/${article.category?.name}`)}>Trở lại {article.category?.name}</div>
                        {user && accessToken && (
                        <div className='btn-save-news btn' onClick={handleSaveArticle}>
                            <div><FontAwesomeIcon className={`bookmark-icon ${save ? 'bookmark-icon-saved' : ''}`} icon={faBookmark} /></div>
                            <div>Lưu</div>
                        </div>
                        )}
                    </div>
                </div>
                <div className='comment-container'>
                    <div className='title'><span className='title-name'>Bình luận</span> ({numComment})</div>
                    <InputComment updateListComment={getListComment} commentReplied={0} onReplyClick={handleReplyClick} />
                    <div className='list-comment'>
                        {listComment.length > 0 && listComment.map((parentComment, index) => (
                        <div key={index} className='comment-group'>
                            <Comment updateListComment={getListComment} id={parentComment.parentComment.id} comment={parentComment.parentComment} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                            {parentComment.childComments.length > 0 && (
                            <div className='comment-child-group'>
                                {parentComment.childComments.map((childComment, index) => (
                                <Comment updateListComment={getListComment} id={childComment.id} comment={childComment} onReplyClick={handleReplyClick} selectedCommentReply={selectCommentReply} />
                                ))}
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>  
            </div>
            )}
            { loading && (
                <div className='content'>
                    <LoaderComponent />
                </div>
            )}
            <Footer />
        </div>
        </>
    );
}

export default DetailNewsPage;