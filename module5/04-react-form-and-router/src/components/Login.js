import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameRef.current.value && passwordRef.current.value) {
            if (usernameRef.current.value === 'admin' && passwordRef.current.value === '123') {
                localStorage.setItem("username", usernameRef.current.value);
                navigate("/admin");
            } else {
                window.alert("Sai tài khoản hoặc mật khẩu!")
            }
            // TODO: Login
        } else {
            window.alert("Vui lòng nhập tài khoản và mật khẩu!")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <label htmlFor="username">Username:</label><br />
                <input ref={usernameRef} type="text" name="username" id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password:</label><br />
                <input ref={passwordRef} type="password" name="password" id="password"/>
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;
