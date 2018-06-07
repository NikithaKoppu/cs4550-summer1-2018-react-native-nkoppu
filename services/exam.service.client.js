import 'es6-symbol/implement'

const WIDGET_API_URL =
    'http://10.110.137.178:8080/api/lesson/LID/exam';
const ALL_WIDGETS_API_URL =
    'http://localhost:8080/api/exam';

let _singleton = Symbol();
class ExamService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ExamService(_singleton);
        return this[_singleton]
    }

    createWidget(lessonId, widget) {
        return fetch(WIDGET_API_URL.replace('LID', lessonId),
            {
                body: JSON.stringify(widget),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    updateWidget(widgetId, widget) {
        return fetch(ALL_WIDGETS_API_URL + '/' + widgetId, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response) {
            return response;
        });
    }

    findWidgetById(widgetId) {
        return fetch(
            ALL_WIDGETS_API_URL + '/' + widgetId)
            .then(function(response) {
                return response.json();
            });
    }

    deleteWidget(widgetId) {
        return fetch(ALL_WIDGETS_API_URL + '/' + widgetId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }

    findAllWidgets() {
        return fetch(ALL_WIDGETS_API_URL).then(function (response) {
            return response.json();
        })
    }

    findAllWidgetsForLesson(lessonId) {
        return fetch(
            WIDGET_API_URL
                .replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }
}

export default ExamService;