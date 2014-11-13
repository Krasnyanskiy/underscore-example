

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
        sortBy('name');
    };


    $scope.sortByAge = function () {
        sortBy('age');
    };


    $scope.sortByHonor = function () {
        sortBy('honor');
    };


    $scope.sortByGrade = function () {
        sortBy('grade');
    };


    $scope.ageStatistic = function () {
        var stat = _.countBy(students, 'age');
        $scope.ageStatistic = _.each(stat, function (k, v) { // fixme: replace each _.with _.map
            stat[toWords(v)] = k;
            delete stat[v];
        });
    };


    /**
     * sorts users and stores the result in the $scope
     * sort option could be [grade, name, age, honor]
     * @param option {string}
     */
    function sortBy(option) {
        if (isReversible) {
            $scope.students = _.sortBy(students, option);
            isReversible = false;
        } else {
            $scope.students = _.sortBy(students, option).reverse();
            isReversible = true;
        }

    }


    /**
     * fills the storage with random data
     */
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
