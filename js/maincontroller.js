var app=angular.module('myApp', []);
    app.controller('maincontroller', function($scope,$http) {
    $scope.name = "John";
    $scope.dob = 1552104170555;
    $scope.candidate = {};
    $scope.confirmPassword = "";
    $scope.signUpCandidate = function(){
        $scope.candidate.age_grp = "25-30";
        /*if($scope.candidate.gender === "male") {
            $scope.candidate.gender = 'm';
        }*/
        var url = 'http://10.177.7.29:8083/v1/gameUp/signUp', data = $scope.candidate ,config='JSONP';
        $http.post(url, data, config).then(function (response) {
            console.log("ghar challo");
        }, function (response) {
            console.log("chud gya");
        });
        console.log($scope.candidate);
    }
});