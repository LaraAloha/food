import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

export const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.background}>

      <Text style={styles.title}>{title} restaurants list</Text>

      <Text > Results: {results.length} </Text>

      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text
            style={styles.block}
            style={{backgroundImage: `url(${item.image_url})` }}
          >
            {item.name}
          </Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    // display: "flex",
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    height: 124,
    width: 300,

    fontSize: 16,

  },

  title: {
    fontSize: 22,
    lineHeight: 25,
    fontWeight: "600"
  },
  background: {
    borderRadius: 5,
    marginHorizontal: 15

  }
});
