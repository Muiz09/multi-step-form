import { produce } from 'immer';
import { UPDATE_USER } from './constants';

export const initialState = {
  info: {
    name: '',
    email: '',
    phoneNumber: '',
  },
};

export const storedKey = ['info'];

const personalInfoReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case UPDATE_USER:
        draft.info = { ...state.info, ...action.payload };
        break;
    }
  });

export default personalInfoReducer;
console.log(initialState, 'reducercomponent');
