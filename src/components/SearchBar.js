import React from "react";
import { View, StyleSheet, Text, TextInput} from "react-native";
import {Feather} from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmitted})=>{
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
        style={styles.inputStyle} 
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText = {(onTermChange)}
        onEndEditing={(onTermSubmitted)}/>
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'rgb(150, 219, 237)',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        margin: 10
    },
    inputStyle:{
        fontSize: 20,
        flex: 1,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
})
export default SearchBar