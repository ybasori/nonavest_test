import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useHome} from '../Context/HomeContext';
import styles from './styles';

const Home = () => {
  const {coinDataDetail, coinData, setWatch, watch} = useHome();

  return (
    <SafeAreaView>
      {coinDataDetail && (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{uri: coinData?.crypto[coinDataDetail].icon_url}}
          />
          <View>
            <View style={styles.row}>
              <Text style={styles.coinText}>Name:</Text>
              <Text style={styles.coinText}>
                {coinData?.crypto[coinDataDetail].name_full}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.coinText}>Symbol:</Text>
              <Text style={styles.coinText}>
                {coinData?.crypto[coinDataDetail].symbol}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.coinText}>Max Supply:</Text>
              <Text style={styles.coinText}>
                {coinData?.crypto[coinDataDetail].max_supply}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (watch.findIndex(item => item === coinDataDetail) >= 0) {
                setWatch([...watch].filter(item => item !== coinDataDetail));
              } else {
                setWatch([...watch, coinDataDetail]);
              }
            }}
            style={styles.btnWatch}>
            <Text>
              {watch.findIndex(item => item === coinDataDetail) >= 0
                ? 'Unwatch'
                : 'Watch'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
