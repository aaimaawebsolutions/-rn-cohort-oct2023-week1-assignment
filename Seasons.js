import React from 'react';
import { View, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Seasons = () => {
  const navigation = useNavigation();
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome</Text>
        <Button
          title="Go to linking"
          color="green" 
          onPress={() => navigation.navigate('Linking')}
        />
      </View>
    );
  }
  
  export default Seasons;