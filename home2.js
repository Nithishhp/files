import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';

const AddressModal = ({ isVisible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [address, setAddress] = useState('');
  const [nearbyLandmark, setNearbyLandmark] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSaveAddress = () => {
    // Here you can implement the logic to save the address
    // You can use 'selectedOption', 'address', and 'nearbyLandmark' state values
    // Don't forget to close the modal once done!
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Text>Save Address</Text>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.optionButton, selectedOption === 'Home' && styles.selectedOption]}
            onPress={() => handleOptionSelect('Home')}
          >
            <Text>Home</Text>
          </TouchableOpacity>
         
          {/* Similar buttons for 'Work' and 'Other' */}
        </View>

        {/* Address Input */}
        <TextInput
          style={styles.input}
          placeholder="Complete address"
          value={address}
          onChangeText={(text) => setAddress(text)}
        />

        {/* Nearby Landmark Input */}
        <TextInput
          style={styles.input}
          placeholder="Nearby Landmark"
          value={nearbyLandmark}
          onChangeText={(text) => setNearbyLandmark(text)}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
          <Text>Save Address</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '60%',
  },
  row:{
    alignItems:"center",
  }
};

export default AddressModal;