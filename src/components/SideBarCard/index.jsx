/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';

const SideBar = () => {
  // const dispatch = useDispatch();
  return (
    <div className={classes.contentStep}>
      {/* Sidebar */}
      <div className={classes.stepOne}>
        <p>1</p>
        <div className={classes.alur}>
          <div className={classes.step}>
            <FormattedMessage id="app_step1" />
          </div>
          <div className={classes.one}>
            <FormattedMessage id="app_1step" />
          </div>
        </div>
      </div>
      <div className={classes.stepOne1}>
        <p>2</p>
        <div className={classes.alur1}>
          <div className={classes.step1}>
            <FormattedMessage id="app_step2" />
          </div>
          <div className={classes.one1}>
            <FormattedMessage id="app_2step" />
          </div>
        </div>
      </div>
      <div className={classes.stepOne1}>
        <p>3</p>
        <div className={classes.alur1}>
          <div className={classes.step1}>
            <FormattedMessage id="app_step3" />
          </div>
          <div className={classes.one1}>
            <FormattedMessage id="app_3step" />
          </div>
        </div>
      </div>
      <div className={classes.stepOne1}>
        <p>4</p>
        <div className={classes.alur1}>
          <div className={classes.step1}>
            <FormattedMessage id="app_step4" />
          </div>
          <div className={classes.one1}>
            <FormattedMessage id="app_4step" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
