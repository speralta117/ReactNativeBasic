import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadEvents } from './actions/eventActions';
import EventList from './components/EventList/EventList';


const store = configureStore();
// const events = require('../data/db.json').events.map(e => ({
//   ...e,
//   date: new Date(e.date)
// }));
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
            <View>
              <EventList />
            </View>
          </SafeAreaView>          
        </Provider>
      );
    }
  }

registerRootComponent(App);