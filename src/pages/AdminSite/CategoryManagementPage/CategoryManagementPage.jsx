import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoryManagementPage.css';
import { useEffect, useState, useContext } from 'react';
import AddCategoryTopicModal from '../../../components/AdminComponents/Modal/AddCategoryTopicModal';
import RenameCategoryTopicModal from '../../../components/AdminComponents/Modal/RenameCategoryTopicModal';
import { UserContext } from '../../../components/userContext';
import api from '../../../components/axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const CategoryManagementPage = () => {

    const { user } = useContext(UserContext);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [listCategoryTopic, setListCategoryTopic] = useState([]);
    const [numCategory, setNumCategory] = useState(0);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [thingAdd, setThingAdd] = useState('');
    const [thingRename, setThingRename] = useState('');
    const [category, setCategory] = useState();
    const [topic, setTopic] = useState();

    const getListCategoryTopic = async () => {
        try {
            const response = await axios.get('http://localhost:8080/skynews/api/v1/category-topic');
            setListCategoryTopic(response.data.listCategory);
            setNumCategory(response.data.numCategory);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeleteCategory = async (id) => {
        try {
            await api.delete(`/category-topic/delete-category/${id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success('Xóa danh mục thành công!', {
                position: toast.POSITION.TOP_CENTER,
                containerId: "deleteCategoryTopicToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            getListCategoryTopic();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleDeleteTopic = async (id) => {
        try {
            await api.delete(`/category-topic/delete-topic/${id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success('Xóa chủ đề thành công!', {
                position: toast.POSITION.TOP_CENTER,
                containerId: "deleteCategoryTopicToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            getListCategoryTopic();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getListCategoryTopic();
    }, []);

    return (
        <>
        <ToastContainer containerId="deleteCategoryTopicToast" limit={1}/>
        <AddCategoryTopicModal 
            isModalOpen={isAddModalOpen} 
            setIsModalOpen={setIsAddModalOpen} 
            type={thingAdd} 
            category={category} 
            updateList={getListCategoryTopic}
        />
        <RenameCategoryTopicModal 
            isModalOpen={isRenameModalOpen} 
            setIsModalOpen={setIsRenameModalOpen} 
            type={thingRename} 
            category={category}
            topic={topic}
            updateList={getListCategoryTopic}
        />
        { user.role === 'ROLE_SENIOR_ADMIN' && (
        <div className='category-management-page'>
            <h2 className="name-page">Quản lý danh mục</h2>
            <div className='action-container'>
                <div className="num-categories">{numCategory} danh mục</div>
                <div 
                    className="add-category-button" 
                    onClick={() => {
                        setThingAdd('category');
                        setIsAddModalOpen(true);
                    }}
                >
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                    <div>Thêm danh mục</div>
                </div>
            </div>
            <div className='list-category-container'>
                { listCategoryTopic.length > 0 && listCategoryTopic.map((category, index) => (
                <div key={index} className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>{category.name}</div>
                        <div 
                            title='Thêm chủ đề vào danh mục' 
                            className='action-btn add-btn'
                            onClick={() => {
                                setThingAdd('topic');
                                setCategory(category);
                                setIsAddModalOpen(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        <div 
                            title='Đổi tên danh mục' 
                            className='action-btn rename-btn'
                            onClick={() => {
                                setThingRename('category');
                                setCategory(category);
                                setIsRenameModalOpen(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div 
                            title='Xóa danh mục - Việc này bao gồm xóa toàn bộ các bài báo thuộc danh mục và các chủ đề trong danh mục' 
                            className='action-btn delete-btn'
                            onClick={() => handleDeleteCategory(category.id)}
                        >
                                <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                    <div className='topic-container'>
                        { category.listTopic.length > 0 && category.listTopic.map((topic, index) => (
                        <div key={index} className='topic-item'>
                            <div className='topic-name'>{topic.name}</div>
                            <div 
                                title='Đổi tên chủ đề' 
                                className='action-btn rename-btn'
                                onClick={() => {
                                    setThingRename('topic');
                                    setCategory(category);
                                    setTopic(topic);
                                    setIsRenameModalOpen(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <div 
                                title='Xóa chủ đề - Việc này bao gồm xóa toàn bộ các bài báo thuộc chủ đề này' 
                                className='action-btn delete-btn'
                                onClick={() => handleDeleteTopic(topic.id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>
        )}
        </>
    );
};

export default CategoryManagementPage;