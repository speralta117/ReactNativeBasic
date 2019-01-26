import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../../actions/eventActions';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import EventCard from './EventCard';
import ActionButton from 'react-native-action-button';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    }
  })

class EventList extends Component {

    constructor(props, context) {
        super(props, context);

        // props.navigation.addListener(
        //     'didFocus',
        //     () => {
        //         props.actions.loadEvents();
        //     }
        //   );

        setInterval(() => {
            var { events } = props;

            events.map( e => ({
                ...e, 
                timer: Date.now()
            }));
            props.actions.startCountdown(events);
        }, 1000);
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    } 

    render() {
        const { events } = this.props;

        return (
            <View style={styles.list} >
                 <FlatList                                
                    data={events} 
                    renderItem={({item}) => <EventCard event={item}/>}
                    keyExtractor= {item => item.id}
                />

                <ActionButton 
                    onPress = {this.handleAddEvent}  
                    buttonColor ="rgba(231, 76, 60, 1)"  
                />
            </View>           
        );
    }
}

EventList.propTypes = {
    events: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);