/* eslint-disable arrow-body-style */
import { TextField, Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectInfo } from '@pages/Home/selectors';
import { updatePersonalInfo } from '@pages/Home/actions';
// import personalInfoReducer from '@pages/Home/reducer';
import classes from './style.module.scss';

const InfoPersonal = () => {
  const user = useSelector(selectInfo);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user.name || '',
    email: user.email || '',
    phoneNumber: user.phoneNumber || '',
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    if (!validateForm()) {
      return;
    }
    dispatch(updatePersonalInfo(formData));
  };
  const validateForm = () => {
    let valid = true;
    const newError = {};

    if (formData.name === '') {
      newError.name = '*Name is Required';
      valid = false;
    }

    if (formData.email === '') {
      newError.email = '*Email is Required';
      valid = false;
    }

    if (formData.phoneNumber === '') {
      newError.phoneNumber = '*Phone Number is Required';
      valid = false;
    }

    setError(newError);
    return valid;
  };
  return (
    <div className={classes.contentInfo}>
      <div className={classes.personalInfo}>
        <FormattedMessage id="personal_info" />
      </div>
      <div className={classes.pleaseProvide}>
        <FormattedMessage id="please_provide" />
      </div>
      <form className={classes.nameForm} onSubmit={handleSubmit}>
        <FormattedMessage id="name_form" />
        <TextField
          label="Jhon Doe"
          name="name"
          size="small"
          sx={{ mt: 0 }}
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!error.name}
          helperText={error.name}
        />
        <FormattedMessage id="email_form" />
        <TextField
          label="God@gmail.com"
          name="email"
          size="small"
          sx={{ mt: 0 }}
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!error.email}
          helperText={error.email}
        />
        <FormattedMessage id="phone_form" />
        <TextField
          label="+62 - 813 - 6067 - 5259"
          name="phoneNumber"
          size="small"
          sx={{ mt: 0 }}
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!error.phoneNumber}
          helperText={error.phoneNumber}
        />
        <div className={classes.botton}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default InfoPersonal;
