export class QuestionModel {
  question: string = '';
  answers: Array<Answer> = [];
  correctAnswer: string = '';
  key: string = '';

  constructor(data: Partial<QuestionModel> = {}) {
    Object.assign(this, data);
  }
}

export class Answer {
  key: string = '';
  content: string = '';

  constructor(data: Partial<Answer> = {}) {
    Object.assign(this, data);
  }
}

export const GeneralQuiz = {
  title: ['General Quiz'],
  questions: [
    new QuestionModel({
      question: 'What language do you use with libraries such as React and Angular?',
      answers: [
        new Answer({
          key: 'answer1',
          content: 'PHP'
        }),
        new Answer({
          key: 'answer2',
          content: 'JAVA'
        }),
        new Answer({
          key: 'answer3',
          content: 'JavaScript'
        }),
        new Answer({
          key: 'answer4',
          content: 'Python'
        }),
      ],
      correctAnswer: 'answer1',
      key: '1A'
    }),
    new QuestionModel({
      question: 'What markup language to you use to build a web page?',
      answers: [
        new Answer({
          key: 'answer1',
          content: 'HTML'
        }),
        new Answer({
          key: 'answer2',
          content: 'JAVA'
        }),
        new Answer({
          key: 'answer3',
          content: 'Python'
        }),
        new Answer({
          key: 'answer4',
          content: 'C'
        }),
      ],
      correctAnswer: 'answer1',
      key: '2A'
    }),
    new QuestionModel({
      question: 'Which one of these is a way to store multiple values in a single var',
      answers: [
        new Answer({
          key: 'answer1',
          content: 'string'
        }),
        new Answer({
          key: 'answer2',
          content: 'array'
        }),
        new Answer({
          key: 'answer3',
          content: 'number'
        }),
        new Answer({
          key: 'answer4',
          content: 'boolean'
        }),
      ],
      correctAnswer: 'answer2',
      key: '3A'
    }),
    new QuestionModel({
      question: 'How do you indicate values are not equal in JavaScript',
      answers: [
        new Answer({
          key: 'answer1',
          content: '==='
        }),
        new Answer({
          key: 'answer2',
          content: '=>'
        }),
        new Answer({
          key: 'answer3',
          content: '!=='
        }),
        new Answer({
          key: 'answer4',
          content: '<='
        }),
      ],
      correctAnswer: 'answer3',
      key: '4A'
    })
  ]
};


export const HtmlQuiz = {
  title: ['HTML Quiz'],
  questions: [
    new QuestionModel({
      question: 'What would be the best tag to use for a title in HTML?',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<p>'
        }),
        new Answer({
          key: 'answer2',
          content: '<h1>'
        }),
        new Answer({
          key: 'answer3',
          content: '<a>'
        }),
        new Answer({
          key: 'answer4',
          content: '<div>'
        }),
      ],
      correctAnswer: 'answer2',
      key: '1B'
    }),
    new QuestionModel({
      question: 'What tag is used to display a jpg file?',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<h1>'
        }),
        new Answer({
          key: 'answer2',
          content: '<p>'
        }),
        new Answer({
          key: 'answer3',
          content: '<img>'
        }),
        new Answer({
          key: 'answer4',
          content: '<C>'
        }),
      ],
      correctAnswer: 'answer3',
      key: '2B'
    }),
    new QuestionModel({
      question: 'Which one of these tag is used to contain other HTML element',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<div>'
        }),
        new Answer({
          key: 'answer2',
          content: '<a>'
        }),
        new Answer({
          key: 'answer3',
          content: '<img>'
        }),
        new Answer({
          key: 'answer4',
          content: '<h2>'
        }),
      ],
      correctAnswer: 'answer1',
      key: '3B'
    }),
    new QuestionModel({
      question: 'Which elemnt is used for a paragraph text?',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<h1>'
        }),
        new Answer({
          key: 'answer2',
          content: '<a>'
        }),
        new Answer({
          key: 'answer3',
          content: '<body>'
        }),
        new Answer({
          key: 'answer4',
          content: '<p>'
        }),
      ],
      correctAnswer: 'answer4',
      key: '4B'
    }),
    new QuestionModel({
      question: 'Which tag is used for an unordered list?',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<ol>'
        }),
        new Answer({
          key: 'answer2',
          content: '<ul>'
        }),
        new Answer({
          key: 'answer3',
          content: '<li>'
        }),
        new Answer({
          key: 'answer4',
          content: '<dl>'
        }),
      ],
      correctAnswer: 'answer2',
      key: '5B'
    }),
    new QuestionModel({
      question: 'Which elemtn is used for a paragraph text?',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<h1>'
        }),
        new Answer({
          key: 'answer2',
          content: '<a>'
        }),
        new Answer({
          key: 'answer3',
          content: '<body>'
        }),
        new Answer({
          key: 'answer4',
          content: '<p>'
        }),
      ],
      correctAnswer: 'answer4',
      key: '6B'
    }),
    new QuestionModel({
      question: 'Which elemtn is used for a paragraph text?',
      answers: [
        new Answer({
          key: 'answer1',
          content: '<h1>'
        }),
        new Answer({
          key: 'answer2',
          content: '<a>'
        }),
        new Answer({
          key: 'answer3',
          content: '<body>'
        }),
        new Answer({
          key: 'answer4',
          content: '<p>'
        }),
      ],
      correctAnswer: 'answer4',
      key: '7B'
    }),
  ]
};


export const MetalQuiz = {
  title: ['Metal Quiz'],
  questions: [
    new QuestionModel({
      question: 'Quien es considerado como el rey de las tinieblas?',
      answers: [
        new Answer({
          key: 'answer1',
          content: 'maluma'
        }),
        new Answer({
          key: 'answer2',
          content: 'Elvis Presley'
        }),
        new Answer({
          key: 'answer3',
          content: 'Jimmy Hendrix'
        }),
        new Answer({
          key: 'answer4',
          content: 'Ozzy Osburne'
        }),
      ],
      correctAnswer: 'answer4',
      key: '1C'
    }),
    new QuestionModel({
      question: 'Cual es la banda de metal que tiene un nombre de un personaje de Marvel?',
      answers: [
        new Answer({
          key: 'answer1',
          content: 'Black Sabbath'
        }),
        new Answer({
          key: 'answer2',
          content: 'Luciferian'
        }),
        new Answer({
          key: 'answer3',
          content: 'Venom'
        }),
        new Answer({
          key: 'answer4',
          content: 'Opeth'
        }),
      ],
      correctAnswer: 'answer3',
      key: '2C'
    }),
    new QuestionModel({
      question: 'Cual de las siguientes bandas, es de latinoamerica',
      answers: [
        new Answer({
          key: 'answer1',
          content: 'Sepultura'
        }),
        new Answer({
          key: 'answer2',
          content: 'Brujeria'
        }),
        new Answer({
          key: 'answer3',
          content: 'Imagine Dragons'
        }),
        new Answer({
          key: 'answer4',
          content: 'Parabellum'
        }),
      ],
      correctAnswer: 'answer1',
      key: '3C'
    }),
  ]
};
