(function(module) {
try {
  module = angular.module('myAzon');
} catch (e) {
  module = angular.module('myAzon', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('products/views/show.html',
    '');
}]);
})();
