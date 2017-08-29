angular.module('app').controller('mainCtrl', function($scope, $window){
    $scope.history = [];
    $scope.dice = []
    $scope.correctGuesses = 0
    $scope.currentGuess = ''
    $scope.sum = 0
    $scope.showAnswer = false;
    $scope.showModal = true;
    $scope.showHistory = false;
    $scope.summate = function() {
        $scope.sum = $scope.dice.reduce(function(s, v) {
            return v % 2 ? s + (v - 1) : s
        },0);
    }
    $scope.toggleModal = function() {
        $scope.showModal = !$scope.showModal;
    }
    $scope.toggleHistory = function() {
        $scope.showHistory = !$scope.showHistory;
    }
    $scope.guess = function() {
        if ($scope.currentGuess == $scope.sum){
            $scope.correctGuesses++;
        } else {
            $scope.correctGuesses = 0;
        }
        $scope.currentGuess = '';
        $scope.showAnswer = false;
        $scope.addToHistory();
        $scope.roll();
    }
    $scope.win = function() {
        console.log('WINNER');
        $window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
    }
    $scope.reset = function() {
        $scope.history = [];
        $scope.dice = []
        $scope.correctGuesses = 0
        $scope.currentGuess = ''
        $scope.sum = 0
        $scope.showAnswer = false;
        $scope.showModal = true;
        $scope.showHistory = false;
    }
    $scope.addToHistory = function() {
        $scope.history.unshift({
            answer: $scope.sum,
            dice: $scope.dice.slice()
        })
    }
    $scope.reroll = function() {
        $scope.addToHistory();        
        $scope.showAnswer = false;
        $scope.roll();
    }
    $scope.revealAnswer = function() {
        $scope.showAnswer = true;
        $scope.correctGuesses = 0;
    }
    $scope.roll = function () {
        let arr = []
        for (let i = 0; i < 5; i++){
            arr.push(~~(Math.random()*6)+1);
        }
        $scope.dice = arr;
        $scope.summate();
    }
    $scope.roll();
});