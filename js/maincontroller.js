var app=angular.module('myApp', []);
    app.controller('maincontroller', function($scope,$http) {
    $scope.candidate = {};
    $scope.confirmPassword = "";
    $scope.errorMsgShow = false;
    $scope.names = ["Male", "Female", "Other"];
    $scope.agegrp = ["15-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46-50", "51-55"];
    $scope.signUpCandidate = function(){
        if($scope.candidate.gender === "Male") {
            $scope.candidate.gender = 'm';
        }
        else if($scope.candidate.gender === "Female"){
            $scope.candidate.gender = 'f';
        }
        else if($scope.candidate.gender === "Other"){
            $scope.candidate.gender = 'o';
        }
        $scope.candidate.dob = null;
        if($scope.candidate.password !== $scope.confirmPassword) {
            $scope.errorMsgShow = true;
            return;
        }
        var url = 'http://10.177.7.29:8083/v1/gameUp/signUp', data = $scope.candidate ,config='JSON';
        $http.post(url, data, config).then(function (response) {
            console.log("ghar challo");
        }, function (response) {
            console.log("chud gya");
        });
        console.log($scope.candidate);
    }
});