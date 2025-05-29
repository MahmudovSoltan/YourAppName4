import React, { useState, memo } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Ayrı komponentlər
const FirstRoute = memo(() => (
  <View style={styles.scene}>
    <Text>First Route</Text>
  </View>
));

const SecondRoute = memo(() => (
  <View style={styles.scene}>
    <Text>Second Route</Text>
  </View>
));

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
];

const DetailScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Detail Screen</Text>
      <Button title="Geri Qayıt" onPress={() => navigation.goBack()} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={styles.indicator}
            labelStyle={styles.label}
          />
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sceneContainer: {
    backgroundColor: '#fff',
  },
  tabBar: {
    // backgroundColor: '#f0f0f0',
    marginTop: 10,
  },
  indicator: {
    backgroundColor: '#000',
  },
  label: {
    color: '#000',
    fontWeight: 'bold',
  },
});
