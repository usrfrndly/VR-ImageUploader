// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

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

.controller('ThisCtrl', doGetGalleryPhoto);

//   var options = {
//    maximumImagesCount: 10,
//    width: 800,
//    height: 800,
//    quality: 80
//   };

//   $cordovaImagePicker.getPictures(options)
//     .then(function (results) {
//       for (var i = 0; i < results.length; i++) {
//         console.log('Image URI: ' + results[i]);
//       }
//     }, function(error) {
//       // error getting photos
//     });
// });

/**
 * displays the photo gallery for the user to select an image to
 * work with
 */
function doGetGalleryPhoto() {
    CameraService.getPicturesFromGallery().then(function (imageURI) {
        console.log(imageURI);
        vm.lastPhoto = imageURI;
        vm.newPhoto = true;
    }, function (err) {
        console.log(err);
        vm.newPhoto = false;
        alert("Buddy Connector", "Error Getting Photo " + err);
    });
}