import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


const SearchBar = ()=>{
    return <View style={styles.background}>
        <Text>Search bar</Text>
    </View>
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEF6',
        height: 50,
        marginHorizontal: 10,
        borderRadius: 5
    }
})
export default SearchBar