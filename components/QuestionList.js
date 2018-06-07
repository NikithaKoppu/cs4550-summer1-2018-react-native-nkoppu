import React, {Component} from 'react'
import {View, Alert} from 'react-native'
import {Text, ListItem} from 'react-native-elements'

class QuestionList extends Component {
    static navigationOptions = {title: 'Questions'}
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            examId: 1
        }
    }
    componentDidMount() {
        const {navigation} = this.props;
        const examId = navigation.getParam("examId")
        //move to question.service.client
        fetch("http://10.110.137.178:8080/api/exam/"+examId+"/question")
            .then(response => (response.json()))
            .then(questions => this.setState({questions}))
    }

    render() {
        return(
            <View style={{padding: 15}}>
                <Button backgroundColor='red'
                        title='Add Question'/>
                {this.state.questions.map(
                    (question, index) => (
                        <ListItem
                            onPress={() => {
                                if(question.type === "TrueFalse")
                                    this.props.navigation
                                        .navigate("True False", {questionId: question.id})
                                if(question.type === "MultipleChoice")
                                    this.props.navigation
                                        .navigate("Multiple Choice", {questionId: question.id})
                                if(question.type === "FilledIn")
                                    this.props.navigation
                                        .navigate("Filled In", {questionId: question.id})
                                if(question.type === "Essay")
                                    this.props.navigation
                                        .navigate("Essay", {questionId: question.id})
                            }}
                            key={index}
                            subtitle={question.description}
                            title={question.title}/>))}
            </View>
        )
    }
}
export default QuestionList