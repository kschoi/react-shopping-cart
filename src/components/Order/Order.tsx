import * as React from 'react';
import { useState, useEffect, useReducer, createContext, useMemo } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProductsList from '../ProductList/ProductList';
import { any } from 'prop-types';

export const OrderContext = createContext({
    totalPrice: 0,
});

const initialState = {
    totalPrice: 0,
};

const reducer = (state: any, action: any) => {
    return {
        ...state,
    }
}

const initialProductListData = [
    { "price": 0, "mallName": "", "brandName": "", "name": [""], imgPath: [""] }
];

export interface IOrderProps {
}

export function Order (props: IOrderProps) {
    const [productListData, setProductListData] = useState(initialProductListData);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { totalPrice } = state;
    const value = useMemo(()=>({ totalPrice, dispatch }), [totalPrice]);

    useEffect(() => { // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
        console.log('tag: ProductsList 컴포넌트 렌더링');

        // ajax
        // fetch('')
        //     .then(res => res.json())
        //     .then(json => setProductListData((prevState) => [...prevState, ...json]));

        // sample data
        setProductListData((prevState)=>[
            ...prevState,
            { "price": 1000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["상품명1"], imgPath: ["http://item.ssgcdn.com/07/00/95/item/1000024950007_i1_140.jpg"] },
            { "price": 2000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["상품명2"], imgPath: ["http://item.ssgcdn.com/23/26/08/item/1000023082623_i1_140.jpg"] },
            { "price": 6000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["상품명3"], imgPath: ["http://item.ssgcdn.com/54/88/59/item/1000023598854_i1_140.jpg"] },
            { "price": 5000, "mallName": "이마트몰", "brandName": "브랜드명", "name": ["업셀링상품명1","업셀링상품명2","업셀링상품명3"], imgPath: ["http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg","http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg","http://item.ssgcdn.com/63/62/69/item/1000021696263_i1_140.jpg"] },
        ]);

        return () => { // componentWillUnmount 역할
            console.log('tag: ProductsList 컴포넌트 종료');
        }
    }, []);

    return (
        <OrderContext.Provider value={value}>
            <form onSubmit={(e)=>{}}>
                {productListData.length ? <ProductsList data={productListData} /> : <p>상품이 없습니다</p>}
                <Toolbar count={0} deliveryCharge={0} totalPrice={totalPrice} />      
            </form>
        </OrderContext.Provider>
    );
}

export default Order;

