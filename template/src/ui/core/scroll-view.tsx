import { ScrollView as NScrollView } from 'react-native';
import { styled } from 'nativewind';

export const ScrollView = styled(NScrollView, {
  classProps: ['contentContainerStyle', 'className'],
});
