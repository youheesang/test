import React, { useContext, createContext, useReducer, useRef, useState } from "react";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";
import Pagination from "../../components/Pagination/Pagination";
import PLFilter from "./PLFilter";
import { Link } from "react-router-dom";
import mockList from '../../data/ItemsData'
import Modal from 'react-modal';
// import AddCart from './Modal/AddCart';




function sortProducts(products, sortKey) {
    switch (sortKey) {
        case "신상품":
            return products.slice().sort((a, b) => b.id - a.id);
        case "상품명":
            return products.slice().sort((a, b) => a.productName.localeCompare(b.productName));
        case "낮은가격":
            return products.slice().sort((a, b) => parseFloat(a.productPriceFormatted.replace(/,/g, "")) - parseFloat(b.productPriceFormatted.replace(/,/g, "")));
        case "높은가격":
            return products.slice().sort((a, b) => parseFloat(b.productPriceFormatted.replace(/,/g, "")) - parseFloat(a.productPriceFormatted.replace(/,/g, "")));
        case "사용후기":
            return products.slice().sort((a, b) => parseInt(b.productReview) - parseInt(a.productReview));
        case "Best": // 새로 추가한 BEST 카테고리 정렬 (별점높은순)
            return products.slice().sort((a, b) => parseFloat(b.productGrade) - parseFloat(a.productGrade));
        case "New": // 새로 추가한 New 카테고리 정렬 (각 타입별 id의 숫자가 높은 순으로-2개)
            return products.slice().sort((a, b) => parseFloat(b.productGrade) - parseFloat(a.productGrade));
        default:
            return products.slice().sort((a, b) => a.id - b.id);
    }
}


//카테고리 : 의자
function Chair({ cart, setCart, handleCart }) {
    const chair_filter = mockList.filter((chair) => chair.type === 'chair');

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(chair_filter, sortKey);


    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
            {/* <CategoryIndex content={content} cart={cart} setCart={setCart} >
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}></Link>
            </CategoryIndex> */}
        </li>
    ));


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;의자</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>CHAIR</h2>
                <div className="txt_01">의자 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />

            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )

}; //Chair

const Bed = ({ cart, setCart, handleCart }) => {

    const bed_filter = mockList.filter((bed) => bed.type === 'bed');

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(bed_filter, sortKey);


    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
            {/* <CategoryIndex content={content} cart={cart} setCart={setCart} >
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}></Link>
            </CategoryIndex> */}
        </li>
    ));


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;침대</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>BED</h2>
                <div className="txt_01">침대 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />

            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )
}; //Bed

const Sofa = ({ cart, setCart, handleCart }) => {

    const sofa_filter = mockList.filter((sofa) => sofa.type === 'sofa');

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(sofa_filter, sortKey);


    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
            {/* <CategoryIndex content={content} cart={cart} setCart={setCart} >
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}></Link>
            </CategoryIndex> */}
        </li>
    ));


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;소파</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>SOFA</h2>
                <div className="txt_01">소파 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />

            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )
}; //Sofa

const Bookshelf = ({ cart, setCart, handleCart }) => {

    const bookshelf_filter = mockList.filter((bookshelf) => bookshelf.type === 'bookshelf');

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(bookshelf_filter, sortKey);


    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
            {/* <CategoryIndex content={content} cart={cart} setCart={setCart} >
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}></Link>
            </CategoryIndex> */}
        </li>
    ));


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;책장</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>BOOKSHELF</h2>
                <div className="txt_01">책장 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />

            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )
}; //Bookshelf

const Closet = ({ cart, setCart, handleCart }) => {

    const closet_filter = mockList.filter((closet) => closet.type === 'closet');

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(closet_filter, sortKey);


    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
            {/* <CategoryIndex content={content} cart={cart} setCart={setCart} >
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}></Link>
            </CategoryIndex> */}
        </li>
    ));


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;옷장</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>CLOSET</h2>
                <div className="txt_01">옷장 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />

            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )
}; //Closet

const Lighting = ({ cart, setCart, handleCart }) => {

    const lighting_filter = mockList.filter((lighting) => lighting.type === 'lighting');

    const [sortKey, setSortKey] = useState(""); // 초기 정렬 기준: 신상품


    const sortedList = sortProducts(lighting_filter, sortKey);


    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
            {/* <CategoryIndex content={content} cart={cart} setCart={setCart} >
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}></Link>
            </CategoryIndex> */}
        </li>
    ));


    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;조명</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>LIGHTING</h2>
                <div className="txt_01">조명 전체 상품</div>
            </div>
            <PLFilter numOfList={sortedList.length} setSortKey={setSortKey} />

            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )
}; //Closet

// Best 추가
const Best = ({ cart, setCart, handleCart }) => {
    // 모든 상품 목록에서 Best 상품만 필터링
    const bestProducts = mockList.filter((product) => parseFloat(product.productGrade) >= 4.8);

    // Best 상품을 등급 기준으로 정렬
    const sortedList = bestProducts.sort((a, b) => parseFloat(b.productGrade) - parseFloat(a.productGrade));

    const singleLi = sortedList.map((content) => (
        <li key={content.id}>
            <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                    {content.productName}
                </Link>
            </ProductListItem>
        </li>
    ));

    return (
        <div className="ProductList">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li><Link to="/">홈</Link></li>
                    <li title="현재 위치">&gt; &nbsp;&nbsp;BEST</li>
                </ol>
            </div>
            <div className="pageTlt">
                <h2>BEST</h2>
                <div className="txt_01">BEST 상품 전체 목록</div>
            </div>
            <ul className="pl_items">{singleLi}</ul>

            <Pagination />
        </div>

    )
}; //Best


// New 추가
const New = ({ cart, setCart, handleCart }) => {
        // 각 타입별로 id의 숫자가 큰 아이템 2개씩 선택
        const newProducts = [
            ...mockList.filter((product) => product.type === 'chair').slice(0, 2),
            ...mockList.filter((product) => product.type === 'bed').slice(0, 2),
            ...mockList.filter((product) => product.type === 'sofa').slice(0, 2),
            ...mockList.filter((product) => product.type === 'bookshelf').slice(0, 2),
            ...mockList.filter((product) => product.type === 'closet').slice(0, 2),
            ...mockList.filter((product) => product.type === 'lighting').slice(0, 2),
        ];
    
        // "New" 카테고리 정렬 (각 타입별로 id의 숫자가 큰 순서)
        const sortedList = newProducts.sort((a, b) => b.id - a.id);
    
        const singleLi = sortedList.map((content) => (
            <li key={content.id}>
                <ProductListItem content={content} cart={cart} setCart={setCart} handleCart={handleCart}>
                    <Link className="productLink" to={`/products/detail/${content.id}`} key={content.id}>
                        {content.productName}
                    </Link>
                </ProductListItem>
            </li>
        ));
    
        return (
            <div className="ProductList">
                <div className="path">
                    <span>현재 위치</span>
                    <ol>
                        <li><Link to="/">홈</Link></li>
                        <li title="현재 위치">&gt; &nbsp;&nbsp;NEW</li>
                    </ol>
                </div>
                <div className="pageTlt">
                    <h2>NEW</h2>
                    <div className="txt_01">NEW 상품 전체 목록</div>
                </div>
                <ul className="pl_items">{singleLi}</ul>
    
                <Pagination />
            </div>
        );
    }; // New



export { Chair, Bed, Sofa, Closet, Bookshelf, Lighting, Best, New };