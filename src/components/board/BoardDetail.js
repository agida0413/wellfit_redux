import {Fragment,useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {fetchBoardDetail} from "../../actions/boardActions";


function BoardDetail(){
    const {no}=useParams()

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchBoardDetail(no))
    },[])

    const detail=useSelector((state)=>state.boards.board_detail)
    return (
        detail &&
        <div className={"row"} style={{"margin-top":"20px"}}>
            <h3 className={"text-center"}>내용보기</h3>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td className={"text-center success"} width={"20%"}>번호</td>
                    <td className={"text-center"} width={"30%"}>{detail.no}</td>
                    <td className={"text-center success"} width={"20%"}>작성일</td>
                    <td className={"text-center"} width={"30%"}>{detail.regdate}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>이름</td>
                    <td className={"text-center"} width={"30%"}>{detail.name}</td>
                    <td className={"text-center success"} width={"20%"}>조회수</td>
                    <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                </tr>
                <tr>
                    <td className={"text-center success"} width={"20%"}>제목</td>
                    <td colSpan={"3"}>{detail.subject}</td>
                </tr>
                <tr>
                    <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                        <pre style={{"whiteSpace":"pre-wrap","backgroundColor":"white","border":"none"}}>{detail.content}</pre>
                    </td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={"4"}>
                        <Link to={"/board/update/"+no}
                              className={"btn btn-info btn-xs"}
                        >수정</Link>
                        <Link to={"/board/delete/"+no}
                              className={"btn btn-success btn-xs"}
                        >삭제</Link>
                        <Link to={"/board/list"}
                              className={"btn btn-warning btn-xs"}
                        >목록</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BoardDetail