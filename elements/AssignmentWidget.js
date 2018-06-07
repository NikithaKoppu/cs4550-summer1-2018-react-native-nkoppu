import React from 'react'
import {View} from 'react-native'
import {Text, Button, CheckBox} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'
import AssignService from "../services/assignment.service.client";

class AssignmentWidget extends React.Component {
    static navigationOptions = { title: "Assignment"}
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            points: 0,
            widget: "",
            lessonId:1
        }

        this.assignService = AssignService.instance;
    }
    updateForm(newState) {
        this.setState(newState)
    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId")
        this.setState({lessonId: lessonId});
    }

    render() {
        return(
            <View>
                <FormLabel>Title</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({title: text})
                }/>
                <FormValidationMessage>
                    Title is required
                </FormValidationMessage>

                <FormLabel>Description</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({description: text})
                }/>
                <FormValidationMessage>
                    Description is required
                </FormValidationMessage>

                <FormLabel>Essay Answer</FormLabel>
                <textarea></textarea>

                <FormLabel>Upload a file</FormLabel>
                <input type="file"></input>

                <FormLabel>Submit a Link</FormLabel>
                <input></input>

                <Button	backgroundColor="blue"
                           color="white"
                           title="Submit"
                           onPress={this.assignService.createWidget(
                               this.state.lessonId, this )}/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"
                           onPress={() =>
                               this.props.navigation.navigate("Widgets")}/>

            </View>
        )
    }
}

export default AssignmentWidget