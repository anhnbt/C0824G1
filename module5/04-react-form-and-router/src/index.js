import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeList from "./components/employees/EmployeeList";
import UserList from "./components/users/UserList";
import AdminLayout from "./layout/AdminLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} Component={Home}></Route>
            <Route path={'/admin'} Component={AdminLayout}>
                <Route path={'employees'} Component={EmployeeList}></Route>
                <Route path={'users'} Component={UserList}></Route>
            </Route>
            <Route path={'/login'} Component={Login}></Route>
            <Route path={'/register'} Component={Register}></Route>
        </Routes>
    </BrowserRouter>
);
