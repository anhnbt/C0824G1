import {Link, NavLink, Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {Dropdown} from "react-bootstrap";

const AdminLayout = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username") || '';

    useEffect(() => {
        if (!username) {
            navigate('/login');
        }
    }, []);

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                to="/admin/employees">Employees</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                                to={'/admin/users'}>Users</NavLink>
                        </li>
                    </ul>
                    <ul className='ms-auto navbar-nav'>
                        <li className="nav-item">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Xin chào, {username}!
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as="button" onClick={() => {
                                        localStorage.clear();
                                        navigate("/login");
                                    }}>Đăng xuất</Dropdown.Item>
                                    <Dropdown.ItemText><Link className="text-decoration-none" to={'/profile'}>Thông tin cá nhân</Link></Dropdown.ItemText>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <Outlet/>
        </div>
        <footer>
            <div className="container">
                &copy; CodeGym 2024.
            </div>
        </footer>
    </>)
}

export default AdminLayout;
