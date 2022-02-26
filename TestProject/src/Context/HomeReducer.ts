import {IHomeStateProps, IReducerActionProps, HomeAction} from './types';

const HomeReducer = (state: IHomeStateProps, action: IReducerActionProps) => {
  switch (action.type) {
    case HomeAction.GET_COIN_IS_LOADING:
      return {
        ...state,
        isLoadingGetCoin: true,
        coinData: null,
        errorGetCoin: null,
      };
    case HomeAction.GET_COIN_SUCCESS:
      return {
        ...state,
        isLoadingGetCoin: false,
        coinData: action.payload,
        errorGetCoin: null,
      };
    case HomeAction.GET_COIN_ERROR:
      return {
        ...state,
        isLoadingGetCoin: false,
        coinData: null,
        errorGetCoin: action.payload,
      };
    case HomeAction.SET_COIN_DATA_DETAIL:
      return {
        ...state,
        coinDataDetail: action.payload,
      };
    case HomeAction.SET_COIN_WATCH:
      return {
        ...state,
        watch: action.payload,
      };
    default:
      return state;
  }
};

export default HomeReducer;
