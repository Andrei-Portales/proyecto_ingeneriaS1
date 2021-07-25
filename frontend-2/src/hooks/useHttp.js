import { useReducer } from 'react';

const initialState = {
  isLoading: false,
  error: false,
  data: {},
};

const reducer = (state, action) => {
  if (action.type === 'SENDING') {
    return {
      isLoading: true,
      error: false,
      data: {},
    };
  } else if (action.type === 'DATA') {
    return {
      isLoading: false,
      error: false,
      data: action.value,
    };
  } else if (action.type === 'ERROR') {
    return {
      isLoading: false,
      error: true,
      data: {},
    };
  }

  return initialState;
};

const useHttp = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const send = async (body) => {
    dispatch({
      type: 'SENDING',
    });

    try {
      const response = await fetch(props.link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      dispatch({
        type: 'DATA',
        value: data,
      });
    } catch (e) {
      dispatch({
        type: 'ERROR',
        value: e,
      });
    }
  };

  return {
    isLoading: state.isLoading,
    error: state.error,
    data: state.data,
    send,
  };
};

export default useHttp;
