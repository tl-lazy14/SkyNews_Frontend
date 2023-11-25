import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { getFormattedTimestampComment } from '../../utils/formatDateTime';
import { useState } from 'react';
import InputComment from '../InputComment/InputComment';

const Comment = ({id, onReplyClick, selectedCommentReply}) => {

    const [liked, setLiked] = useState(false);

    return (
        <>
        <div className='comment-item'>
            <div className='avatar'>L</div>
            <div className='comment-content'>
                <div className='username-content'>
                    <span className='username'>lam2002ttb</span> <span className='comment'>Giá cao. Trong khi đồ ăn đường phố và hàng quán VN thì đầy rẫy. Lười đi mua hoặc muốn ăn tại nhà thì đặt ship, nhưng cùng là quán đó mà bên Baemin cao hơn hẳn thì tất nhiên ngta tìm app nào rẻ hơn rồi.</span>
                </div>
                <div className='like-reply-time'>
                    <div className='like-reply'>
                        <div className={`like ${liked ? 'liked' : ''}`} onClick={() => setLiked(!liked)}>Thích</div>
                        <div className='num-like'>
                            <div><FontAwesomeIcon className='num-like-icon' icon={faThumbsUp} /></div>
                            <div>5</div>
                        </div>
                        <div className='reply' onClick={() => onReplyClick(id)}>Trả lời</div>
                    </div>
                    <div className='comment-timestamp'>{getFormattedTimestampComment(new Date())}</div>
                </div>
            </div>
        </div>
        {id === selectedCommentReply && <InputComment />}
        </>
    );
};

export default Comment;