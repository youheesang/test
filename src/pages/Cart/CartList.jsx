import '../../pages/Cart/Cart.css';
import React, { useState, useEffect } from "react";
// import { NavLink, Routes, Route, useParams, Link } from "react-router-dom"



// HS 수정 : updateSelectedTotal 제거
const CartList = ({ cart, onDecrease, onIncrease, handleRemove, convertPrice, selectedItems, setSelectedItems }) => {

    const handleCheckboxChange = (itemId) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(itemId)) {
                // 이미 선택되었던 아이템을 선택 해제
                return prevSelectedItems.filter(id => id !== itemId);
            } else {
                // 새로운 아이템을 선택
                return [...prevSelectedItems, itemId];
            }
        });
    };



    return (
        <div className="CartListAll">
            {/* 장바구니에 있는 각 상품을 매핑하며 표시 */}
            {cart.map((item) => (
                <div className="CartList">
                    <table className="list_detail">
                        <tbody>
                            <tr key={item.id}>
                                <td>

                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />

                                </td>

                                <td><img className="cart_img" src={`/thumbs/${item.imgNo}_1.jpg`} alt={`Product ${item.productName}`} /></td>
                                <td>
                                    <div className="cart_mininame">[{item.productInfo}]</div>
                                    <td><a className="cart_mainname" href="#">{item.productName}</a></td>
                                </td>
                                <td className="cart_saleprice">
                                    <sup>{item.productPromotion}&#37;&#8595;</sup>
                                    <div className="cart_li_price">{convertPrice(item.productPriceFormatted)}원</div>
                                </td>
                                <td>
                                    <div className="cart_product_count">
                                        <img
                                            className="minus"
                                            src={"../images/newminus.png"}
                                            alt="minus"
                                            onClick={() => onDecrease(item.id)}
                                        />
                                        <div className="count">
                                            <span>{item.quantity}</span>
                                        </div>
                                        <img
                                            className="plus"
                                            src={"../images/newplus.png"}
                                            alt="plus"
                                            onClick={() => onIncrease(item.id)}
                                        />
                                    </div>
                                </td>
                                <td>무료배송</td>
                                <td className="final_price">
                                    {convertPrice((item.productPriceFormatted) * item.quantity)}원
                                    <img
                                        src={"/images/cancel.png"}
                                        alt="delete"
                                        onClick={() => handleRemove(item.id)}
                                        className="product_remove"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default CartList;