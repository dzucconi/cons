import $ from 'jquery';
import _ from 'ramda';
import throttle from 'lodash.throttle';
import text from './text';

let init = () => {
  'use strict';

  let $window = $(window);
  let $stage = $('.js-stage');
  let $overlay = $('.js-overlay');

  let join = _.join('');
  let underscorify = _.replace(/ /g, '_');
  let windows = _.aperture(50, _.split('', text));
  let transform = _.compose(underscorify, join);
  let encoded = _.map((x) => { return [transform(x), join(x)]; }, windows);
  let encodedMap = _.fromPairs(encoded);
  let paths = _.map(_.head, encoded);

  let template = ([x, y]) => {
    return `<a href='#/${x}' class='line js-line'>${y}</a>`;
  };

  $stage.html(_.map(template, encoded));

  let $line = $('.js-line');
  let lh = () => $line.outerHeight();

  let offset = () => {
    let x = lh();
    $stage.css({ marginBottom: ~~($window.height() / x) * x });
  };

  offset();

  let index = () => ~~($window.scrollTop() / lh());

  let position = (path) => paths.indexOf(path) * lh();

  let currentPath = () => paths[index()];

  let updatePath = () => {
    let x = currentPath();
    if (x) history.replaceState(null, null, `#/${x}`);
  };

  let updateOverlay = () => $overlay.text(encodedMap[currentPath()]);

  $window
    .on('resize', throttle(offset, 200))
    .on('scroll', _.compose(
      throttle(updateOverlay, 50),
      throttle(updatePath, 200)
    ));

  let pathOnInit = location.hash.replace(/^#(\/)?/, '');

  if (pathOnInit) window.scrollTo(0, position(pathOnInit));

  window.addEventListener('hashchange', (e) => {
    window.scrollTo(0, position(e.newURL.split('#/')[1]));
  });
};

$(init);
