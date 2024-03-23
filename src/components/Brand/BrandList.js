import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Pagination from "../common/Pagination";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {brandActionList} from "../../actions/brandActions";

function BrandList(){
    const dispatch=useDispatch()
    const [curpage, setCurpage] = useState(1);
    const [ss,setSs]=useState('')

    useEffect(() => {
        dispatch(brandActionList(ss,curpage))

    }, [ss,curpage]);

    const list = useSelector((state)=>state.brands.brand_list.list)
    const totalpage=useSelector((state)=>state.brands.brand_list.totalpage)
    const startpage=useSelector((state)=>state.brands.brand_list.startpage)
    const endpage=useSelector((state)=>state.brands.brand_list.endpage)

    const changeSs=(event)=>{
        setSs(event.target.value)
        setCurpage('1')


    }
    const onPageChange = (page) => {
        setCurpage(page);
    };



    return (
        <div className={"container py-5"} >
            <div className={"row"} >
                <div className="row">

                    <div className="col-md-6 pb-4">
                        <div className="d-flex">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" id="inputModalSearch" name="q"
                                       placeholder="Search ..."

                                       value={ss}
                                       onChange={changeSs}

                                />
                                <button type="submit" className="input-group-text bg-success text-light">
                                    <i className="fa fa-fw fa-search text-white"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={"row"}>
                {list &&list.map((vo) =>
                    <div className="col-12 col-md-4 p-5 mt-3" style={{"borderTop": "1px gray solid"}}>
                        <img src="../assets/img/BrandImg.png" alt="" style={{"width": "100%", "height": "70%"}}
                             className="rounded-circle img-fluid border"/>
                        <h2 className="text-center mt-3 mb-3"
                            style={{"fontWeight": "bold", "color": "purple"}}>{vo.name}</h2>
                        <p className="text-center"><Link to={'/brand/detail/' + vo.bno} className="btn btn-success">Go
                            Shop</Link>
                        </p>
                    </div>
                )
                }
            </div>
            <div className="row">
                <Pagination curPage={curpage} totalPage={totalpage} startPage={startpage}
                            endPage={endpage} onPageChange={onPageChange}/>
            </div>

        </div>
    )
}

export default BrandList