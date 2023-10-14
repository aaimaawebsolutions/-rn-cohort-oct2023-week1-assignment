import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hii nandu</Text>
      <Button
        title="Go to Seasons"
        color="green" 
        onPress={() => navigation.navigate('Seasons')}
      />
    </View>
  );
}

export default HomeScreen;

