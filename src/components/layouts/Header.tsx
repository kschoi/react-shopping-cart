import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={`${style.mcom_tit_renew} ${style.ty_top}`}>
        <h2 className={style.mcom_tit_txt}>장바구니</h2>
        <div className={style.mcom_tit_lft}>
          <a href="#" className={style.btn_back}><span className={`${style.sp_ctg_icon} ${style.ctg_icon_back}`}><span className="blind">이전 페이지</span></span></a>
        </div>
        <div className={style.mcom_tit_rgt}>
          <div className={style.btn_cate}>
            <button type="button"><span className={`${style.sp_ctg_icon} ${style.ctg_icon_search}`}><span className="blind">검색</span></span></button>
          </div>
          <div className={style.btn_cate}>
            <a href="#"><span className={`${style.sp_ctg_icon} ${style.ctg_icon_home}`}><span className="blind">SSG.com 홈</span></span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;