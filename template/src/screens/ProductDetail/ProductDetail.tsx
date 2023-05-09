import React from 'react';

import { Image, Text, View } from '@/ui';

const IMAGE_URI =
  'https://i.pinimg.com/564x/ad/e7/9d/ade79d2fcb268f9ba7d38863027bd442.jpg';

const ProductDetail = () => {
  return (
    <View className="flex flex-1">
      <Image source={{ uri: IMAGE_URI }} className="h-3/5" />
      <View className="flex-1 bg-slate-700 rounded-3xl">
        <View>
          <Text className="text-white">Watch the video</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;
