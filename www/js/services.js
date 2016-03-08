angular.module('starter.services', ['ionic'])

.factory('Camera', ['$q', function($q) {
 
  return {
    getPicture: function(options) {
      var q = $q.defer();
      
      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);
      
      return q.promise;
    }
  }
}])

 .service('MyStateManager', ['$state', '$stateParams', '$rootScope', function($state, $stateParams, $rootScope)
{
    this.go = function(state, params, options)
    {
        var destroyListener = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams)
        {
            ionic.extend(true, toParams, params);
            destroyListener();
        });

        return $state.go(state, params, options);
    };
}]);

