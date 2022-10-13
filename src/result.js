const mongoose = require('mongoose')

const Result = mongoose.model('result', {
    tipEvaluare: {
        type: String
    },
    dataEvaluare: {
        type: String
    },
    numeCursant: {
        type: String
    },
    gradCursant: {
        type: String
    },
    nota: {
        type: String
    }
})

module.exports = Result