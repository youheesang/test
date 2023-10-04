import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/Header/Header.css';
import Modal from '../Modal/Modal';

function Header() {

    const handleLinkClick = () => {
        alert('해당 페이지는 현재 준비중 입니다.');
    };

    const generateToLink = (category) => {
        const CATEGORY_PATHS = {
            'New': '/ProductList/New',
            'Best': '/ProductList/Best',
            '침대': '/ProductList/Bed',
            '소파': '/ProductList/Sofa',
            '책장': '/ProductList/Bookshelf',
            '옷장': '/ProductList/Closet',
            '조명': '/ProductList/Lighting',
            '의자': '/ProductList/Chair',
            // 나머지 카테고리에 대한 경로도 추가해주세요
        };
        return CATEGORY_PATHS[category] || '#';
    };


    return (
        <>
            <header className='header'>
                {/* <Link to="/qna" className="mtalk"><img src="/images/mtalk_icon.png" alt="mtalk" /></Link> */}
                <a id="chat-channel-button" href="javascript:chatChannel()" className="mchannel"><img src="/images/mchannel_icon.png" alt="카카오톡 채널 채팅하기 버튼" /></a>
                <div id="mheader">
                    {/*---------------------------------------------------------*/}
                    {/* header */}
                    <div>
                        {/* 상단 로고 */}
                        <div>
                            <Link to="/"><img className="logo" src="/images/ojoa_logo_b.png" alt="logo"/></Link>
                        </div>
                        <div className="search">
                            <Modal />
                        </div>
                        {/* 상단 네비 */}
                        <div className="navBar">
                            <ul>
                                <li><Link to="../Login">LOGIN </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../MyPage">MYPAGE </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Order">ORDER </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Cart">CART </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Qna">QNA </Link>&nbsp;<span>|</span></li>
                                <li><Link to="../Store">STORE </Link></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                </div>
            </header>
            {/*---------------------------------------------------------*/}
            {/* category_navi_drop_bar */}
            <div className="sticky" id="category_nav">
                <ul>
                    <li><Link to={generateToLink("Best")}>BEST</Link></li>
                    <li><Link to={generateToLink("New")}>NEW</Link></li>
                    {/* <li><Link to="/ProductList/NewList">NEW</Link></li> */}
                    <li><Link to='/ProductList/Bed'>침대</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>싱글</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>더블</Link></li>
                        </ul>
                    </li>
                    <li><Link to={generateToLink("소파")}>소파</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>2인</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>3인</Link></li>
                        </ul>
                    </li>
                    <li><Link to={generateToLink("책장")}>책장</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>2단</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>3단</Link></li>
                        </ul>
                    </li>
                    <li><Link to={generateToLink("옷장")}>옷장</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>2칸</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>3칸</Link></li>
                        </ul>
                    </li>
                    <li><Link to={generateToLink("조명")}>조명</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>스탠드형</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>탈부착형</Link></li>
                        </ul>
                    </li>
                    <li><Link to={generateToLink("의자")}>의자</Link>
                        <ul>
                            <li><Link to="#" onClick={handleLinkClick}>탁상의자</Link></li>
                            <li><Link to="#" onClick={handleLinkClick}>주방의자</Link></li>
                        </ul>
                    </li>
                </ul>

            </div>

        </>
    );
};

export default Header;