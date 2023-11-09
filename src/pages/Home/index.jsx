import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ping } from '@containers/App/actions';
import SideBar from '@components/SideBarCard';
import InfoPersonal from '@components/InfoPersonal';
import Payment from '@components/Payment';
import AddOn from '@components/AddOn/AddOn';
import classes from './style.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState('InfoPersonal');

  const handleNextClick = () => {
    // Fungsi ini akan mengganti halaman berikutnya
    if (currentPage === 'InfoPersonal') {
      setCurrentPage('Payment');
    } else if (currentPage === 'Payment') {
      setCurrentPage('AddOn');
    }
  };

  const handleBackClick = () => {
    // Fungsi ini akan mengganti ke halaman sebelumnya
    if (currentPage === 'Payment') {
      setCurrentPage('InfoPersonal');
    } else if (currentPage === 'AddOn') {
      setCurrentPage('Payment');
    }
  };

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      <div className={classes.containerHome}>
        <div className={classes.containerCard}>
          <SideBar />
          {currentPage === 'InfoPersonal' && <InfoPersonal />}
          {currentPage === 'Payment' && <Payment />}
          {currentPage === 'AddOn' && <AddOn />}
        </div>
      </div>
      <div>
        <button type="button" onClick={handleBackClick} disabled={currentPage === 'InfoPersonal'}>
          Back
        </button>
        <button type="button" onClick={handleNextClick} disabled={currentPage === 'AddOn'}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
