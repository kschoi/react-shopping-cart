import React, { useState } from 'react';
import style from './Toolbar.module.scss';

const Toolbar = props => {
    const [open, setOpen] = useState(true);

    return (
        <>
            <div id="_cdtl_opt_bar" className={`${style.cdtl_opt_bar} ${style._fixed_banner} ${style.ty_base} ${open ? style.on : ''}`}>
                <div className={style.cdtl_opt_toggle}>
                    <a href="#" onClick={(e) => setOpen(!open)} className={style.cdtl_btn_toggle} role="button">
                        <span className={style.cdtl_sp_cob}>
                            <span className={`${style.blind} ${style.sr_off}`}>앱바펼침</span>
                            <span className={`${style.blind} ${style.sr_on}`}>앱바접음</span>
                        </span>
                    </a>
                </div>
                <div className={style.cdtl_opt_wrap}>
                    <div className={`${style.cdtl_totalcart} ${style.cdtl_opt_hide}`}>
                        <div className={style.cdtl_totalcart_sum}>
                            <span className={style.cdtl_totalcart_tx}>
                                {!props.count ? 0 : <>{props.count}</>}개 선택
                                {!props.deliveryCharge ? null : <>(배송비 {props.deliveryCharge}원)</>}
                            </span>
                            <strong className={style.cdtl_totalcart_price}>
                                <em className={style.ssg_price}>{!props.totalPrice ? 0 : <>{props.totalPrice}</>}</em><span className={style.ssg_tx}>원</span>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toolbar;