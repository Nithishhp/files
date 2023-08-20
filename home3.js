import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Modal ,FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Profile = () => {
  const [name, setName] = useState('John Mathew');
  const [email, setEmail] = useState('joedyon@gmail.com');
  const [contact, setcontact] = useState('+91 9876543210');
  const [favorites, setFavorites] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
       
  const handleSave = () => {
    setEditMode(false);
  };

  const handleAdd = () => {
    setFavorites([...favorites, { place, description }]);
    setPlace('');
    setDescription('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topic}>
        <Text style={styles.header}>Profile</Text>
      </View>
      {!editMode ? (
        <View style={styles.profileContainer}>
          <Image
            style={styles.Image}
            source={{
              uri:'https://tse4.mm.bing.net/th?id=OIP.-qNDOQ5JpGTrJelZj6zpGQHaFA&pid=Api&P=0&h=180',
            }}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>{name}</Text>
            <Text style={styles.profilecontact}>{contact}</Text>
            <Text style={styles.profileEmail}>{email}</Text>
          </View>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setEditMode(true)}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Select Place:</Text>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="Home"
                status={selectedPlace === 'Home' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Home')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Home</Text>

              <RadioButton
                value="Office"
                status={selectedPlace === 'Office' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Office')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Office</Text>

              <RadioButton
                value="Shop"
                status={selectedPlace === 'Shop' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Shop')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Shop</Text>

              <RadioButton
                value="Others"
                status={selectedPlace === 'Others' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Others')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Others</Text>
            </View>
          </View>
          <TextInput
            style={styles.input}
            value={place}
            onChangeText={setPlace}
            placeholder="Enter a new place"
          />
          <View>
            <TextInput
              style={[styles.input, { height: 80 }]}
              value={description}
              onChangeText={setDescription}
              placeholder="Enter a description"
              multiline
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAdd()}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.favoritesHeader}>
        <Text style={styles.favoritesHeaderText}>Favorites</Text>
      </View>
      <View style={styles.favoritesList}>
        {favorites.map((favorite, index) => (
          <View key={index} style={styles.favoriteItem}>
            <Text>{favorite.place}</Text>
            {favorite.description !== '' && (
              <Text>{favorite.description}</Text>
            )}
          </View>
        ))}
      </View>
              





      <TouchableOpacity onPress={() => setModalVisible(true)}>
  <Text style={styles.addFavoriteText}> + Add Favorite</Text>
</TouchableOpacity>


      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Favorite</Text>
             <Text style={styles.label}>Select Place:</Text>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                value="Home"
                status={selectedPlace === 'Home' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Home')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Home</Text>

              <RadioButton
                value="Office"
                status={selectedPlace === 'Office' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Office')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Office</Text>

              <RadioButton
                value="Shop"
                status={selectedPlace === 'Shop' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Shop')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Shop</Text>

              <RadioButton
                value="Others"
                status={selectedPlace === 'Others' ? 'checked' : 'unchecked'}
                onPress={() => setSelectedPlace('Others')}
                color="#FFA500"
              />
              <Text style={styles.radioButtonLabel}>Others</Text>
            </View>
            <TextInput
              style={styles.input}
              value={place}
              onChangeText={setPlace}
              placeholder="Enter a new place"
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              value={description}
              onChangeText={setDescription}
              placeholder="Enter a description"
              multiline
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAdd()}
            >
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  
  radioButtonLabel: {
    marginLeft: 5,
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topic: {
    backgroundColor: '#FFA500',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#FFA500',
    marginRight: 20,
  },
  profileDetails: {},
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profilecontact: {
    fontSize: 16,
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  editButton: {
    backgroundColor: '#FFA500',
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: "center",
     marginHorizontal: 20,
      borderRadius: 5,
       marginLeft: 'auto'
  },
  editButtonText: { color: '#fff',
   fontSize: 16,
    fontWeight: 'bold' 
  },
  form: { paddingHorizontal: 20,
     marginTop: 20 
    },
  formGroup: { 
    marginBottom: 20 
  },
  label: { 
    fontSize: 16,
     fontWeight: 'bold',
   marginBottom: 10 
  },
  input: { 
    height: 40, borderWidth: 1,
     borderColor: 'gray',
      paddingHorizontal: 10,
      borderRadius: 5 
    },
  saveButton: {
    backgroundColor: '#FFA500',
     height: 50, 
     justifyContent: 'center',
      alignItems: "center"
    , marginHorizontal: 20,
     borderRadius: 5,
      marginTop: 20
  },
  saveButtonText: { 
    color: '#fff',
   fontSize: 18,
    fontWeight: 'bold' 
  },
   favoritesHeader: { 
    backgroundColor: '#FFA500',
   height: 40,
    justifyContent: 'center',
     paddingHorizontal: 20 
    },
  favoritesHeaderText: { 
    color: '#fff', fontSize: 18,
     fontWeight: 'bold' },
  addButton: {
    backgroundColor: '#FFA500',
     height: 50,
      justifyContent: 'center',
      alignItems: "center"
    , marginHorizontal: 20,
     borderRadius: 5,
      marginTop: 20
  },
  addButtonText: { 
    color: '#fff',
     fontSize: 18,
      fontWeight: 'bold' 
    },
  favoritesList: {
    paddingHorizontal: 20,
     marginTop: 20
  },
  favoriteItem: {
    paddingVertical: 10,
     borderBottomWidth: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {  
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
   itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  idText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  streetText: {
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
});

export default Profile;