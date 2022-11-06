// @ts-nocheck
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    return (
        <View style={styles.main}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errMessage ? <Text>{errMessage}</Text> : null}
            <Text>Found {results.length} results</Text>
            <ResultsList />
            <ResultsList />
            <ResultsList />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
    },
});
