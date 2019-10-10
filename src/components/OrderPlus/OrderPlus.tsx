import React, { StatelessComponent, ButtonHTMLAttributes } from 'react';
import './OrderPlus.scss';

import OrderPlusItem from './OrderPlusItem';
import { OrdPlusItemState } from '../../store/modules/OrderPlus';

interface OrderPlusProps {
    selectedId : number,
    items : OrdPlusItemState[],
    onToggle(id: number) : void
}

class OrderPlus extends React.Component<OrderPlusProps> {

    render() {
        const {selectedId, items, onToggle} = this.props;

        const OrderPlusItemList : React.ReactElement[] =  items.map( ({id, mallName, delivType, desc1, desc2, desc3, disabled, newOrder}) => (
            <OrderPlusItem 
                    key={id} mallName={mallName} delivType={delivType} 
                    desc1={desc1} desc2={desc2} desc3={desc3} 
                    disabled={disabled} newOrder={newOrder} onToggle={ () => onToggle(id)} checked={ id === selectedId }>
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