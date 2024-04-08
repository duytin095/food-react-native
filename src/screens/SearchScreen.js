import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchAPI(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We got {results.length} result</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
