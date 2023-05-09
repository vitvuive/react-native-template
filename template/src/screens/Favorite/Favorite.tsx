import React from 'react';

import { Screen, Text, TopBar, View } from '@/ui';

const Favorite = () => {
  return (
    <Screen>
      <TopBar />
      <View className="px-4">
        <Text variant="h3" className="mt-4">
          My Favorites
        </Text>
      </View>
    </Screen>
  );
};

export default Favorite;
