import $ from 'jquery';
import _ from 'ramda';
import throttle from 'lodash.throttle';
import text from './text';

let init = () => {
  'use strict';

  let $window = $(window);
  let $el = $('.js-stage');
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

  $el.html(_.map(template, encoded));

  let lh = (($el) => () => $el.outerHeight())($('.js-line'));

  let offset = () => {
    let x = lh();
    $el.css({ marginBottom: ~~($window.height() / x) * x });
  };

  offset();

  let { index, position } = (lh, paths) => {
    return {
      index: () => {
        return ~~(document.body.scrollTop / lh());
      },

      position: (path) => {
        return paths.indexOf(path) * lh();
      }
    };
  }(lh, paths);

  let currentPath = () => {
    return paths[index()];
  };

  let updatePath = () => {
    let x = currentPath();
    if (x) history.replaceState(null, null, `#/${x}`);
  };

  let updateOverlay = ($el) => {
    return () => $el.text(encodedMap[currentPath()]);
  }($('.js-overlay'));

  $window
    .on('resize', throttle(offset, 200))
    .on('scroll', _.compose(
      throttle(updateOverlay, 50),
      throttle(updatePath, 200)
    ));

  let pathOnInit = location.hash.replace(/^#(\/)?/, '');

  if (pathOnInit) {
    window.scrollTo(0, position(pathOnInit));
  };

  window.addEventListener('hashchange', (e) => {
    window.scrollTo(0, position(e.newURL.split('#/')[1]));
  });
};

$(init);
