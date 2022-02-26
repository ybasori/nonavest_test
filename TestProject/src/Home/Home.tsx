import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CoinList from './CoinList';
import {useHome} from '../Context/HomeContext';
import styles from './styles';

const Home = () => {
  const {getCoinData, coinData, isLoadingGetCoin, watch} = useHome();
  const [oneTimeEffect, setOneTimeEffect] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [isWatchlist, setIsWatchlist] = useState(false);

  useEffect(() => {
    if (oneTimeEffect) {
      setOneTimeEffect(false);
      getCoinData();
    }
  }, [getCoinData, oneTimeEffect]);
  useEffect(() => {
    if (coinData) {
      if (watch.length > 0) {
        setIsWatchlist(true);
      }
    }
  }, [coinData, watch]);

  return (
    <SafeAreaView>
      <View style={styles.groupButtonList}>
        <TouchableOpacity
          onPress={() => setIsWatchlist(false)}
          style={{
            ...styles.buttonItem,
            ...(!isWatchlist && {backgroundColor: '#3498db'}),
          }}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsWatchlist(true)}
          style={{
            ...styles.buttonItem,
            ...(isWatchlist && {backgroundColor: '#3498db'}),
          }}>
          <Text>My Watchlist</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.groupButtonList}>
        <TouchableOpacity
          onPress={() => setIsGrid(false)}
          style={styles.buttonItem}>
          <Text>List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsGrid(true)}
          style={styles.buttonItem}>
          <Text>Grid</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoadingGetCoin ? (
          <View>
            <Text>Loading</Text>
          </View>
        ) : (
          coinData?.crypto && (
            <>
              {isGrid && (
                <FlatList
                  onRefresh={getCoinData}
                  refreshing={isLoadingGetCoin}
                  data={Object.keys(coinData?.crypto).filter(item =>
                    isWatchlist
                      ? watch.findIndex(subitem => subitem === item) >= 0
                        ? true
                        : false
                      : [],
                  )}
                  renderItem={({item}) => (
                    <CoinList
                      index={item}
                      symbol={coinData?.crypto[item].symbol}
                      icon_url={coinData?.crypto[item].icon_url}
                      name={coinData?.crypto[item].name}
                      name_full={coinData?.crypto[item].name_full}
                      max_supply={coinData?.crypto[item].max_supply}
                      isGrid={isGrid}
                    />
                  )}
                  numColumns={2}
                />
              )}
              {!isGrid && (
                <FlatList
                  onRefresh={getCoinData}
                  refreshing={isLoadingGetCoin}
                  data={Object.keys(coinData?.crypto).filter(item =>
                    isWatchlist
                      ? watch.findIndex(subitem => subitem === item) >= 0
                        ? true
                        : false
                      : [],
                  )}
                  renderItem={({item}) => (
                    <CoinList
                      index={item}
                      symbol={coinData?.crypto[item].symbol}
                      icon_url={coinData?.crypto[item].icon_url}
                      name={coinData?.crypto[item].name}
                      name_full={coinData?.crypto[item].name_full}
                      max_supply={coinData?.crypto[item].max_supply}
                      isGrid={isGrid}
                    />
                  )}
                  numColumns={1}
                />
              )}
            </>
          )
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
