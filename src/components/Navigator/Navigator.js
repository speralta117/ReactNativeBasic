import React from 'react';
import EventList from '../EventList/EventList';
import EventForm from '../EventList/EventForm';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
    list: {
      screen: EventList,
      navigationOptions: () => ({
        title: 'Your Events',
        headerForceInset: { top: 'never', bottom: 'never' }
      })
    },
    form: {
        screen: EventForm,
        navigationOptions: () => ({
            title: 'Add an event',
            headerForceInset: { top: 'never', bottom: 'never' }
        })
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;