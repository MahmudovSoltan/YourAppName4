import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { useGlobalContext } from '../../../Provider/GlobalProvider';
import FeedBackForm from './FeedBackForm';
import { FlashList } from '@shopify/flash-list';

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
            <FlashList
                data={product}
                renderItem={renderItem}
                ListHeaderComponent={<FeedBackForm />}
               estimatedItemSize={100}
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
    emptyItem: { fontSize: 16, textAlign: 'center', fontFamily: "Inter" }
});
