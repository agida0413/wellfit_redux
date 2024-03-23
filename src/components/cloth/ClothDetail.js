import { Link, useParams } from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { cloth_detail } from "../../actions/clothActions";
import {replyDeleteAction, replyInsert, replyNoramlAction, replyUpdateAction} from "../../actions/ReplyActions";
import Pagination from "../common/Pagination";


function ClothDetail() {
    const { pno } = useParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch();
    const [curpage,setCurpage]=useState(1)
    const [content,setContent]=useState('')
    const [editIndex, setEditIndex] = useState(-1); // 수정 중인 댓글의 인덱스를 저장하는 상태
    const [id,setId]=useState('')
    const [upContent,setUpcontent]=useState('')
    useEffect(() => {

        dispatch(cloth_detail(pno));
        dispatch(replyNoramlAction(curpage,pno))

        const sid = sessionStorage.getItem('sid');
        const sname = sessionStorage.getItem('sname');
        if (sid && sname) {
            setIsLoggedIn(true);
            setUserName(sname);
            setId(sid)

        }

    }, [pno,curpage]);

    const changeContent=(event)=>{

        setContent(event.target.value)
        setCurpage('1')

    }

    const changeUpdateContent=(event)=>{
        setUpcontent(event.target.value)
    }


    const insertSubmit=()=>{

        dispatch(replyInsert(content, id, userName, pno))
        setContent('')



    }

    const deleteSubmit=(rno)=>{

        dispatch(replyDeleteAction(rno,pno))
    }

    const updateReply=(rno,index)=>{
        dispatch(replyUpdateAction(rno,upContent,pno,curpage))
        toggleEdit(index)
    }
    const onPageChange = (page) => {
        setCurpage(page);
    };

    const toggleEdit = (index) => {
        setEditIndex(editIndex === index ? -1 : index); // 현재 수정 중인 댓글이면 -1로 초기화하고 아니면 해당 댓글의 인덱스로 설정
        setUpcontent('')
    };
    const vo = useSelector((state) => state.cloths.cloth_detail.vo);
    const cList = useSelector((state) => state.cloths.cloth_detail.cList);
    const reply_list=useSelector((state)=>state.replys.reply_normal.list)
    const totalpage=useSelector((state)=>state.replys.reply_normal.totalpage)
    const startpage=useSelector((state)=>state.replys.reply_normal.startpage)
    const endpage=useSelector((state)=>state.replys.reply_normal.endpage)



    return (
        <Fragment>
            <div>
                {vo && (
                    <section className="bg-light">
                        <div className="container pb-5">
                            <div className="row">
                                <div className="col-lg-5 mt-5">
                                    <div className="card mb-3">
                                        <img
                                            className="card-img img-fluid"
                                            src={vo.image}
                                            alt="Card image cap"
                                            id="product-detail"
                                            style={{ height: "530px" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-7 mt-5">
                                    <div className="card">
                                        <div className="card-body">
                                            <h1 className="h2">{vo.name}</h1>
                                            <p className={"card-text"}>
                                <span style={{ color: "red", fontStyle: "italic" }}>
                                    {vo.hit} hit
                                </span>
                                            </p>
                                            <p className="card-text">
                                <span style={{ textDecoration: "line-through", color: "gray" }}>
                                    {vo.originalprice}
                                </span>
                                            </p>
                                            <p className="card-text">
                                <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                                    {vo.nowprice}
                                </span>
                                            </p>
                                            <p className="py-2">
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-warning"></i>
                                                <i className="fa fa-star text-secondary"></i>
                                                <span className="list-inline-item text-dark"></span>
                                            </p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <h6>Brand:</h6>
                                                </li>
                                                <li className="list-inline-item">
                                                    <p className="text-muted">
                                                        <Link to={"/brand/detail/" + vo.bno}>
                                            <span style={{ color: "black", fontWeight: "bold" }}>
                                                {vo.brand}
                                            </span>
                                                        </Link>
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <h6>sex : </h6>
                                                </li>
                                                <li className="list-inline-item">
                                                    <p className="text-muted">
                                                        <strong style={{ fontWeight: "bold" }}>{vo.sex}</strong>
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <h6>Category :</h6>
                                                </li>
                                                <li className="list-inline-item">
                                                    <p className="text-muted">
                                                        <strong style={{ fontWeight: "bold" }}>{vo.category}</strong>
                                                    </p>
                                                </li>
                                            </ul>
                                            <div className="row pb-3">
                                                <div className="col d-grid">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success btn-lg"
                                                        name="submit"
                                                        value="buy"
                                                    >
                                                        Buy
                                                    </button>
                                                </div>
                                                <div className="col d-grid">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-success btn-lg"
                                                        name="submit"
                                                        value="addtocard"
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                </div>
            <section className="py-5">
                <div className="container">
                    <div className="row text-left p-2 pb-3">
                        <h4>Related Products</h4>
                    </div>
                    <div id="carousel-related-product">
                        <div className="row">
                            {cList &&
                                cList.map((cvo) => (
                                    <div className="col-3" key={cvo.pno}>
                                        <div className="p-2 pb-3">
                                            <div className="product-wap card rounded-0">
                                                <div className="card rounded-0">
                                                    <img
                                                        className="card-img rounded-0 img-fluid"
                                                        src={cvo.image}
                                                        alt="Product"
                                                    />
                                                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <Link className="btn btn-success text-white" to="/shop-single">
                                                                    <i className="far fa-heart"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="btn btn-success text-white mt-2" to="/shop-single">
                                                                    <i className="far fa-eye"></i>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link className="btn btn-success text-white mt-2" to="/shop-single">
                                                                    <i className="fas fa-cart-plus"></i>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <span className="h3 text-decoration-none text-ellipsis">
                                                        <Link
                                                            to={"/cloth/detail/" + cvo.pno}
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            {cvo.name}
                                                        </Link>
                                                    </span>
                                                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                                                        <li>M/L/X/XL</li>
                                                        <li className="pt-2">
                                                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                                                        <li>
                                                            <i className="text-warning fa fa-star"></i>
                                                            <i className="text-warning fa fa-star"></i>
                                                            <i className="text-warning fa fa-star"></i>
                                                            <i className="text-muted fa fa-star"></i>
                                                            <i className="text-muted fa fa-star"></i>
                                                        </li>
                                                    </ul>
                                                    <p className="text-center mb-0">
                                                        <span style={{ textDecoration: "line-through", color: "gray" }}>
                                                            {cvo.originalprice}
                                                        </span>
                                                        <span
                                                            style={{
                                                                color: "red",
                                                                fontStyle: "italic",
                                                                marginLeft: "10px",
                                                            }}
                                                        >
                                                            {cvo.hit} hit
                                                        </span>
                                                    </p>
                                                    <p className="text-center mb-0 ">
                                                        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                                                            {cvo.nowprice}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            <table className={"table"}>
                                <thead>
                                <tr style={{ width: "100%" }}>
                                    <th colSpan={2}><span style={{fontSize: "40px"}}>댓글</span></th>
                                </tr>
                                <tr></tr>
                                </thead>

                                {
                                    reply_list && reply_list.map((vo, index) =>
                                        <tbody key={index}>
                                        <tr style={{ width: "100%" }}>
                                            <td align="left" style={{borderBottom: "none"}} >
                                                  <span>
                                                    <img src="/assets/img/ikmyung.png" width="20px"/>
                                                  </span>
                                                <span
                                                    style={{marginLeft: "10px"}}>{`${vo.username} ( ${vo.regdate} )`}</span>
                                            </td>

                                        </tr>

                                        <tr style={{ width: "100%" }}>
                                            <td>
                                                {editIndex === index ? (

                                                    <div>
                                            <textarea
                                                style={{resize: "none"}}
                                                cols={80}
                                                rows={3}
                                                defaultValue={vo.content}
                                                onChange={changeUpdateContent}
                                            ></textarea>
                                                        <span style={{marginLeft:"15px"}}>
                                                        <span style={{marginRight:"5px"}}><button className={"btn btn-sm btn-info"} onClick={()=>updateReply(vo.rno,index)}>수정</button></span>
                                                            <span><button className={"btn btn-sm btn-danger"} onClick={() => toggleEdit(index)}>취소</button></span>
                                                            </span>
                                                    </div>
                                                ) : (

                                                    <div>
                                                        {vo.content}

                                                        { id === vo.userid && (
                                                            <span style={{ float: "right" }}>
                                                            <span style={{ marginRight: "5px" }}>
                                                                <button
                                                                    className={"btn btn-sm btn-primary"}
                                                                    onClick={() => toggleEdit(index)}
                                                                >
                                                                    수정
                                                                </button>
                                                            </span>
                                                            <span>
                                                                <button className={"btn btn-sm btn-danger"} onClick={() => deleteSubmit(vo.rno)}>삭제</button>
                                                            </span>
                                                        </span>
                                                        )}

                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        </tbody>

                                    )

                                }

                                {isLoggedIn &&
                                    <>
                                        <thead>
                                        <tr style={{ width: "100%" }}>
                                            <th style={{border: "none"}}>새 댓글 작성</th>
                                        </tr>
                                        </thead>


                                        <tbody>

                                        <tr style={{ width: "100%" }}>
                                            <td style={{border: "none"}} width={"50%"}>
                                                <textarea style={{resize: "none"}} cols={100} rows={3}
                                                          onChange={changeContent}
                                                          value={content}
                                                ></textarea>
                                            </td>
                                            <td style={{border: "none", verticalAlign: "bottom"}}>
                                                <span style={{float:"left"}}>
                                                <button className={"btn btn-lg btn-info"} onClick={insertSubmit}>작성
                                                </button></span>
                                            </td>

                                        </tr>
                                        </tbody>
                                    </>
                                }
                                <tr>
                                    <Pagination curPage={curpage} totalPage={totalpage} startPage={startpage}
                                                endPage={endpage} onPageChange={onPageChange}/>
                                </tr>
                            </table>
                                <div className="row">

                                </div>


                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default ClothDetail;
