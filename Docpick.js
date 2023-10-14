import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

const Docpick = () => {

    const navigation = useNavigation();

    const [selectedDocument, setSelectedDocument] = useState(null);

    const selectDocument = async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync();
  
        if (result.type === 'success') {
          setSelectedDocument(result);
          console.log('Document selected');
        } else if (result.type === 'cancel') {
          console.log('Document selection canceled');
        } else {
          console.log('Document selection error');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {selectedDocument ? (
          <View>
            <Text>Selected Document:</Text>
            <Text>Name: {selectedDocument.name}</Text>
            <Text>Type: {selectedDocument.type}</Text>
            <Text>URI: {selectedDocument.uri}</Text>
          </View>
        ) : (
          <View>
            <Text style={{ fontSize: 20 }}>Document Picker Example</Text>
            <Button title="Select Document" onPress={selectDocument} />
          </View>
        )}
         <Button
  title="Go to Camera"
  color="green" 
  onPress={() => navigation.navigate('Imagespick')}
  style={{ marginTop: 10 }} // Adjust the value (10) to control the amount of space
/>
      </View>
    );
  }

export default Docpick;