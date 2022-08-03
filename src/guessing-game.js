class GuessingGame {
    constructor() {
        this.name = 'GuessingGame';
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        if (this.min === this.max) {
            return;
        }

        this.middle = Math.ceil((this.min + this.max) / 2);
        this.targetNumber = this.middle;

        return this.targetNumber;
    }

    lower() {
        this.max = this.middle;
        this.setRange(this.min, this.max);
    }

    greater() {
        this.min = this.middle;
        this.setRange(this.min, this.max);
    }
}

module.exports = GuessingGame;

// const number = 998;
// const game = new GuessingGame();
// game.setRange(0, 6118);

// let result = game.guess();
// console.log('result =', result);

// game.lower();
// result = game.guess();
// console.log('result =', result);

// game.lower();
// result = game.guess();
// console.log('result =', result);

// game.greater();
// result = game.guess();
// console.log('result =', result);

// game.lower();
// result = game.guess();
// console.log('result =', result);

// game.greater();
// result = game.guess();
// console.log('result =', result);

// game.lower();
// result = game.guess();
// console.log('result =', result);

// game.lower();
// result = game.guess();
// console.log('result =', result);

// game.greater();
// result = game.guess();
// console.log('result =', result);

// game.greater();
// result = game.guess();
// console.log('result =', result);

// game.lower();
// result = game.guess();
// console.log('result =', result);

// game.greater();
// result = game.guess();
// console.log(`\nactual result = ${result} is ${result === number ? 'EQUAL' : 'NOT equal'} expected result = ${number}`);

// function binary_search(A, n, T) is
//     L := 0
//     R := n − 1
//     while L ≤ R do
//         m := floor((L + R) / 2)
//         if A[m] < T then
//             L := m + 1
//         else if A[m] > T then
//             R := m − 1
//         else:
//             return m
//     return unsuccessful
