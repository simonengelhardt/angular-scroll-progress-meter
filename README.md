angular-scroll-progress-meter
=============================

A simple AngularJS directive to update the width CSS property of an element based on scroll position within another element.


Dependencies
------------

* jQuery
* Lo-Dash (or Underscore)

Probably only really useful if you happen to be using these frameworks in your project. If not, you may be better of rolling your own to avoid somewhat large dependencies for just a little functionality (for now, at least).


Instructions
------------

1. Install package with Bower: `bower install --save simonengelhardt/angular-scroll-progress-meter`
2. Include the JavaScript file `scroll-progress-meter.js`
3. Attach directive to element for which to track scroll progress (could be `<body>`) with an attribute value containing the selector for the progress meter element: `<div se-scroll-progress-meter=".progress .meter">`


Notes
-----

The progress bar width starts at 100% and goes toward 0% as you scroll down, essentially tracking reading (not scrolling) progress (but that would have been a weird name). This was the use case for the project, where this little directive was born, but [should be reversible by configuration](https://github.com/SimonEngelhardt/angular-scroll-progress-meter/issues/2).

I made this to be used in a top-fixed floating navigation, indicating reading progress for different sections throughout the page. As such, the directive will assume that if the progress meter is contained in an element with `position: fixed`, the "scroll top" is actually below the fixed container.

The directive could be used with any or no CSS framework for styling your progress bars. I used [Zurb Foundation](http://foundation.zurb.com/docs/components/progress_bars.html), but Bootstrap or anything else should work just fine.


Example
-------

I [will create](https://github.com/SimonEngelhardt/angular-scroll-progress-meter/issues/1) a stand-alone example eventually. For now, you can see a live example on [my résumé](http://simon.engelhardt.io/resume/), so feel free to give it a scroll.
