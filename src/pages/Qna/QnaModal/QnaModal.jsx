import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import mockList from "../../../data/ItemsData";
import { TodoDispatchContext } from "../Qna";
import { useModal } from "../QnaModal/ModalContext";
import "./QnaModal.css";

function QnaModal({ closeModal }) {

    const [content, setContent] = useState("");
    // => new 일정 처리할  onChangeContent 이벤트 핸들러 
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }; //onChangeContent

    const onSubmit = (e) => {
        e.preventDefault();
        closeModal(false);
    };


    // const onKeyDown = (e) => {
    //     if (e.keyCode === 13) { onSubmit(); }
    // }; //onKeyDown


    return (

        <div id="QnaModal_Background">
            <div className="qnaModal_container2">
                <img
                    onClick={() => {
                        closeModal(); // 모달 닫기
                    }}
                    className="qnaModal_btn_close"
                    src="../images/search_X.png"
                    alt="search_x"
                />
            </div>



            {/* 내부 글쓰기 */}
            <div className="path">
                <div>
                    <div className='qna_writeArea'>
                        <h2>Q & A</h2>
                    </div>


                    <form className="qna_write_info" action="" method="post">
                        <table className="qna_board_table">
                            <caption className="qna_writename">자유게시판 글쓰기</caption>
                            <tbody>
                                <tr>
                                    <th scope="row"><label htmlFor="qna_bID">작성자</label></th>
                                    <td className="qna_writeid">
                                        <input
                                            type="text"
                                            name="bID"
                                            id="qna_bID"
                                            onChange={onChangeContent}
                                            placeholder="작성자명을 입력하세요." />
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row"><label htmlFor="board_category1">구  분</label></th>
                                    <td className="qna_writetitle">
                                        <select name="board_category" id="board_category1">
                                            <option value="1">전체</option>
                                            <option value="2">상품문의</option>
                                            <option value="3">배송문의</option>
                                            <option value="4">주문/결제</option>
                                            <option value="5">취소문의</option>
                                            <option value="6">반품/교환</option>
                                            <option value="7">환불문의</option>
                                            <option value="8">재입고문의</option>
                                            <option value="9">기타문의</option>
                                            <option value="10"></option>
                                        </select>
                                        <select name="board_category" id="board_category2">
                                            <option>제품목록</option>
                                            {mockList.map((item) => (
                                                <React.Fragment key={item.id}>
                                                    <option value={item.imgNo}>{item.productName}</option>
                                                </React.Fragment>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><label htmlFor="qna_bTitle">제  목</label></th>
                                    <td className="qna_writetitle">
                                        {/*<input type="text" name="bTitle" id="qna_bTitle" ref={inputRef} value={content} onChange={onChangeContent} placeholder="제목을 입력하세요." />*/}
                                        <input
                                            type="text"
                                            name="bTitle"
                                            id="qna_bTitle"
                                            placeholder="제목을 입력하세요." />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"><label htmlFor="qna_bContent">내  용</label></th>
                                    <td className="qna_write_content">
                                        <input
                                            type="text"
                                            name="bContent"
                                            id="qna_bContent"
                                            placeholder="내용을 입력하세요." />
                                    </td>
                                </tr>
                                {/* <tr>
                                    <th scope="row"><label htmlFor="qna_bPassword">비밀번호</label></th>
                                    <td className="qna_writepassword"><input type="text" name="bPassword" id="qna_bPassword" /></td>
                                </tr> */}
                            </tbody>
                        </table>
                        <div className="qna_btnSet">
                            <a
                                type="button"
                                onClick={onSubmit}
                                className="qna_writesubmit_btn">
                                등록하기</a>
                        </div>
                        <div className="qna_btnSet_cancle">
                            <buttoen
                                type="button"
                                onClick={() => { closeModal(false); }}
                                className="qna_writeback_btn">
                                취소하기
                            </buttoen>
                        </div>
                    </form >
                </div>
            </div >
        </div > //QnaModal_Background
    );
}

export default QnaModal;