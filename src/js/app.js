'use strict';

var app = angular.module('SortingApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {

    var isReversible = false,
        students = [],
        names = [
            'Aaron', 'Abdul', 'Conrad', 'Gus', 'Rodolfo',
            'Levi', 'Rusty', 'Sam', 'Said', 'Rupert',
            'Tex', 'Jeff', 'Tito', 'Brad', 'Ed',
            'Jesus', 'Terrel', 'Nick', 'Monty', 'Alicia'
        ];


    function Student(name, age, honor, grade) {
        this.name = name;
        this.age = age;
        this.honor = honor;
        this.grade = grade;
    }


    (function init() {
        populate();
        $scope.students = students;
    })();


    $scope.sortByName = function () {
        if (isReversible) {
            $scope.students = _.sortBy(students, 'name');
            isReversible = false;
        } else {
            $scope.students = _.sortBy(students, 'name').reverse();
            isReversible = true;
        }
    };


    $scope.sortByAge = function () {
        if (isReversible) {
            $scope.students = _.sortBy(students, 'age');
            isReversible = false;
        } else {
            $scope.students = _.sortBy(students, 'age').reverse();
            isReversible = true;
        }
    };


    $scope.sortByHonor = function () {
        if (isReversible) {
            $scope.students = _.sortBy(students, 'honor');
            isReversible = false;
        } else {
            $scope.students = _.sortBy(students, 'honor').reverse();
            isReversible = true;
        }
    };


    $scope.sortByGrade = function () {
        if (isReversible) {
            $scope.students = _.sortBy(students, 'grade');
            isReversible = false;
        } else {
            $scope.students = _.sortBy(students, 'grade').reverse();
            isReversible = true;
        }
    };


    $scope.ageStatistic = function () {
        var stat = _.countBy(students, 'age');

        // fixme: replace each _.with _.map

        $scope.ageStatistic = _.each(stat, function (k, v) {
            stat[toWords(v)] = k;
            delete stat[v];
        });
    };


    function populate() {
        var age, name, honor, max, grade;
        for (var i = 0; i < 11; i++) {
            age = Math.floor(Math.random() * (22 - 17) + 17);
            name = names[Math.floor(Math.random() * names.length)];
            honor = ['true', 'false'][Math.round(Math.random())];
            max = ((honor) ? 400 : 100);
            grade = Math.random() * (100 - max) + max;
            students.push((new Student(name, age, honor, grade)));
        }
    }
}]);
