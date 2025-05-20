import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { useGlobalContext } from '../../../Provider/GlobalProvider';
import FeedBackForm from './FeedBackForm';

const FeedBackList = () => {
    const { product } = useGlobalContext();
    const renderItem = useCallback(({ item }) => {
        return (
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 14 }}>{item.feedback}</Text>
            </View>
        )
    }, [])

    return (
        <View>
            <FlatList
                data={product}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListHeaderComponent={<FeedBackForm />}
                ListEmptyComponent={() => (
                    <View style={{ padding: 20 }}>
                        <Text style={styles.emptyItem}>No feedback available</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default FeedBackList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    emptyItem: { fontSize: 16, textAlign: 'center' }
});
