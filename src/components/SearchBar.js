import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

export const SearchBar = ({ term, onTermSubmit, onChangeTerm }) => {
  return (
    <View style={styles.background}>
      <Foundation
        name="search"
        style={styles.searchIcon} />

      <TextInput
        placeholder="search"
        style={styles.input}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray',
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row'

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    fontSize: 16
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15

  }
});
