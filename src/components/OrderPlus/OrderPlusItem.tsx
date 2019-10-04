import React, { StatelessComponent, ButtonHTMLAttributes, Fragment } from 'react';
import './OrderPlus.scss';
import './OrderPlusItem';

interface OrderPlusItemProps {
    mallName? : string,
    delivType? : string,
    desc1? : string,
    desc2? : string,
    desc3? : string
    disabled? : boolean,
    newOrder? : boolean,
    checked? : boolean,
    onClick?(event: React.MouseEvent<HTMLElement>) : void
}

const OrderPlusItem: StatelessComponent<OrderPlusItemProps> = ({mallName, delivType, desc1, desc2, desc3, disabled, newOrder, onClick, checked}) => (
    
        newOrder ?
            (
                <li className={checked ? 'on' : ''}>
                    <span className="codr_inp_rdo">
                        <input type="radio" id="ui_test67" value="" name="ui_test_gr7" checked={checked} onClick={onClick}></input>
                        <label htmlFor="ui_test67">
                            <span className="tx codr_tx_bold codr_tx_blk2 codr_tx_large"><strong>새로주문하기</strong></span>
                        </label>
                    </span>
                </li>
            )
        :
            (
                <li className={checked ? 'on' : ''}>
                    <span className="codr_inp_rdo">
                        <input type="radio" id="ui_test65" value="" name="ui_test_gr7" disabled={disabled} checked={checked} onClick={onClick}></input>
                        <label htmlFor="ui_test65">
                            <span className="codr_prdchg_lst tx">
                                <span className="cm_mall_ic ty_circle_s">
                                    <i className="em"><span className="blind">{mallName}</span></i>
                                </span>
                                <span className="codr_deliv_type codr_tx_blk2">
                                    <span><span className="blind">점포명</span>{mallName}</span><span><span className="blind"> 배송유형 </span> {delivType}</span>
                                </span>
                            </span>
                            {
                                disabled ?
                                        (
                                            <Fragment>
                                                <span className="tx codr_tx_blk2"><strong>[별칭] {desc1}</strong></span>
                                                <span className="codr_tx_gray2 codr_tx_smaller">{desc2} <span className="codr_tx_blk2">{desc3}</span>하시면 함께 배송됩니다.</span>
                                            </Fragment>
                                        )
                                    :
                                        (
                                            <Fragment>
                                                <span className="tx codr_tx_blk2"><strong>[별칭] {desc1}</strong></span>
                                                <span className="tx2">주문더하기를 이미 하셨습니다.(1회에 한해 가능)</span>
                                            </Fragment>
                                        )
                            }
                        </label>
                    </span>
                </li>
            )
);

export default OrderPlusItem;