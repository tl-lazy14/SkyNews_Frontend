import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { getFormattedTimestampComment } from '../../utils/formatDateTime';
import { useContext } from 'react';
import InputComment from '../InputComment/InputComment';
import { UserContext } from '../userContext';
import api from '../axiosInterceptor';

const Comment = ({ updateListComment, id, comment, onReplyClick, selectedCommentReply}) => {

    const { user } = useContext(UserContext);
    const accessToken = localStorage.getItem("accessToken");

    const handleClickReply = () => {
        if (selectedCommentReply === id) onReplyClick();
        else onReplyClick(id);
    }

    const handleLikeComment = async (idComment) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await api.get(`/article/handle-like-comment/${idComment}/${user.id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            updateListComment();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        <div id={comment.id} className='comment-item'>
            <div className='avatar'>{comment.commenter.name[0].toUpperCase()}</div>
            <div className='comment-content'>
                <div className='username-content'>
                    <span className='username'>{comment.commenter.name}</span> {comment.usernameTag !== null && comment.usernameTag !== '' && <span className='username-tag'>@{comment.usernameTag}</span>} <span className='comment'>{comment.commentText}</span>
                </div>
                <div className='like-reply-time'>
                    <div className='like-reply'>
                        { user && accessToken && <div onClick={() => handleLikeComment(id)} className={`like ${comment.isUserLike === 1 ? 'liked' : ''}`}>Thích</div>}
                        {comment.numLike > 0 && (
                        <div className='num-like'>
                            <div><FontAwesomeIcon className='num-like-icon' icon={faThumbsUp} /></div>
                            <div>{comment.numLike}</div>
                        </div>
                        )}
                        <div className='reply' onClick={handleClickReply}>Trả lời</div>
                    </div>
                    <div className='comment-timestamp'>{getFormattedTimestampComment(new Date(comment.commentTimestamp))}</div>
                </div>
            </div>
        </div>
        {id === selectedCommentReply && <InputComment updateListComment={updateListComment} commentReplied={selectedCommentReply} onReplyClick={onReplyClick} />}
        </>
    );
};

export default Comment;