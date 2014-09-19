(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var currentLocation, mapCons, text, xs, xsMap;

text = "A train arrives at a station. A little boy and a little girl, brother and sister, are seated in a compartment face to face next to the window through which the buildings along the station platform can be seen passing as the train pulls to a stop. “Look,” says the brother, “We’re at Ladies!” “Imbecile!” replies his sister, “Can’t you see we’re at Gentlemen?”…. For these children, Ladies and Gentlemen will be henceforth two countries toward which each of their souls will strive on divergent wings.";

mapCons = function(arr, consSize) {
  var _i, _ref, _results;
  return (function() {
    _results = [];
    for (var _i = 0, _ref = arr.length - consSize; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
    return _results;
  }).apply(this).map(function(i, x) {
    return arr.slice(i, +(i + consSize - 1) + 1 || 9e9);
  });
};

document.body.style.height = "" + (text.length * 100) + "px";

xs = mapCons(text.split(''), 50);

xsMap = xs.reduce((function(hsh, x, i) {
  hsh[x] = i;
  return hsh;
}), {});

if (xsMap.hasOwnProperty((currentLocation = location.hash.replace('#/', '').split('')))) {
  window.scrollTo(0, xsMap[currentLocation] * 100);
}

document.addEventListener('scroll', function() {
  var cons;
  if (cons = xs[Math.floor(document.body.scrollTop / 100)]) {
    return history.pushState(null, null, "#/" + (cons.join('')));
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW1vbnp1Y2NvbmkvUHJvamVjdHMvQXJ0L2NvbnMvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFtb256dWNjb25pL1Byb2plY3RzL0FydC9jb25zL3NyYy9qYXZhc2NyaXB0cy9hcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSx5Q0FBQTs7QUFBQSxJQUFBLEdBQU8sc2ZBQVAsQ0FBQTs7QUFBQSxPQUVBLEdBQVUsU0FBQyxHQUFELEVBQU0sUUFBTixHQUFBO0FBQW1CLE1BQUEsa0JBQUE7U0FBQTs7OztnQkFBNEIsQ0FBQyxHQUE3QixDQUFpQyxTQUFDLENBQUQsRUFBSSxDQUFKLEdBQUE7V0FBVSxHQUFJLDBDQUFkO0VBQUEsQ0FBakMsRUFBbkI7QUFBQSxDQUZWLENBQUE7O0FBQUEsUUFJUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBcEIsR0FBNkIsRUFBQSxHQUFFLENBQUEsSUFBSSxDQUFDLE1BQUwsR0FBYyxHQUFkLENBQUYsR0FBcUIsSUFKbEQsQ0FBQTs7QUFBQSxFQU1BLEdBQUssT0FBQSxDQUFRLElBQUksQ0FBQyxLQUFMLENBQVcsRUFBWCxDQUFSLEVBQXdCLEVBQXhCLENBTkwsQ0FBQTs7QUFBQSxLQVFBLEdBQVEsRUFBRSxDQUFDLE1BQUgsQ0FBVSxDQUFDLFNBQUMsR0FBRCxFQUFNLENBQU4sRUFBUyxDQUFULEdBQUE7QUFBZSxFQUFBLEdBQUksQ0FBQSxDQUFBLENBQUosR0FBUyxDQUFULENBQUE7U0FBWSxJQUEzQjtBQUFBLENBQUQsQ0FBVixFQUE0QyxFQUE1QyxDQVJSLENBQUE7O0FBVUEsSUFBcUQsS0FBSyxDQUFDLGNBQU4sQ0FBcUIsQ0FBQyxlQUFBLEdBQWtCLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBZCxDQUFzQixJQUF0QixFQUE0QixFQUE1QixDQUErQixDQUFDLEtBQWhDLENBQXNDLEVBQXRDLENBQW5CLENBQXJCLENBQXJEO0FBQUEsRUFBQSxNQUFNLENBQUMsUUFBUCxDQUFnQixDQUFoQixFQUFvQixLQUFNLENBQUEsZUFBQSxDQUFOLEdBQXlCLEdBQTdDLENBQUEsQ0FBQTtDQVZBOztBQUFBLFFBWVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxTQUFBLEdBQUE7QUFBRyxNQUFBLElBQUE7QUFBQSxFQUFBLElBQXFELElBQUEsR0FBTyxFQUFHLENBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQWQsR0FBMEIsR0FBckMsQ0FBQSxDQUEvRDtXQUFBLE9BQU8sQ0FBQyxTQUFSLENBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQStCLElBQUEsR0FBRyxDQUFBLElBQUksQ0FBQyxJQUFMLENBQVUsRUFBVixDQUFBLENBQWxDLEVBQUE7R0FBSDtBQUFBLENBQXBDLENBWkEsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ0ZXh0ID0gXCJBIHRyYWluIGFycml2ZXMgYXQgYSBzdGF0aW9uLiBBIGxpdHRsZSBib3kgYW5kIGEgbGl0dGxlIGdpcmwsIGJyb3RoZXIgYW5kIHNpc3RlciwgYXJlIHNlYXRlZCBpbiBhIGNvbXBhcnRtZW50IGZhY2UgdG8gZmFjZSBuZXh0IHRvIHRoZSB3aW5kb3cgdGhyb3VnaCB3aGljaCB0aGUgYnVpbGRpbmdzIGFsb25nIHRoZSBzdGF0aW9uIHBsYXRmb3JtIGNhbiBiZSBzZWVuIHBhc3NpbmcgYXMgdGhlIHRyYWluIHB1bGxzIHRvIGEgc3RvcC4g4oCcTG9vayzigJ0gc2F5cyB0aGUgYnJvdGhlciwg4oCcV2XigJlyZSBhdCBMYWRpZXMh4oCdIOKAnEltYmVjaWxlIeKAnSByZXBsaWVzIGhpcyBzaXN0ZXIsIOKAnENhbuKAmXQgeW91IHNlZSB3ZeKAmXJlIGF0IEdlbnRsZW1lbj/igJ3igKYuIEZvciB0aGVzZSBjaGlsZHJlbiwgTGFkaWVzIGFuZCBHZW50bGVtZW4gd2lsbCBiZSBoZW5jZWZvcnRoIHR3byBjb3VudHJpZXMgdG93YXJkIHdoaWNoIGVhY2ggb2YgdGhlaXIgc291bHMgd2lsbCBzdHJpdmUgb24gZGl2ZXJnZW50IHdpbmdzLlwiXG5cbm1hcENvbnMgPSAoYXJyLCBjb25zU2l6ZSkgLT4gWzAuLihhcnIubGVuZ3RoIC0gY29uc1NpemUpXS5tYXAgKGksIHgpIC0+IGFycltpLi5pICsgY29uc1NpemUgLSAxXVxuXG5kb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiI3t0ZXh0Lmxlbmd0aCAqIDEwMH1weFwiXG5cbnhzID0gbWFwQ29ucyB0ZXh0LnNwbGl0KCcnKSwgNTBcblxueHNNYXAgPSB4cy5yZWR1Y2UgKChoc2gsIHgsIGkpIC0+IGhzaFt4XSA9IGk7IGhzaCksIHt9XG5cbndpbmRvdy5zY3JvbGxUbyAwLCAoeHNNYXBbY3VycmVudExvY2F0aW9uXSAqIDEwMCkgaWYgeHNNYXAuaGFzT3duUHJvcGVydHkgKGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIy8nLCAnJykuc3BsaXQgJycpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ3Njcm9sbCcsIC0+IGhpc3RvcnkucHVzaFN0YXRlIG51bGwsIG51bGwsIFwiIy8je2NvbnMuam9pbiAnJ31cIiBpZiBjb25zID0geHNbTWF0aC5mbG9vcihkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCAvIDEwMCldXG4iXX0=
