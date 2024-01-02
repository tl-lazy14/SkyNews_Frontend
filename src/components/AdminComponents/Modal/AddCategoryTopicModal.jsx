import { useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';

const AddCategoryTopicModal = ({ isModalOpen, setIsModalOpen, type }) => {

    const [keyword, setKeyword] = useState('');
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
        setKeyword('');
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
            { type === 'category' && <div className='title'>Thêm danh mục</div> }
            { type === 'topic' && <div className='title'>Thêm chủ đề vào danh mục <span className='category-name'>Thể thao</span></div> }
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
                        <button type='submit'>Thêm</button>
                    </div>
            </form>
        </Modal>
        </>
    );
};

export default AddCategoryTopicModal;