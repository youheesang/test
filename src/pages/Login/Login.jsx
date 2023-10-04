import '../Login/Login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FindIdModal from './FindIdModal/FindIdModal';
import FindPasswordModal from './FindPasswordModal/FindPasswordModal';



const Login = () => {
    const [findIdModalVisible, setFindIdModalVisible] = useState(false);
    const [findPasswordModalVisible, setFindPasswordModalVisible] = useState(false);

    function showFindIdModal() {
        setFindIdModalVisible(true);
    }
    function showFindPasswordModal() {
        setFindPasswordModalVisible(true);
    }

    // 클릭버튼 handle
    // const handleNaverClick = () => {
    //     const naverLoginButton = document.getElementById(
    //         "naverIdLogin_loginButton"
    //     );
    //     if (naverLoginButton) naverLoginButton.click();
    // };

    return (
        <div>
            {findIdModalVisible && <FindIdModal setModalVisible={setFindIdModalVisible} />}
            {findPasswordModalVisible && <FindPasswordModal setModalVisible={setFindPasswordModalVisible} />}

            {/* <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script> */}

            <div className="login_path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치"> &gt; Login</li>
                </ol>
            </div>
            <div className="login_title">
                <h2>LOGIN</h2>
                <div className="txt_01">회원만의 혜택을 경험하세요</div>
            </div>
            <main className="login_page">
                <div className="login_container">
                    <form action="">
                        <div className="login_content">
                            <div className="login">
                                <fieldset className="login_fieldset">
                                    <legend>회원로그인</legend>
                                    <label className="login_id">
                                        <span><img src="../images/account.png" alt="아이디" />
                                            <Link to="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"> </Link>
                                        </span>
                                        <input type="text" name="userID" placeholder="아이디" minLength="3" />
                                    </label>
                                    <label className="login_password">
                                        <span><img src="../images/password.png" alt="비밀번호" /></span>
                                        <input type="password" name="userPSW" placeholder="비밀번호" minLength="3" />
                                    </label>
                                    <div className="login_btn">
                                        <Link to="../my_page/my_page.html">로그인</Link>
                                    </div>
                                    <div className="login_security">
                                        <img src="../images/ico_access.gif" alt="보안접속" />
                                        &quot;보안접속&quot;
                                    </div>
                                    <div className="login_forget">
                                        <label>
                                            <input type="checkbox" />아이디 기억하기
                                        </label>
                                    </div>
                                    <div className="login_find">
                                        <ul>
                                            <li>
                                                <button type="button" onClick={showFindIdModal}>아이디찾기</button>
                                            </li>
                                            <li>&nbsp;|&nbsp;</li>
                                            <li>
                                                <button type="button" onClick={showFindPasswordModal}>비밀번호찾기</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="login_cboth"></div>


                                    {/* <div onClick={handleNaverClick}><img src="../images/btn_naver_login.gif" alt='네이버로그인' /></div>
                                    <div id="naverIdLogin" style={{ display: "none" }} /> */}

                                    <div className="login_sns">
                                        <p className="sns">
                                            <Link to="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/" target="_blank"><img src="../images/btn_naver_login.gif" alt='네이버로그인' /></Link>
                                        </p>
                                        <p className="sns">
                                            <Link to="http://www.facebook.com/" target="_blank"><img src="../images/btn_facebook_login.gif" alt='페이스북로그인' /></Link>
                                        </p>
                                        <p className="sns">
                                            <Link to="https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo#login" target="_blank"><img src="../images/btn_kakao_login.gif" alt='카카오톡로그인' /></Link>
                                        </p>
                                    </div>
                                    <div className="login_cboth"></div>
                                </fieldset>
                            </div>
                            <div className="login_join">
                                <div className="login_join_area">
                                    <div className="login_join_title">회원가입</div>
                                    &quot;아직 회원이 아니십니까?&quot;
                                    <br />
                                    &quot;회원을 위한 다양한 혜택이 준비되어 있습니다.&quot;
                                </div>
                                <div className="login_join_btn">
                                    <Link to="/login/info">회원가입</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
            <hr className="layout" />
        </div>
    ); //return
} //Login

export default Login;