import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ScreenA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>Tela A</Text>
    </View>
  );
}

{/*<Button
        title="Screen B"
        onPress={() => navigation.navigate('Screen B')}
/>*/}
