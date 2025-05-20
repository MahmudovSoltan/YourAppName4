import { View, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import UserList from '../components/Products/userList';
import { useGlobalContext } from '../Provider/GlobalProvider';
import FeedBackList from '../components/Products/feedBackList/FeedBackList';
import FeedBackForm from '../components/Products/feedBackList/FeedBackForm';
const MainSrens = () => {
    const { isDarkMode } = useGlobalContext();
    const backgroundStyle = {
        backgroundColor: isDarkMode ? "#000" : "#fff",
        flex: 1,
    };
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={[backgroundStyle, styles.container]}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />

                {/* <UserList /> */}
              
                <FeedBackList />

            </SafeAreaView>
        </View>
    )
}

export default MainSrens

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:  20,
    },
});
