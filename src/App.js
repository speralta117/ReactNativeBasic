import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { View } from 'react-native';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadEventsSuccess } from './actions/eventActions';
import EventList from './components/EventList/EventList';


const store = configureStore();
const events = require('../data/db.json').events;
store.dispatch(loadEventsSuccess(events));

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <View>
            <EventList />
          </View>
        </Provider>
      );
    }
  }

registerRootComponent(App);