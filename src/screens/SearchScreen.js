import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchAPI, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) =>{
    return results.filter(
      results =>{
        return results.price === price
      }
    );
  }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchAPI(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We got {results.length} result</Text>
      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
      <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricer'/>
      <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
