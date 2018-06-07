import React from 'react'
import {View} from 'react-native'
import {Text, Button} from 'react-native-elements'
import {FormLabel, FormInput, FormValidationMessage}
    from 'react-native-elements'

class FilledInQuestionEditor extends React.Component {
    static navigationOptions = { title: "Filled In"}
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            points: 0,
            variables: ''
        }
    }
    updateForm(newState) {
        this.setState(newState)
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

                <FormLabel>FillInQuestion</FormLabel>
                <FormInput onChangeText={
                    text => this.updateForm({variables: text})
                }/>

                <Button	backgroundColor="blue"
                           color="white"
                           title="Submit"/>
                <Button	backgroundColor="red"
                           color="white"
                           title="Cancel"
                           onPress={() =>
                               this.props.navigation.navigate("Questions")}/>

            </View>
        )
    }
}

export default FilledInQuestionEditor