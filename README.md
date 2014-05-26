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

I made this to be used in a top-fixed floating navigation, indicating reading progress for different sections throughout the page. As such, the directive will assume that if the progress meter is contained in an element with `position: fixed`, the "scroll top" is actually below the fixed container.


Example
-------

I [will create](https://github.com/SimonEngelhardt/angular-scroll-progress-meter/issues/1) a stand-alone example eventually. For now, you can see a live example on [my résumé](http://simon.engelhardt.io/resume/), so feel free to give it a scroll.