import { useState } from 'react';
import './InputComment.css';

const InputComment = () => {

    const [comment, setComment] = useState('');
    const [error, setError] = useState(false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setComment(inputValue);
        if (inputValue.trim() !== '') setError(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (comment.trim() === '') {
            setError(true);
            return;
        } else {
            return;
        }
    }

    return (
        <>
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