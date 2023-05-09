import React from 'react';

import NavigationService from '@/stacks/NavigationService';
import {
  Image,
  List,
  Screen,
  Text,
  TopBar,
  TouchableOpacity,
  View,
} from '@/ui';
import { Favorite } from '@/ui/icons/favorites';
import colors from '@/ui/theme/colors';

import Category from './Category';
import ItemBanner from './ItemBanner';

const IMAGE_URI =
  'https://i.pinimg.com/564x/ad/e7/9d/ade79d2fcb268f9ba7d38863027bd442.jpg';

const listProduct = [
  {
    name: 'Oversize T-shirt',
    price: '24 .99',
  },
  {
    name: 'Ribbed T-shirt',
    price: '19.99',
  },
  {
    name: 'Nano Hat',
    price: '24 .99',
  },
  {
    name: 'Meta T-shirt',
    price: '19.99',
  },
];

const ListHeaderComponent = () => {
  return (
    <View>
      <Text variant="h3" className="mb-4">
        Trendings
      </Text>
      <ItemBanner />
      <Category />
    </View>
  );
};

const Home = () => {
  const onDetail = () => NavigationService.navigate('ProductDetail');
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={onDetail}
        activeOpacity={0.9}
        className="flex flex-1 mb-5 mx-2">
        <View className="absolute z-10 right-2 top-2 bg-neutral-200 rounded-full p-2">
          <Favorite color={colors.black} />
        </View>
        <Image source={{ uri: IMAGE_URI }} className="h-56 rounded-2xl" />
        <Text className="font-medium mt-4 mb-1">{item.name}</Text>
        <Text className="font-bold">${item.price}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <TopBar />

      <List
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListHeaderComponent={ListHeaderComponent}
        numColumns={2}
        data={listProduct}
        renderItem={renderItem}
        estimatedItemSize={4}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default Home;
