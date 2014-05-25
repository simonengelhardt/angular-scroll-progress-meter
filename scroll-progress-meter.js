// Scroll progress meter directive - requires jQuery and Lo-Dash (or Underscore)
angular.module('simonengelhardt.scroll-progress-meter', [])
  .directive('seScrollProgressMeter', ['$window', function($window) {

    //FIXME: Make FPS configurable
    var fps = 30;

    return function(scope, element, attr) {
      var meter = angular.element(attr.seScrollProgressMeter);

      // Created handler throttled to desired FPS
      var throttledHandler = _.throttle(function() {
        var top = element.offset().top;
        var bottom = top + element.outerHeight();

        var scrollTop = angular.element($window).scrollTop();

        // Account for height of meter element's offset parent if it is currently in a fixed position (used when meter is in a fixed navigation bar, for example)
        var meterOffsetParent = meter.offsetParent();
        if (meterOffsetParent.css('position') === 'fixed') {
          scrollTop = scrollTop + meterOffsetParent.outerHeight();
        }

        // Calculate progress
        var progress = ((bottom - scrollTop)/(bottom - top)) * 100;

        // Keep within sensible percentage bounds (especially necessary for inertia scroll around edges)
        if (progress > 100) progress = 100;
        else if (progress < 0) progress = 0;

        // Update meter element CSS width property
        meter.css('width', progress + '%');
      }, 1000/fps);

      // Attach throttled handler to scroll and resize events
      angular.element($window).on('scroll resize', throttledHandler);
    }
  }]);
