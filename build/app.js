(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var currentLocation, factor, mapCons, text, wSize, xs, xsMap;

text = "A train arrives at a station. A little boy and a little girl, brother and sister, are seated in a compartment face to face next to the window through which the buildings along the station platform can be seen passing as the train pulls to a stop. “Look,” says the brother, “We’re at Ladies!” “Imbecile!” replies his sister, “Can’t you see we’re at Gentlemen?”…. For these children, Ladies and Gentlemen will be henceforth two countries toward which each of their souls will strive on divergent wings.";

factor = 100;

wSize = 50;

document.body.style.height = "" + (text.length * factor) + "px";

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

xs = mapCons(text.split(''), wSize);

xsMap = xs.reduce((function(hsh, x, i) {
  hsh[x] = i;
  return hsh;
}), {});

document.addEventListener('scroll', function() {
  var cons;
  if (cons = xs[Math.floor(document.body.scrollTop / factor)]) {
    return history.replaceState(null, null, "#/" + (cons.join('')));
  }
});

if (xsMap.hasOwnProperty((currentLocation = location.hash.replace('#/', '').split('')))) {
  window.scrollTo(0, xsMap[currentLocation] * factor);
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW1vbnp1Y2NvbmkvUHJvamVjdHMvQXJ0L2NvbnMvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGFtb256dWNjb25pL1Byb2plY3RzL0FydC9jb25zL3NyYy9qYXZhc2NyaXB0cy9hcHAuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSx3REFBQTs7QUFBQSxJQUFBLEdBQU8sc2ZBQVAsQ0FBQTs7QUFBQSxNQUNBLEdBQVMsR0FEVCxDQUFBOztBQUFBLEtBRUEsR0FBUSxFQUZSLENBQUE7O0FBQUEsUUFJUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBcEIsR0FBNkIsRUFBQSxHQUFFLENBQUEsSUFBSSxDQUFDLE1BQUwsR0FBYyxNQUFkLENBQUYsR0FBd0IsSUFKckQsQ0FBQTs7QUFBQSxPQU1BLEdBQVUsU0FBQyxHQUFELEVBQU0sUUFBTixHQUFBO0FBQ1IsTUFBQSxrQkFBQTtTQUFBOzs7O2dCQUE0QixDQUFDLEdBQTdCLENBQWlDLFNBQUMsQ0FBRCxFQUFJLENBQUosR0FBQTtXQUMvQixHQUFJLDBDQUQyQjtFQUFBLENBQWpDLEVBRFE7QUFBQSxDQU5WLENBQUE7O0FBQUEsRUFVQSxHQUFLLE9BQUEsQ0FBUSxJQUFJLENBQUMsS0FBTCxDQUFXLEVBQVgsQ0FBUixFQUF3QixLQUF4QixDQVZMLENBQUE7O0FBQUEsS0FXQSxHQUFRLEVBQUUsQ0FBQyxNQUFILENBQVUsQ0FBQyxTQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVMsQ0FBVCxHQUFBO0FBQWUsRUFBQSxHQUFJLENBQUEsQ0FBQSxDQUFKLEdBQVMsQ0FBVCxDQUFBO1NBQVksSUFBM0I7QUFBQSxDQUFELENBQVYsRUFBNEMsRUFBNUMsQ0FYUixDQUFBOztBQUFBLFFBYVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxTQUFBLEdBQUE7QUFDbEMsTUFBQSxJQUFBO0FBQUEsRUFBQSxJQUFHLElBQUEsR0FBTyxFQUFHLENBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQWQsR0FBMEIsTUFBckMsQ0FBQSxDQUFiO1dBQ0UsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBa0MsSUFBQSxHQUFHLENBQUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxFQUFWLENBQUEsQ0FBckMsRUFERjtHQURrQztBQUFBLENBQXBDLENBYkEsQ0FBQTs7QUFpQkEsSUFBRyxLQUFLLENBQUMsY0FBTixDQUFxQixDQUFDLGVBQUEsR0FBa0IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFkLENBQXNCLElBQXRCLEVBQTRCLEVBQTVCLENBQStCLENBQUMsS0FBaEMsQ0FBc0MsRUFBdEMsQ0FBbkIsQ0FBckIsQ0FBSDtBQUNFLEVBQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBb0IsS0FBTSxDQUFBLGVBQUEsQ0FBTixHQUF5QixNQUE3QyxDQUFBLENBREY7Q0FqQkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidGV4dCA9IFwiQSB0cmFpbiBhcnJpdmVzIGF0IGEgc3RhdGlvbi4gQSBsaXR0bGUgYm95IGFuZCBhIGxpdHRsZSBnaXJsLCBicm90aGVyIGFuZCBzaXN0ZXIsIGFyZSBzZWF0ZWQgaW4gYSBjb21wYXJ0bWVudCBmYWNlIHRvIGZhY2UgbmV4dCB0byB0aGUgd2luZG93IHRocm91Z2ggd2hpY2ggdGhlIGJ1aWxkaW5ncyBhbG9uZyB0aGUgc3RhdGlvbiBwbGF0Zm9ybSBjYW4gYmUgc2VlbiBwYXNzaW5nIGFzIHRoZSB0cmFpbiBwdWxscyB0byBhIHN0b3AuIOKAnExvb2ss4oCdIHNheXMgdGhlIGJyb3RoZXIsIOKAnFdl4oCZcmUgYXQgTGFkaWVzIeKAnSDigJxJbWJlY2lsZSHigJ0gcmVwbGllcyBoaXMgc2lzdGVyLCDigJxDYW7igJl0IHlvdSBzZWUgd2XigJlyZSBhdCBHZW50bGVtZW4/4oCd4oCmLiBGb3IgdGhlc2UgY2hpbGRyZW4sIExhZGllcyBhbmQgR2VudGxlbWVuIHdpbGwgYmUgaGVuY2Vmb3J0aCB0d28gY291bnRyaWVzIHRvd2FyZCB3aGljaCBlYWNoIG9mIHRoZWlyIHNvdWxzIHdpbGwgc3RyaXZlIG9uIGRpdmVyZ2VudCB3aW5ncy5cIlxuZmFjdG9yID0gMTAwXG53U2l6ZSA9IDUwXG5cbmRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gXCIje3RleHQubGVuZ3RoICogZmFjdG9yfXB4XCJcblxubWFwQ29ucyA9IChhcnIsIGNvbnNTaXplKSAtPlxuICBbMC4uKGFyci5sZW5ndGggLSBjb25zU2l6ZSldLm1hcCAoaSwgeCkgLT5cbiAgICBhcnJbaS4uaSArIGNvbnNTaXplIC0gMV1cblxueHMgPSBtYXBDb25zIHRleHQuc3BsaXQoJycpLCB3U2l6ZVxueHNNYXAgPSB4cy5yZWR1Y2UgKChoc2gsIHgsIGkpIC0+IGhzaFt4XSA9IGk7IGhzaCksIHt9XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgJ3Njcm9sbCcsIC0+XG4gIGlmIGNvbnMgPSB4c1tNYXRoLmZsb29yKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC8gZmFjdG9yKV1cbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSBudWxsLCBudWxsLCBcIiMvI3tjb25zLmpvaW4gJyd9XCJcblxuaWYgeHNNYXAuaGFzT3duUHJvcGVydHkgKGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIy8nLCAnJykuc3BsaXQgJycpXG4gIHdpbmRvdy5zY3JvbGxUbyAwLCAoeHNNYXBbY3VycmVudExvY2F0aW9uXSAqIGZhY3RvcilcbiJdfQ==
