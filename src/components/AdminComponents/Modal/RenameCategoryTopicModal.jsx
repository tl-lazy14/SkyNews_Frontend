import { useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';

const RenameCategoryTopicModal = ({ isModalOpen, setIsModalOpen, type }) => {

    const [keyword, setKeyword] = useState('Thể thao');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (keyword.trim() === '') {
            setError(`Bạn chưa nhập tên ${type === 'category' ? 'danh mục' : 'chủ đề'}`);
            return;
        } else {
            setError('');
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setKeyword('Thể thao');
        setError('');
    };

    return (
        <>
        <Modal 
            className='category-topic-modal'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={false} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            { type === 'category' && <div className='title'>Đổi tên danh mục <span className='category-name'>Thể thao</span></div> }
            { type === 'topic' && <div className='title'>Đổi tên chủ đề <span className='category-name'>Bóng đá</span></div> }
            <form className='input-container' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        className='input-field'
                        placeholder={type === 'category' ? 'Tên danh mục' : 'Tên chủ đề'}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}  
                        autoComplete='off'
                    />
                    { error && <div className='error'>{error}</div> }
                    <div className='action-btn'>
                        <button onClick={closeModal}>Hủy</button>
                        <button type='submit'>Cập nhật</button>
                    </div>
            </form>
        </Modal>
        </>
    );
};

export default RenameCategoryTopicModal;