import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as SMS from 'expo-sms';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/native';

const Sms = () => {
  const navigation = useNavigation();
  const [isAvailable, setIsAvailable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [recipients, setRecipients] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function checkAvailability() {
      const isSmsAvailable = await SMS.isAvailableAsync();
      setIsAvailable(isSmsAvailable);
    }
    checkAvailability();
  }, []);

  const sendSms = async () => {
    if (recipients.length === 0) {
      console.error("No recipients added.");
      return;
    }

    if (!message) {
      console.error("Message is required.");
      return;
    }

    console.log("Generating pdf");
    const { uri } = await Print.printToFileAsync({
      html: "<h1>Hi friends</h1>"
    });

    console.log(uri);

    const contentUri = await FileSystem.getContentUriAsync(uri);
    console.log(contentUri);

    // Check if an SMS application is available before sending
    const isSmsAvailable = await SMS.isAvailableAsync();
    if (isSmsAvailable) {
      const { result } = await SMS.sendSMSAsync(
        recipients,
        message,
        {
          attachments: {
            uri: contentUri,
            mimeType: "text/plain", // Change the MIME type
            filename: "Hi.txt" // Change the file extension
          }
        }
      );

      console.log(result);
    } else {
      console.error("No SMS application available on the device.");
    }
  };

  const addNumber = () => {
    if (phoneNumber) {
      setRecipients([...recipients, phoneNumber]);
      setPhoneNumber('');
    }
  };

  const showRecipients = () => {
    if (recipients.length === 0) {
      return <Text>No recipients added!</Text>;
    }

    return recipients.map((recipient, index) => (
      <Text key={index}>{recipient}</Text>
    ));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={phoneNumber}
        placeholder="Phone Number"
        onChangeText={(value) => setPhoneNumber(value)}
      />
      <Button title='Add Number' onPress={addNumber} />
      <TextInput
        value={message}
        placeholder="Message"
        onChangeText={(value) => setMessage(value)}
      />
      <Text>Recipients:</Text>
      {showRecipients()}
      <Button title='Clear Recipients' onPress={() => setRecipients([])} />
      {isAvailable ? (
        <Button title="Send SMS" onPress={sendSms} />
      ) : (
        <Text>SMS not available</Text>
      )}
      <StatusBar style="auto" />

      <Button
        title="Go to Network"
        color="green"
        onPress={() => navigation.navigate('Ipcheck')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sms;
