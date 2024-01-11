import { useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';
import api from '../../axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategoryTopicModal = ({ isModalOpen, setIsModalOpen, type, category, updateList }) => {

    const accessToken = localStorage.getItem('accessToken');

    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (keyword.trim() === '') {
            setError(`Bạn chưa nhập tên ${type === 'category' ? 'danh mục' : 'chủ đề'}`);
            return;
        } else {
            setError('');
        }

        try {
            if (type === 'category') {
                // eslint-disable-next-line no-unused-vars
                const response = await api.post('/category-topic/add-category', { name: keyword.trim() }, {
                    headers: { token: `Bearer ${accessToken}` }
                });
                closeModal();
                toast.success(`Thêm danh mục thành công!`, {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'handleAddCategoryTopic',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                updateList();
            } else if (type === 'topic') {
                // eslint-disable-next-line no-unused-vars
                const response = await api.post(`/category-topic/add-topic/${category.id}`, { name: keyword }, {
                    headers: { token: `Bearer ${accessToken}` }
                });
                closeModal();
                toast.success(`Thêm chủ đề thành công!`, {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'handleAddCategoryTopic',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                updateList();
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.error) {
                toast.error(`${err.response.data.error}`, {
                    position: toast.POSITION.TOP_RIGHT,
                    containerId: "handleAddCategoryTopic",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
            }
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setKeyword('');
        setError('');
    };

    return (
        <>
        <ToastContainer containerId="handleAddCategoryTopic" limit={1}/>
        <Modal 
            className='category-topic-modal'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={false} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            { type === 'category' && <div className='title'>Thêm danh mục</div> }
            { type === 'topic' && <div className='title'>Thêm chủ đề vào danh mục <span className='category-name'>{category.name}</span></div> }
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