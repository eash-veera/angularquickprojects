(function() {
  'use strict';

  angular
    .module('projectUsingYoGulpAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
