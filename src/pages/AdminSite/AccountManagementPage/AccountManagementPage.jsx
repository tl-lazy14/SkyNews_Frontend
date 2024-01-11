import './AccountManagementPage.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import CreateUserModal from '../../../components/AdminComponents/Modal/CreateUserModal';
import api from '../../../components/axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountManagementPage = () => {

    const accessToken = localStorage.getItem("accessToken");

    const [role, setRole] = useState("ROLE_JOURNALIST");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [listUser, setListUser] = useState([]);
    const [numUser, setNumUser] = useState(0);

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

    const getListUsers = async () => {
        try {
            const response = await api.get('/user/admin/get-list-user', {
                params: { 
                    role: role,
                    searchQuery: searchQuery,
                    page: currentPage,
                    pageSize: 10,
                },
                headers: { token: `Bearer ${accessToken}` }
            });
            setListUser(response.data.listUser);
            setNumUser(response.data.numUser);
            setTotalPages(Math.floor(response.data.numUser / 10) + 1);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getListUsers();
        window.scrollTo(0, 0);
    }, [currentPage, role, searchQuery]);

    const handleDeleteUser = async (id) => {
        try {
            await api.delete(`/user/admin/delete/${id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success('Xóa tài khoản người dùng thành công!', {
                position: toast.POSITION.TOP_CENTER,
                containerId: "deleteUserAdminToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            getListUsers();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
        <ToastContainer containerId="deleteUserAdminToast" limit={1}/>
        <CreateUserModal 
            isModalOpen={isCreateUserModalOpen} 
            setIsModalOpen={setIsCreateUserModalOpen} 
            setRole={setRole} 
            updateList={getListUsers}
        />
        <div className='account-management-page'>
            <div className='top-container'>
                <div><h2 className="name-page">Danh sách tài khoản {role === 'ROLE_JOURNALIST' ? 'nhà báo' : 'biên tập viên'}</h2></div>
                <div className='role-picker'>
                    <select value={role} onChange={handleSelectRoleChange}>
                        <option value="ROLE_JOURNALIST">Nhà báo</option>
                        <option value="ROLE_EDITOR">Biên tập viên</option>
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
                    <div className="num-articles">{numUser} tài khoản</div>
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
                            { listUser.length > 0 && listUser.map((user, index) => (
                            <tr key={index} className="record"> 
                                <td>{10 * (currentPage - 1) + index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {role === 'ROLE_JOURNALIST' ? 'Nhà báo' : 'Biên tập viên - '}
                                    {role === 'ROLE_EDITOR' && <span className='category'>{user.editorCategory}</span>}
                                </td>
                                <td>
                                    <div onClick={() => handleDeleteUser(user.id)} className='btn-delete'>
                                        <div>Xóa</div>
                                        <div><FontAwesomeIcon style={{fontSize: '20px'}} icon={faTrashCan} /></div>
                                    </div>
                                </td>
                            </tr>
                            ))}
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