import React, { useState } from 'react';
import style from './Toolbar.module.scss';

interface ToolbarProps {
    count: number,
    deliveryCharge: number,
    totalPrice: number 
}

const Toolbar: React.FC<ToolbarProps> = props => {
    const [open, setOpen] = useState<boolean | true>(true);

    return (
        <div id="_cdtl_opt_bar" className={`${style.cdtl_opt_bar} ${style._fixed_banner} ${style.ty_base} ${open ? style.on : ''}`}>
            <div className={style.cdtl_opt_toggle}>
                <button onClick={() => setOpen(!open)} className={style.cdtl_btn_toggle}>
                    <span className={style.cdtl_sp_cob}>
                        <span className={`${style.blind} ${style.sr_off}`}>앱바펼침</span>
                        <span className={`${style.blind} ${style.sr_on}`}>앱바접음</span>
                    </span>
                </button>
            </div>
            <div className={style.cdtl_opt_wrap}>
                <div className={`${style.cdtl_totalcart} ${style.cdtl_opt_hide}`}>
                    <div className={style.cdtl_totalcart_sum}>
                        <span className={style.cdtl_totalcart_tx}>
                            {props.count ? <>{props.count}</> : 0}개 선택
                            {props.deliveryCharge && <>(배송비 {props.deliveryCharge}원)</>}
                        </span>
                        <strong className={style.cdtl_totalcart_price}>
                            <em className={style.ssg_price}>{props.totalPrice ? <>{props.totalPrice}</> : 0}</em><span className={style.ssg_tx}>원</span>
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;