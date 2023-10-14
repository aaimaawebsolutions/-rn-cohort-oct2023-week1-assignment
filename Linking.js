import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity,StyleSheet} from 'react-native';
import { openURL, canOpenURL } from 'expo-linking';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Linking = () => {
  const navigation = useNavigation();


  const [canOpenEmail, setCanOpenEmail] = useState(false);
  const [canOpenTelephone, setCanOpenTelephone] = useState(false);

  useEffect(() => {
    // Check if you can open the email link
    canOpenURL('mailto:nandakoshore123@gmail.com').then((canOpen) => {
      setCanOpenEmail(canOpen);
    });

    // Check if you can open the telephone link
    canOpenURL('tel:+919849652713').then((canOpen) => {
      setCanOpenTelephone(canOpen);
    });
  }, []);

  const handleLinkingGuidePress = () => {
    openURL('https://docs.expo.dev/guides/linking');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Button onPress={handleLinkingGuidePress} title="Linking Guide" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Button
          onPress={() => openURL('mailto:nandakoshore123@gmail.com')}
          title="Email"
          disabled={!canOpenEmail}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Button
          onPress={() => openURL('tel:+919849652713')}
          title="Call Fake Number"
          disabled={!canOpenTelephone}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Button onPress={() => openURL('sms:+919849652713')} title="Text Fake Number" />
      </TouchableOpacity>
      
      <Button
  title="Go to Docpick"
  color="green" 
  onPress={() => navigation.navigate('Docpick')}
/>


      <StatusBar style="auto" />
    </View>
  );
};

export default Linking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 10, 
  },
});
