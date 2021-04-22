const game = {
    curentQuestion: 0,
    correctAnswersCounter: 0,

    init() {
        console.log('Рады приветствовать Вас в нашей игре!\nДля начала игры введите game.start()');
    },

    start() {
        for (let question of questions) {
            console.clear();

            console.log(
                question.text + '\n\n' + 
                'a:  ' + question.a + '\n' +
                'b:  ' + question.b + '\n' +
                'c:  ' + question.c + '\n' +
                'd:  ' + question.d + '\n'
            );

            let answer = this.checkAnswer();

            if (answer === null) break;

            if (answer === question.answer) {
                this.correctAnswersCounter++;
            }
        }

        console.clear();
        console.log('Игра окончена\nВаш счёт: ' + this.correctAnswersCounter);
    },

    checkAnswer() {
        let answer = prompt('Введите букву, соответствующую правильному ответу (a, b, c или d)', '');

        if (answer === null || answer === '') return null;

        answer = answer.toLowerCase();

        if (answer == 'a' || answer == 'b' || answer == 'c' || answer == 'd') {
            return answer;
        } else {
            return this.checkAnswer();
        }
    }
}

game.init();