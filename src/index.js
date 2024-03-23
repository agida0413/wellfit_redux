import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/main/Header";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import BrandList from "./components/Brand/BrandList";
import {Provider} from "react-redux";
import store from "./store/store";
import ClothList from "./components/cloth/ClothList";
import ClothDetail from "./components/cloth/ClothDetail";
import BrandDetail from "./components/Brand/BrandDetail";
import {BoardList} from "./components/board/BoardList";
import BoardInsert from "./components/board/BoardInsert";
import BoardDetail from "./components/board/BoardDetail";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <Router>

        <Header/>


        <div className={"container"}>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/brand/list"} element={<BrandList/>}/>
                <Route exact path={"/cloth/list"} element={<ClothList/>}/>
                <Route exact path={"/cloth/detail/:pno"} element={<ClothDetail/>}/>
                <Route exact path={"/brand/detail/:bno"} element={<BrandDetail/>}/>
                <Route path={"/board/list"} element={<BoardList/>}/>
                <Route path={"/board/insert"} element={<BoardInsert/>}/>
                <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
                <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>

            </Routes>
        </div>
        <Footer/>


    </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
