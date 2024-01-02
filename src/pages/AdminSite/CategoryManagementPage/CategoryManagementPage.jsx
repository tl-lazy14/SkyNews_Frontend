import { faPenToSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CategoryManagementPage.css';
import { useEffect, useState } from 'react';
import AddCategoryTopicModal from '../../../components/AdminComponents/Modal/AddCategoryTopicModal';
import RenameCategoryTopicModal from '../../../components/AdminComponents/Modal/RenameCategoryTopicModal';

const CategoryManagementPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
    const [thingAdd, setThingAdd] = useState('');
    const [thingRename, setThingRename] = useState('');

    return (
        <>
        <AddCategoryTopicModal isModalOpen={isAddModalOpen} setIsModalOpen={setIsAddModalOpen} type={thingAdd} />
        <RenameCategoryTopicModal isModalOpen={isRenameModalOpen} setIsModalOpen={setIsRenameModalOpen} type={thingRename} />
        <div className='category-management-page'>
            <h2 className="name-page">Quản lý danh mục</h2>
            <div className='action-container'>
                <div className="num-categories">15 danh mục</div>
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
                <div className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>Thời sự</div>
                        <div 
                            title='Thêm chủ đề vào danh mục' 
                            className='action-btn add-btn'
                            onClick={() => {
                                setThingAdd('topic');
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
                                setIsRenameModalOpen(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                        <div title='Xóa danh mục' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                    <div className='topic-container'>
                        <div className='topic-item'>
                            <div className='topic-name'>Chính trị</div>
                            <div 
                                title='Đổi tên chủ đề' 
                                className='action-btn rename-btn'
                                onClick={() => {
                                    setThingRename('topic');
                                    setIsRenameModalOpen(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Dân sinh</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Lao động - Việc làm</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Giao thông</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </div>
                </div>
                <div className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>Thế giới</div>
                        <div title='Thêm chủ đề vào danh mục' className='action-btn add-btn'><FontAwesomeIcon icon={faPlus} /></div>
                        <div title='Đổi tên danh mục' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div title='Xóa danh mục' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                    <div className='topic-container'>
                        <div className='topic-item'>
                            <div className='topic-name'>Tư liệu</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Phân tích</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Người Việt 5 châu</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Cuộc sống đó đây</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Quân sự</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </div>
                </div>
                <div className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>Kinh doanh</div>
                        <div title='Thêm chủ đề vào danh mục' className='action-btn add-btn'><FontAwesomeIcon icon={faPlus} /></div>
                        <div title='Đổi tên danh mục' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div title='Xóa danh mục' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                    <div className='topic-container'>
                        <div className='topic-item'>
                            <div className='topic-name'>Quốc tế</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Doanh nghiệp</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Chứng khoán</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Ebank</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Vĩ mô</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Hàng hóa</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Bảo hiểm</div>
                            <div title='Đổi tên chủ đề' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </div>
                </div>
                <div className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>Bất động sản</div>
                        <div title='Thêm chủ đề vào danh mục' className='action-btn add-btn'><FontAwesomeIcon icon={faPlus} /></div>
                        <div title='Đổi tên danh mục' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div title='Xóa danh mục' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                    <div className='topic-container'>
                        <div className='topic-item'>
                            <div className='topic-name'>Chính sách</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Thị trường</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Không gian sống</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </div>
                </div>
                <div className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>Khoa học</div>
                        <div title='Thêm chủ đề vào danh mục' className='action-btn add-btn'><FontAwesomeIcon icon={faPlus} /></div>
                        <div title='Đổi tên danh mục' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div title='Xóa danh mục' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                    <div className='topic-container'>
                        <div className='topic-item'>
                            <div className='topic-name'>Khoa học trong nước</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Tin tức</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Phát minh</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Ứng dụng</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Thế giới tự nhiên</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Thường thức</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </div>
                </div>
                <div className='category-item'>
                    <div className='category-container'>
                        <div className='category-name'>Giải trí</div>
                        <div title='Thêm chủ đề vào danh mục' className='action-btn add-btn'><FontAwesomeIcon icon={faPlus} /></div>
                        <div title='Đổi tên danh mục' className='action-btn rename-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                        <div title='Xóa danh mục' className='action-btn delete-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                    </div>
                    <div className='topic-container'>
                        <div className='topic-item'>
                            <div className='topic-name'>Showbiz</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Sách</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Phim</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Nhạc</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Thời trang</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Làm đẹp</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                        <div className='topic-item'>
                            <div className='topic-name'>Sân khấu - Mỹ thuật</div>
                            <div title='Đổi tên chủ đề' className='action-btn'><FontAwesomeIcon icon={faPenToSquare} /></div>
                            <div title='Xóa chủ đề' className='action-btn'><FontAwesomeIcon icon={faTrashCan} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CategoryManagementPage;