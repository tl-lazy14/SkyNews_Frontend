import { useEffect, useState } from 'react';
import './Modal.css';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../axiosInterceptor';

const RenameCategoryTopicModal = ({ isModalOpen, setIsModalOpen, type, category, topic, updateList }) => {

    const accessToken = localStorage.getItem('accessToken');

    const [keyword, setKeyword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setKeyword(`${type === 'category' ? category?.name : topic?.name}`)
    }, [isModalOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (keyword.trim() === '') {
            setError(`Bạn chưa nhập tên ${type === 'category' ? 'danh mục' : 'chủ đề'}`);
            return;
        } else if (type === 'category' && keyword.trim() === category.name) {
            setError("Nhập tên danh mục mới để đổi tên");
            return;
        } else if (type === 'topic' && keyword.trim() === topic.name) {
            setError("Nhập tên chủ đề mới để đổi tên");
            return;
        } else { 
            setError('');
        }

        try {
            if (type === 'category') {
                // eslint-disable-next-line no-unused-vars
                const res = await api.put(`/category-topic/rename-category/${category.id}`, { name: keyword.trim() }, {
                    headers: { token: `Bearer ${accessToken}` }
                });
                closeModal();
                toast.success(`Đổi tên danh mục thành công!`, {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'handleRenameCategoryTopic',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                updateList();
            } else if (type === 'topic') {
                // eslint-disable-next-line no-unused-vars
                const res = await api.put(`/category-topic/rename-topic/${topic.id}`, { name: keyword.trim() }, {
                    headers: { token: `Bearer ${accessToken}` }
                });
                closeModal();
                toast.success(`Đổi tên chủ đề thành công!`, {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'handleRenameCategoryTopic',
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
                    containerId: "handleRenameCategoryTopic",
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
        <ToastContainer containerId="handleRenameCategoryTopic" limit={1}/>
        <Modal 
            className='category-topic-modal'
            isOpen={isModalOpen}
            onRequestClose={closeModal} 
            shouldCloseOnOverlayClick={false} 
            shouldCloseOnEsc={true}
            overlayClassName="overlay"
        >
            { type === 'category' && <div className='title'>Đổi tên danh mục <span className='category-name'>{category.name}</span></div> }
            { type === 'topic' && <div className='title'>Đổi tên chủ đề <span className='category-name'>{topic.name}</span></div> }
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