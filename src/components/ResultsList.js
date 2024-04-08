import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ResultsList = ({title, results})=>{
    return <View>
        <Text style={styles.title}>{title}</Text>
        <Text>Result: {results.length}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({item}) =>{
                return <Text>{item.name}</Text>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default ResultsList