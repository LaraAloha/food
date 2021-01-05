import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from '../components/SearchBar'
import { ResultsList } from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchPlaces, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    // price === $ || $$ || $$$
    return results.filter((result) => {
      return result.price === price
    })
  }

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

      <ResultsList results={filterResultsByPrice('$')} title="cheap" />
      <ResultsList results={filterResultsByPrice('$$')} title="bit pricier" />
      <ResultsList results={filterResultsByPrice('$$$')} title="expensive" />

    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    fontSize: 24
  }
});

export default SearchScreen;
