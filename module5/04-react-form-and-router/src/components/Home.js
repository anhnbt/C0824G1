import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to={'/login'}>Login</Link> | <Link to={'/register'}>Register</Link>
        </>
    );
}

export default Home;
