import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadEvents } from './actions/eventActions';
import AppContainer from './components/Navigator/Navigator';


const store = configureStore();
store.dispatch(loadEvents());

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  }
})

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <SafeAreaView style={styles.safeArea}>
            <View style={{flex: 1}}>
              <AppContainer />
            </View>
          </SafeAreaView>          
        </Provider>
      );
    }
  }

registerRootComponent(App);