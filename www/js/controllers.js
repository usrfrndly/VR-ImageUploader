angular.module('starter.controllers', ['starter.services'])
    .controller('VrCntl', function($scope, $stateParams, $state) {
        console.log($stateParams.lastPhoto);
        console.log($stateParams.dataUrl);

        $scope.lastPhoto = $stateParams.lastPhoto;
        $scope.$on('$ionicView.enter', function() {
            document.getElementsByClassName('a-enter-vr-button')[0].click();

        });
    })
    .controller('HandheldCntl', function($scope, $stateParams, $state, MyStateManager) {
        console.log($stateParams.lastPhoto);
        $scope.lastPhoto = $stateParams.lastPhoto;
        $scope.$on('$ionicView.enter', function() {
            angular.element(document.getElementsByClassName('a-enter-vr-button')[0]).css('display', 'none');

        });
        $scope.$on('$ionicView.afterEnter', function() {
            document.getElementsByTagName('body')[0].addEventListener("click", function() {
                MyStateManager.go('which_mode', { dataUrl: $scope.lastPhoto });


            });



        });
    })

    .controller('WhichCntl', function($scope, $stateParams, $state, $sce, MyStateManager) {
        console.log($stateParams.dataUrl);
        $scope.lastPhoto = $stateParams.dataUrl;
        $scope.VrClicked = function() {
            // MyStateManager.go('vr_mode', { dataUrl: imageURI });
            MyStateManager.go('vr_mode', { lastPhoto: $scope.lastPhoto });
            console.log(MyStateManager);
        };
        $scope.HandheldClicked = function() {
            MyStateManager.go('handheld_mode', { lastPhoto: $scope.lastPhoto });
            console.log(MyStateManager);
        };

    });
    


 