import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchPlaces, results, errorMessage] = useResults()
 
  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchPlaces(term)}
      />
      <Text style={styles.msg}>
        {`Found ${results.length} results. `}
        {errorMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    fontSize: 24
  }
});

export default SearchScreen;
