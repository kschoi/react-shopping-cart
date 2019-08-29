import React from 'react';
import { useState, useEffect, useCallback } from 'react';

interface IProductItemProps {
    data: {
        price: number;
        mallName: string;
        brandName: string;
        name: string[];
        imgPath: string[];
    };
}

const ProductItem: React.FC<IProductItemProps> = ({ data }) => {
    const [qty, setQty] = useState(1);

    useEffect(() => { // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
        console.log('tag: ProductItem 컴포넌트 렌더링');
        return () => { // componentWillUnmount 역할
            console.log('tag: ProductItem 컴포넌트 종료');
        }
    }, []);

    const add = useCallback(() => {
        setQty(qty + 1);
    }, [qty]);

    const subtract = useCallback(() => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }, [qty]);

    return (
        <li>
            <div>
                {data.imgPath.map((v, i) => <img key={i} src={v} alt="상품 이미지" /> )}
            </div>
            <div className="aaa">
                <p>{data.mallName}</p>
                <p>{data.brandName}</p>
                <div>
                    {data.name.map((v, i) => (<p key={i}>{v}</p>) )}
                </div>
                <p>{data.price}</p>
                <button className="" onClick={subtract}>-</button>
                {qty}
                <button className="" onClick={add}>+</button>

            </div>
        </li>
    );
}

export default ProductItem;


