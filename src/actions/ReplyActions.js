import axios from "axios";
import {FETCH_REPLY_DELETE, FETCH_REPLY_INSERT, FETCH_REPLY_NORMAL_LIST, FETCH_REPLY_UPDATE} from "./type";

export const replyNoramlAction = (curpage, pno) => (dispatch) => {
    axios.get('http://localhost/cloth/replyList', {
        params: {
            page: curpage,
            pno: pno
        }
    })
        .then(response => {
            dispatch({
                type: FETCH_REPLY_NORMAL_LIST,
                payload: response.data
            });
        })
        .catch(error => {
            // 에러 처리

        });
};

export const replyInsert = (content, userid, username, pno) => (dispatch) => {
    let formData = new FormData();

    formData.append('content', content);
    formData.append('userid', userid);
    formData.append('username', username);
    formData.append('pno', pno);

    axios.post('http://localhost/cloth/replyInsert', formData)
        .then(response => {
            dispatch({
                type: FETCH_REPLY_INSERT,
                payload: response.data
            });


            dispatch(replyNoramlAction(1, pno));
        })
        .catch(error => {
            // 에러 처리
            console.error('댓글 추가 중에 오류가 발생했습니다:', error);
        });
};
export const replyDeleteAction = (rno,pno) => (dispatch) => {

    axios.post('http://localhost/cloth/replyDelete',null, {
        params: {
            rno:rno
        }
    })
        .then(response => {
            dispatch({
                type: FETCH_REPLY_DELETE,
                payload: response.data
            });

            dispatch(replyNoramlAction(1, pno));
        })
        .catch(error => {
            // 에러 처리
          console.log('댓글 삭제 실패')
        });
};



export const replyUpdateAction = (rno,content,pno,curpage) => (dispatch) => {
    let formData = new FormData();

    formData.append('rno', rno);
    formData.append('content',content)

    axios.post('http://localhost/cloth/replyUpdate',formData
    )
        .then(response => {
            dispatch({
                type: FETCH_REPLY_UPDATE,
                payload: response.data
            });

            dispatch(replyNoramlAction(curpage, pno));
        })
        .catch(error => {
            // 에러 처리
            console.log('댓글 수정 실패')
        });
};