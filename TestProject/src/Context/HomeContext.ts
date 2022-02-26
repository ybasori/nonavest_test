import {createContext, useContext} from 'react';
import {IHomeContextProps} from './types';

const initialContextValue: IHomeContextProps = {
  coinData: null,
  isLoadingGetCoin: false,
  errorGetCoin: null,
  getCoinData: () => null,
  coinDataDetail: null,
  setCoinDataDetail: () => null,
  watch: [],
  setWatch: () => null,
};

const HomeContext = createContext(initialContextValue);

const useHome = () => {
  const context = useContext(HomeContext);

  if (context === undefined) {
    throw new Error('useHome must be used within HomeProvider');
  }

  return context;
};

export {HomeContext, useHome};
