import 'es6-symbol/implement'

let _singleton = Symbol();
const EXAM_API_URL = 'http://10.110.137.178:8080/api/exam/EID';

class QuestionService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new QuestionService(_singleton);
        return this[_singleton]
    }

    findAllQuestionsForExam(examId) {
        return fetch(EXAM_API_URL.replace('EID', examId) + "/question")
            .then(function(response){
                return response.json();
            });
    }

    deleteQuestion(quesId) {
        return fetch("http://10.110.137.178:8080/api/question" + '/' + quesId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    createQuestionEssay(examId, question) {
        return fetch(EXAM_API_URL.replace('EID',examId)+"/essay", {
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    createQuestionMC(examId, question) {
        return fetch(EXAM_API_URL.replace('EID',examId)+"/choice", {
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    createQuestionFilled(examId, question) {
        return fetch(EXAM_API_URL.replace('EID',examId)+"/blanks", {
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}

    createQuestionTF(examId, question) {
        return fetch(EXAM_API_URL.replace('EID',examId)+"/truefalse", {
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}


}
export default QuestionService;
