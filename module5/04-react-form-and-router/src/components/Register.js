import {useState} from "react";
import {Formik} from "formik";
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";

let registerFormValidateSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Must be 6 characters or less')
        .required('Required'), password: Yup.string()
        .min(5, 'Must be 6 characters or less')
        .required('Required'), confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Register = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [form, setForm] = useState({
        username: '', password: '', confirmPassword: ''
    });

    const navigate = useNavigate();

    // const handleChange = (e) => {
    //     setForm({
    //         ...form, [e.target.name]: e.target.value
    //     })
    // }
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     if (!form.username.trim()) {
    //         window.alert("Please enter username!");
    //         return;
    //     }
    //     if (!form.password.trim()) {
    //         window.alert("Please enter password!");
    //         return;
    //     }
    //     if (!form.confirmPassword.trim()) {
    //         window.alert("Please enter confirm password!");
    //         return;
    //     }
    //     if (form.confirmPassword.trim() !== form.password.trim()) {
    //         window.alert("Confirm password is not match");
    //         return;
    //     }
    //
    //     // TODO: redirect den trang login
    // }
    return (<div className="container my-5">
        <Formik initialValues={form} validationSchema={registerFormValidateSchema}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setForm(values);
                    setSubmitting(false);
                    // TODO: Call API xu ly register va chuyen huong sang trang login
                    navigate("/login");
                }}>
            {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, /* and other goodies */
              }) => (<form onSubmit={handleSubmit} className="" noValidate>
                <div className="card">
                    <div className="card-body">
                        <h1>Register</h1>
                        <div className="mb-2">
                            <label htmlFor="username">Username:</label><br/>
                            <input className="form-control" onChange={handleChange} type="text" name="username"
                                   id="username"/>
                            {touched.username && errors.username ? (
                                <div className="text-danger">{errors.username}</div>) : null}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password">Password:</label><br/>
                            <input className="form-control" onChange={handleChange} type="password"
                                   name="password"
                                   id="password"/>
                            {touched.password && errors.password ? (
                                <div className="text-danger">{errors.password}</div>) : null}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="confirmPassword">Confirm Password:</label><br/>
                            <input className="form-control" onChange={handleChange} type="password"
                                   name="confirmPassword"
                                   id="confirmPassword"/>
                            {touched.confirmPassword && errors.confirmPassword ? (
                                <div className="text-danger">{errors.confirmPassword}</div>) : null}
                        </div>
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </div>
            </form>)}
        </Formik>
    </div>)
}

export default Register;
