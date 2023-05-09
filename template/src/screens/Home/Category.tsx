import React from 'react';

import { Text, View } from '@/ui';

const CATE = ['T-Shirts', 'Dresses', 'Bags'];

const selected = 'T-Shirts';

const ItemCategory = ({ value }: { value: string }) => {
  return (
    <View
      className={`${
        value === selected ? 'bg-primary-500' : 'bg-neutral-100'
      } rounded-full py-3 px-8 mr-4`}>
      <Text variant="sm" className="font-semibold">
        {value}
      </Text>
    </View>
  );
};

const Category = () => {
  return (
    <View className="flex-row my-6">
      {CATE.map((cate) => (
        <ItemCategory key={cate} value={cate} />
      ))}
    </View>
  );
};

export default Category;
