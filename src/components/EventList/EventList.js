import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../../actions/eventActions';
import { FlatList, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
      flex: 1
    }
  })

class EventList extends Component {

    constructor(props, context) {
        super(props, context);

        setInterval(() => {
            var { events } = props;

            events.map( e => ({
                ...e, 
                timer: Date.now()
            }));
            props.actions.startCountdown(events);
        }, 1000);
    }

    render() {
        const { events } = this.props;

        return (
            <FlatList 
                data={events} 
                renderItem={({item}) => <EventCard event={item}/>}
                keyExtractor= {item => item.id}
            />
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