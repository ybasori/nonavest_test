import React, {useReducer} from 'react';

import {HomeAction, IProviderProps} from './types';
import {HomeContext} from './HomeContext';
import HomeReducer from './HomeReducer';
import api from '../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeProvider: React.FC<IProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(HomeReducer, {
    coinData: null,
    isLoadingGetCoin: false,
    errorGetCoin: null,
    coinDataDetail: null,
    watch: [],
  });

  const action = {
    getCoinData: async () => {
      try {
        dispatch({
          type: HomeAction.GET_COIN_IS_LOADING,
        });
        const res = await api.getCoinData();
        const value = await AsyncStorage.getItem('watchlist');
        if (value) {
          dispatch({
            type: HomeAction.SET_COIN_WATCH,
            payload: JSON.parse(value),
          });
        }
        dispatch({
          type: HomeAction.GET_COIN_SUCCESS,
          payload: res.data,
        });
      } catch (err) {
        dispatch({
          type: HomeAction.GET_COIN_ERROR,
          payload: err,
        });
      }
    },
    setCoinDataDetail: (data: string) => {
      dispatch({
        type: HomeAction.SET_COIN_DATA_DETAIL,
        payload: data,
      });
    },
    setWatch: async (data: string[]) => {
      try {
        await AsyncStorage.setItem('watchlist', JSON.stringify(data));
        dispatch({
          type: HomeAction.SET_COIN_WATCH,
          payload: data,
        });
      } catch (err) {}
    },
  };

  return (
    <HomeContext.Provider
      value={{
        ...state,
        ...action,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

export {HomeContext, HomeProvider};
