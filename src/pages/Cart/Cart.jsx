import React, { useState, useEffect } from 'react';
import '../../pages/Cart/Cart.css';
import CartHeader from '../../pages/Cart/CartHeader';
import CartList from '../../pages/Cart/CartList';
import CartTotal from '../../pages/Cart/CartTotal';
import { Link, useNavigate } from 'react-router-dom';


const Cart = ({ cart, convertPrice }) => {

    const navigate = useNavigate()
    // 상태 관리할 state 추가
    const [cartState, setCartState] = useState(cart);
    // 전체 선택 체크 여부 상태
    const [isAllChecked, setIsAllChecked] = useState(false);
    // 선택된 아이템 상태
    const [selectedItems, setSelectedItems] = useState([]);
    // 선택된 아이템의 합계 상태
    const [selectedItemsTotal, setSelectedItemsTotal] = useState(0);

    //HS 기존코드제거
    // 선택된 상품들의 final_price 합 상태 추가
    // 선택된 상품들의 합계들의 총합(결제금액) 상태 추가
    // *selectedItemsTotal: 선택된 항목의 총 가격을 저장
    //const [selectedTotal, setSelectedTotal] = useState(0);

    // HS 추가
    // 선택한 아이템의 합계를 업데이트하는 함수
    //updateTotal: 선택된 항목의 총 가격을 계산하고 업데이트
    const updateSelectedTotal = () => {
        const total = calculateSelectedTotal();
        setSelectedItemsTotal(total);
    };



    // 기존 : 카트 합계 상태 업데이트부분 -> useEffect 2개로 나누어서 수정
    // useEffect(() => {
    //     const total = calculateSelectedTotal();
    //     setSelectedItemsTotal(total);
    // }, [selectedItems, cart]);

    // const updateSelectedTotal = (total) => {
    //     setSelectedTotal(total);
    // };

    // HS수정 : 카트 합계 상태 업데이트부분을 -> useEffect 2개로 나누어서 수정
    // 1) 컴포넌트 마운트 후와 cart prop 변경 시 실행
    useEffect(() => {
        setCartState(cart);   // 카트 상태 업데이트
        updateSelectedTotal();
    }, [cart]);

    // 2) 선택된 아이템 변경 시 실행
    //selectedItems 배열이 변경될 때마다 선택된 항목의 총 가격을 업데이트
    useEffect(() => {
        updateSelectedTotal(); // 선택된 아이템이 변경될 때마다 합계 업데이트
    }, [selectedItems]);

    //HS 수정 - 기존 코드에 추가 및 제거
    //handleCheckAll: isAllChecked 상태를 토글하고 
    //selectedItems 배열을 그에 맞게 업데이트
    //handleCheckedbox 는 업데이트시 포함되므로 제거
    const handleCheckAll = () => {
        setIsAllChecked(!isAllChecked);
        const updatedSelectedItems = !isAllChecked ? cartState.map(item => item.id) : [];
        setSelectedItems(updatedSelectedItems);
    };

    // 수량 감소 -> 합계 변동- updateSelectedTotal(); 만 추가
    const onDecrease = (itemId) => {
        setCartState((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            )
        );
        updateSelectedTotal();
    };

    // 수량 증가 -> 합계 변동 - updateSelectedTotal(); 만 추가
    const onIncrease = (itemId) => {
        setCartState((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        updateSelectedTotal();
    };

    // 카트에 상품 추가하는 함수 - updateSelectedTotal(); 만 추가 :상품선택시 선택한 아이템들의 합계 업데이트
    const addToCart = (cartItem) => {
        setCartState((prevCart) => [...prevCart, cartItem]);
        updateSelectedTotal();
    };

    // HS 수정 : prevCart 를 updatedCart로 수정 (prevCart 이름 중복되서)
    // handleRemoveFromCart: ID를 기반으로 카트에서 항목을 제거하고 총 가격을 업데이트
    const handleRemoveFromCart = (itemId) => {
        const updatedCart = cartState.filter((item) => item.id !== itemId);
        setCartState(updatedCart);
        updateSelectedTotal();
    };

    // HS 코드제거
    // const handleCheckbox = (itemId) => {
    //     setSelectedItems((prevSelectedItems) => {
    //         if (prevSelectedItems.includes(itemId)) {
    //             return prevSelectedItems.filter((id) => id !== itemId);
    //         } else {
    //             return [...prevSelectedItems, itemId];
    //         }
    //     });
    // };

    //calculateSelectedTotal: 선택된 모든 항목의 총 가격을 계산
    const calculateSelectedTotal = () => {
        return selectedItems.reduce((total, itemId) => {
            const selectedItem = cartState.find(item => item.id === itemId);
            if (selectedItem) {
                return total + selectedItem.productPriceFormatted * selectedItem.quantity;
            }
            return total;
        }, 0);
    };

    // HS제거 : 카트 합계 상태 업데이트부분을 -> useEffect 2개로 나누어서 수정했으므로 제거
    // useEffect(() => {
    //     const total = calculateSelectedTotal();
    //     setSelectedItemsTotal(total);
    // }, [selectedItems, cart]);


    // HS 주문정보페이지 추가 : 주문 정보 저장 후, 결제페이지로 이동
    const handleCheckout = () => {
        navigate('/checkout')
    }



    return (
        <div className="Cart">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li title="현재 위치"> &gt; &nbsp; Cart</li>
                </ol>
            </div>
            <div className="title">
                <h2>CART</h2>
                <div className="txt_01">장바구니에 담긴 상품</div>
            </div>

            <CartHeader isAllChecked={isAllChecked} handleCheckAll={handleCheckAll} />

            <CartList
                cart={cartState} // 수정된 상태를 전달
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                handleAddToCart={addToCart} // 상품 추가 함수 전달
                handleRemove={handleRemoveFromCart} // 상품 제거 함수 전달
                convertPrice={convertPrice}
                selectedItems={selectedItems} // 선택된 아이템 전달
                setSelectedItems={setSelectedItems}
                updateSelectedTotal={updateSelectedTotal}// updateSelectedTotal 함수 전달
            />

            <CartTotal
                cart={cartState}
                convertPrice={convertPrice}
                selectedItems={selectedItems} // 선택된 아이템 리스트 전달
                selectedItemsTotal={selectedItemsTotal} // 선택된 아이템 합계 전달
                onCheckout={handleCheckout}
            />
        </div>
    );
};

export default Cart;