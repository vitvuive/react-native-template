import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ModalComponentProp } from 'react-native-modalfy';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Colors, CommonSizes } from '@/core/theme';
import { IModalStackParamsList } from '@/stacks/type';

type Props = ModalComponentProp<IModalStackParamsList, void, 'ModalDateTime'>;

export type TModeDateTime = 'time' | 'date';

const ModalCalendar: React.FC<Props> = ({ modal: { params } }) => {
  return (
    <View style={styles.container}>
      <DateTimePicker
        minimumDate={params?.minDate}
        maximumDate={params?.maxDate}
        accentColor={Colors.primary}
        value={params?.initialDate ?? new Date()}
        onChange={params?.onChange}
        mode={params?.mode ?? 'date'}
        display={params?.mode === 'time' ? 'spinner' : 'inline'}
      />
    </View>
  );
};

export default ModalCalendar;

const styles = StyleSheet.create({
  container: {
    padding: CommonSizes.spacing.extraSmall,
    borderRadius: CommonSizes.borderRadius.medium,
    backgroundColor: 'white',
  },
});
