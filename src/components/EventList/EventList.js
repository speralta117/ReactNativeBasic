import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../../actions/eventActions';
import { FlatList, Text } from 'react-native';

class EventList extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { events } = this.props;

        return (
            <FlatList 
                data={events} 
                renderItem={({item}) => <Text>{item.title}</Text>}
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

export default connect(mapStateToProps)(EventList);