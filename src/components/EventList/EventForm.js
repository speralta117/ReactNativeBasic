import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActions from '../../actions/eventActions';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime } from '../../api/api';
import uuid from 'uuid'; 

const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
});

class EventForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
        };
    }

    handleAddPress = () => { 
       
        this.props.actions.addEvent(this.state);
        this.props.navigation.navigate('list');
    };

    handleChangeTitle = (text) => {
        const uuidv1 = require('uuid/v1');
        this.setState({
            id: uuidv1(),
            title: text,
        });
    }

    handleDatePress = () => {
        this.setState({
            showDatePicker: true
        });
    }

    handleDatePicked = (date) => {
        this.setState({
            date
        });

        this.handleDatePickerHide();        
    }

    handleDatePickerHide = () => {
        this.setState({
            showDatePicker: false
        });
    }

    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: '#F3F3F3' }}
            >
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text}
                        placeholder='Event Title'
                        spellCheck={false}
                        value={this.state.title}
                        onChangeText={this.handleChangeTitle}

                    />
                    <TextInput
                        style={[styles.text, styles.borderTop]}
                        placeholder='Event Date'
                        spellCheck={false}
                        value={this.state.date ? formatDateTime(this.state.date.toString()): ''}
                        editable={!this.state.showDatePicker}
                        onFocus={this.handleDatePress}
                    />
                    <DateTimePicker
                        isVisible={this.state.showDatePicker}
                        mode="datetime"
                        onConfirm={this.handleDatePicked}
                        onCancel={this.handleDatePickerHide}
                    />
                </View>
                <TouchableHighlight
                    onPress={this.handleAddPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    // const courseId = ownProps.params.id; //from the path `/course/:id`

    let event = { id: '', title: '', date: '' };

    // if(courseId && state.courses.length > 0){
    //     course = getCourseById(state.courses, courseId);
    // }

    return {
        event
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);