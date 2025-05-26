import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BootSplash from "react-native-bootsplash";
import GlobalProvider from './src/Provider/GlobalProvider';
import Todos from './src/components/toDos/Todos';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import AppStack from './src/stacks/AppStatc';

function App(): React.ReactElement {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      {/* <MainSrens/> */}
      {/* <Todos/> */}
       <AppStack/>
    </SafeAreaView>

  );
}

export default gestureHandlerRootHOC(App);