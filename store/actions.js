import * as types from './types';

export const setProduct = (payload) => ({payload });

// GET QUOTE OF THE DAY
export const getProduct = (axios) => (dispatch, getState) => {
  const state = getState();
   if (state.data) {
     return;
   }

  axios
    .get('https://fakestoreapi.com/products')
    .then(({ data }) => {
      
      dispatch(setProduct({data }));
    })
    .catch((error) => {
      let message = 'There was an error getting quote of the day';
      if (error.response) {
        message = `Server responded with status ${error.response.status}`;
      }
    //   dispatch(
    //     setProduct({
    //       data: message,
    //     })
    //   );
    });
};