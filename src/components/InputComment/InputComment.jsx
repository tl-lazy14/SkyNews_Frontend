import { useContext, useState } from 'react';
import './InputComment.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../userContext';
import api from '../axiosInterceptor';
import { useParams } from 'react-router-dom';

const InputComment = ({ updateListComment, commentReplied, onReplyClick }) => {

    const [comment, setComment] = useState('');
    const [error, setError] = useState(false);

    const { user } = useContext(UserContext);
    const { idNews } = useParams();
    const accessToken = localStorage.getItem("accessToken");

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setComment(inputValue);
        if (inputValue.trim() !== '') setError(false);
    }

    const addComment = async () => {
        try {
            await api.post(`/article/add-comment/${idNews}/${user.id}/${commentReplied}`, { comment: comment }, {
                headers: { token: `Bearer ${accessToken}` }
            })
            toast.success('Đã bình luận bài viết!', {
                position: toast.POSITION.TOP_RIGHT,
                containerId: "InputCommentToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: true,
                theme: 'colored',
            });
            updateListComment();
            setComment('');
            onReplyClick();
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment.trim() === '') {
            setError(true);
            return;
        } else if (!user || !accessToken) {
            toast.error('Vui lòng đăng nhập để có thể bình luận bài viết!', {
                position: toast.POSITION.TOP_RIGHT,
                containerId: "InputCommentToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: true,
                theme: 'colored',
            });
            return;
        } else {
            addComment();
        }
    }

    return (
        <>
        <ToastContainer containerId="InputCommentToast" limit={1}/>
        <div className='input-comment'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input-field'
                    placeholder='Bình luận của bạn'
                    value={comment}
                    onChange={handleInputChange} 
                />
                {error && <div className='error-text'>Bạn chưa nhập nội dung bình luận</div>}
                <button type='submit' className='submit-btn'>Gửi</button>
            </form>            
        </div>
        </>
    );
}

export default InputComment;