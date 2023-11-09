/* eslint-disable arrow-body-style */
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';
import classes from './style.module.scss';

const Payment = () => {
  const [showMonthlyPrice, setShowMonthlyPrice] = useState(true);

  const togglePriceView = () => {
    setShowMonthlyPrice(!showMonthlyPrice);
  };

  return (
    <div className={classes.conPayment}>
      <div className={classes.selectPlan}>
        <FormattedMessage id="select_plane" />
      </div>
      <div className={classes.youHave}>
        <FormattedMessage id="you_have" />
      </div>
      <div className={classes.payment}>
        <div className={classes.box1}>
          <img src={arcade} alt="" />
          <div className={classes.kelas}>Arcade</div>
          <div className={classes.price}>$9/mo</div>
          <div className={classes.toogle}>{showMonthlyPrice ? '' : '2 months free'}</div>
        </div>
        <div className={classes.box2}>
          <img src={advanced} alt="" />
          <div className={classes.kelas}>Advanced</div>
          <div className={classes.price}>$12/mo</div>
          <div className={classes.toogle}>{showMonthlyPrice ? '' : '2 months free'}</div>
        </div>
        <div className={classes.box3}>
          <img src={pro} alt="" />
          <div className={classes.kelas}>Pro</div>
          <div className={classes.price}>$15/mo</div>
          <div className={classes.toogle}>{showMonthlyPrice ? '' : '2 months free'}</div>
        </div>
      </div>
      <button type="button" onClick={togglePriceView}>
        Toggle Price
      </button>
    </div>
  );
};
export default Payment;
