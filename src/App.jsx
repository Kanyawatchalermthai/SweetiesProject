import { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import ProductBlogs from './ProductBlogs'
import useAxios from './useAxios'
import Menu from './Menu'
import './index.css'
import api from './api';
import AuthContext from './AuthContext';

function App() {
    const {data: products, isLoading} = useAxios('/product')
    const {auth, setAuth} = useContext(AuthContext);
    return (
        <div className= "App">
            <Menu />
            <div className="content">
                {isLoading && <div>Loading...</div>} {/*โหลดข้อมูลมาก่อน*/}
                {products && <ProductBlogs products={products} />}
                {/* <Catalog /> */}
            </div>
        </div>
    );
}

export default App
