import {ReactNode} from 'react';

export interface IProviderProps {
  children: ReactNode;
}

interface CryptoDataProps {
  symbol: string;
  name: string;
  name_full: string;
  max_supply: number;
  icon_url: string;
}
interface CryptoProps {
  [coinSymbol: string]: CryptoDataProps;
}

interface CoinProps {
  success: boolean;
  crypto: CryptoProps;
  fiat: {
    [coinSymbol: string]: string;
  };
}

export type IHomeStateProps = {
  coinData?: CoinProps | null;
  isLoadingGetCoin: boolean;
  errorGetCoin: any;
  coinDataDetail: string | null;
  watch: string[];
};

export interface IHomeContextProps extends IHomeStateProps {
  getCoinData: () => void;
  setCoinDataDetail: (data: any) => void;
  setWatch: (data: string[]) => void;
}

export enum HomeAction {
  GET_COIN_IS_LOADING = 'GET_COIN_IS_LOADING',
  GET_COIN_SUCCESS = 'GET_COIN_SUCCESS',
  GET_COIN_ERROR = 'GET_COIN_ERROR',
  SET_COIN_DATA_DETAIL = 'SET_COIN_DATA_DETAIL',
  SET_COIN_WATCH = 'SET_COIN_WATCH',
}

export type HomeActionType = keyof typeof HomeAction;

export type IReducerActionProps = {type: HomeActionType; payload?: any};
