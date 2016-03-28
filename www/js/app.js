// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.services', 'starter.controllers', 'ui.router'])
    .config(function($compileProvider, $stateProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
        $stateProvider
            .state('start', {
                url: '/',
                controller: 'ThisCtrl',
                templateUrl: 'index.html'
            })
            .state('which_mode', {
                url: '/which_mode',
                params: {
                    dataUrl: ""
                },
                controller: 'WhichCntl',
                templateUrl: 'templates/which_mode.html',
            })
            .state('vr_mode', {
                url: '/vr_mode',
                params: {
                    lastPhoto: ""
                },
                controller: 'VrCntl',
                templateUrl: 'templates/vr_mode.html',
            })
            .state('handheld_mode', {
                url: 'handheld_mode',
                params: {
                    lastPhoto: ""
                },
                controller: 'HandheldCntl',
                templateUrl: 'templates/handheld_mode.html',

            })
    })
    // .run(function($ionicPlatform) {
    //   $ionicPlatform.ready(function() {
    //     if(window.cordova && window.cordova.plugins.Keyboard) {
    //       // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    //       // for form inputs)
    //       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

    //       // Don't remove this line unless you know what you are doing. It stops the viewport
    //       // from snapping when text inputs are focused. Ionic handles this internally for
    //       // a much nicer keyboard experience.
    //       cordova.plugins.Keyboard.disableScroll(true);
    //     }
    //     if(window.StatusBar) {
    //       StatusBar.styleDefault();
    //     }
    //   });
    // })
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })



    .controller('ThisCtrl', function($scope, Camera, $state, MyStateManager) {
        
        $scope.doGetGalleryPhoto = function() {
            //     navigator.camera.getPicture().then(function(imageURI) {
            //       console.log(imageURI);
            //       $scope.lastPhoto = imageURI;
            //     }, function(err) {
            //       console.err(err);
            //     }, {
            //        quality: 80,
            //     destinationType: navigator.camera.DestinationType.FILE_URI,
            //         sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
            //         allowEdit: false,
            //         encodingType: navigator.camera.EncodingType.JPEG,
            //         saveToPhotoAlbum: false
            //     });
            //   };
            navigator.camera.getPicture(function(imageURI) {
                console.log(imageURI);
                var image = document.getElementById('myThing');
                $scope.lastPhoto = imageURI;
               // MyStateManager.go('vr_mode', { dataUrl: imageURI });
               MyStateManager.go('which_mode', { dataUrl: imageURI });
                console.log(MyStateManager);

                // debugger;
            }, function(err) { alert('Failed because: ' + err); }, {
                    quality: 80,
                    destinationType: navigator.camera.DestinationType.FILE_URI,
                    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: false,
                    encodingType: navigator.camera.EncodingType.JPEG,
                    saveToPhotoAlbum: false
                });
                        // $scope.$on('$ionicView.enter', function () {
                        //     $scope.doGetGalleryPhoto();
                        // });







        }
    });






