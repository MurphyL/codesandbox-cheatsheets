import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import axios from 'axios';

import styles from './authorizer.module.css';



export default function Authorizer() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({});
    const login = () => {
        const { username, password } = userInfo;
        if (!username || !password) {
            alert('用户信息必填');
        } else {
            axios.get(`/api/login?username=${username}&password=${password}`)
                .then(({ status }) => {
                    if (status === 200) { 
                        navigate('/', { replace: true });
                    } else {
                        alert('登录出错');
                    }
                })
                .catch(e => {
                    alert('登录出错');
                })
        }
    };
    return (
        <form className={styles.root} onSubmit={login}>
            <div>
                <label>
                    <span>Username</span>
                    <input type="text" name="username" onChange={e => {
                        setUserInfo({
                            ...userInfo,
                            username: e.target.value
                        })
                    }} />
                </label>
            </div>
            <div>
                <label>
                    <span>Password</span>
                    <input type="password" name="password" onChange={e => {
                        setUserInfo({
                            ...userInfo,
                            password: e.target.value
                        })
                    }} />
                </label>
            </div>
            <div>
                <button type="button" onClick={login}>登录</button>
            </div>
        </form>
    );
}