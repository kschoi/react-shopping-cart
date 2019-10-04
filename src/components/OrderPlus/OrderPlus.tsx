import React, { StatelessComponent, ButtonHTMLAttributes } from 'react';
import './OrderPlus.scss';

import OrderPlusItem from './OrderPlusItem';

interface OrderPlusProps {
}

interface OrderPlusState {
    items : OrderPlusItemState[]
}

interface OrderPlusItemState {
    key : number,
    mallName? : string,
    delivType? : string,
    desc1? : string,
    desc2? : string,
    desc3? : string
    disabled? : boolean,
    newOrder? : boolean,
    checked? : boolean,
    onClick?(id : number) : void
}

class OrderPlus extends React.Component<OrderPlusProps, OrderPlusState> {

    id = 0;
    state: OrderPlusState = {
        items : [
            {
                key : this.id++,
                mallName : "이마트몰",
                delivType : "쓱배송 투모로우",
                desc1 : "04.20 토요일 10:00 ~ 13:00 배송",
                desc2 : "04.20 토요일",
                desc3 : "05:00 까지 주문",
                checked : true
            },
            {
                key : this.id++,
                mallName : "트레이더스",
                delivType : "쓱배송",
                desc1 : "04.20 토요일 10:00 ~ 13:00 배송",
                desc2 : "주문더하기를 이미 하셨습니다.",
                disabled : true
            },
            {
                key : this.id++,
                newOrder : true
            }
        ]
    };

    onClick(key: number) : void {
        const {items} = this.state;
        items.map( item => {
            item.key === key ? item.checked = true : item.checked = false;
        });
        this.setState({
            items
        })
    };

    render() {
        const {items} = this.state;

        const OrderPlusItemList : React.ReactElement[] =  items.map( ({key, mallName, delivType, desc1, desc2, desc3, disabled, newOrder, checked}) => (
            <OrderPlusItem 
                    key={key} mallName={mallName} delivType={delivType} 
                    desc1={desc1} desc2={desc2} desc3={desc3} 
                    disabled={disabled} newOrder={newOrder} onClick={ () => this.onClick(key)} checked={checked}>
            </OrderPlusItem>
        ));
        
        return (
            <div>
                <div className="codr_order_plus3">
                    <div className="codr_order_plstit">
                        <h3>주문더하기를 하실 수 있어요.</h3>
                        <p className="codr_order_plscont codr_tx_blk2">함께 받을 배송지를 선택해주세요.</p>
                        <div className="codr_btnarea_rgt">
                            <button type="button" className="codr_btn_arr3 modal-open-btn" data-morph-target="#codr_modal_orderplus">서비스 안내<span className="codr_sp_ico codr_ico_arrgray2"></span></button>
                        </div>
                    </div>
                    <div className="codr_order_plscont3">
                        <div className="after">
                            <ul className="lst">
                                {OrderPlusItemList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPlus;