angular.module('starter.controllers', ['starter.services'])
    .controller('VrCntl', function ($scope, $stateParams, $state) {
        console.log($stateParams.dataUrl);
        $scope.lastPhoto = $stateParams.dataUrl;
    });
    
    
//        .controller('', function ($scope, $stateParams, $state) {
//         console.log($stateParams.dataUrl);
//         $scope.lastPhoto = $stateParams.dataUrl;
//     })
// (function() {
//     document.getElementsByClassName('a-enter-vr-button').style.display = 'none';
// });