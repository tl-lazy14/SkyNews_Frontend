import './AccountManagementPage.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CreateUserModal from '../../../components/AdminComponents/Modal/CreateUserModal';

const AccountManagementPage = () => {

    const [role, setRole] = useState("journalist");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2);

    const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

    const handleSelectRoleChange = (event) => {
        const selectedRole = event.target.value;
        setRole(selectedRole);
        setCurrentPage(1);
    };

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page > totalPages || page < 1) return;
        else setCurrentPage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, role, searchQuery]);

    return (
        <>
        <CreateUserModal isModalOpen={isCreateUserModalOpen} setIsModalOpen={setIsCreateUserModalOpen} />
        <div className='account-management-page'>
            <div className='top-container'>
                <div><h2 className="name-page">Danh sách tài khoản {role === 'journalist' ? 'nhà báo' : 'biên tập viên'}</h2></div>
                <div className='role-picker'>
                    <select value={role} onChange={handleSelectRoleChange}>
                        <option value="journalist">Nhà báo</option>
                        <option value="editor">Biên tập viên</option>
                    </select>
                </div>
            </div>
            <div className='action-container'>
                <div className='left-action-container'>
                    <div onClick={() => setIsCreateUserModalOpen(true)} className='create-user-btn'>
                        <div><FontAwesomeIcon className='icon-search' icon={faPlus} /></div>
                        <div>Tạo người dùng mới</div>
                    </div>
                </div>
                <div className='right-action-container'>
                    <div className="num-articles">15 tài khoản</div>
                    <div className="search-box">
                        <input
                            type="text"
                            value={searchQuery}
                            placeholder="Tìm kiếm theo tên tài khoản hoặc email" 
                            onChange={handleSearchInputChange}
                        />
                        <FontAwesomeIcon className='icon-search' icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
            <div className='list-account-container'>
                <table>
                        <tbody>
                            <tr className="col-name">
                                <th>STT</th>
                                <th>Tên người dùng</th>
                                <th>Email</th>
                                <th>Vai trò</th>
                                <th></th>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="record"> 
                                <td>1</td>
                                <td>Tùng Lâm</td>
                                <td>lam2002ttb@gmail.com</td>
                                <td>
                                    {role === 'journalist' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'editor' && <span className='category'>Thời sự</span>}
                                </td>
                                <td>
                                    <div className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <div className="btn-page" onClick={() => handlePageChange(1)}>Trang đầu</div>
                <div className="btn-page" onClick={() => handlePageChange(currentPage - 1)}>Trang trước</div>
                <div className='text-page'>Trang <span style={{fontWeight: "700"}}>{currentPage}</span> trên {totalPages}</div>
                <div className="btn-page" onClick={() => handlePageChange(currentPage + 1)}>Trang sau</div>
                <div className="btn-page" onClick={() => handlePageChange(totalPages)}>Trang cuối</div>
            </div>
        </div>
        </>
    );
};

export default AccountManagementPage;