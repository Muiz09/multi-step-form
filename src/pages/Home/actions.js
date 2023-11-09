import { UPDATE_USER } from './constants';

export const updatePersonalInfo = (payload) => {
  console.log(payload, ',,,,,,,,,,,,,,,,,,,,,,,');
  return { type: UPDATE_USER, payload }
};
