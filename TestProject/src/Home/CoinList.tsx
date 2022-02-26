import {useNavigation} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useHome} from '../Context/HomeContext';
import styles from './styles';

interface Props {
  symbol: string;
  isGrid: boolean;
  icon_url: string;
  name: string;
  name_full: string;
  index: string;
  max_supply: number;
}

const CoinList: FC<Props> = ({icon_url, isGrid, name, index}) => {
  const navigation = useNavigation<any>();
  const {setCoinDataDetail} = useHome();

  const onDetail = () => {
    navigation.navigate('Details');
    setCoinDataDetail(index);
  };
  return (
    <TouchableOpacity
      style={isGrid ? styles.coinGrid : styles.coinList}
      onPress={onDetail}>
      <Image style={styles.coinThumbnail} source={{uri: icon_url}} />
      <Text style={styles.coinText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CoinList;
