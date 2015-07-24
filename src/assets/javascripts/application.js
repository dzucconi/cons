import $ from 'jquery';
import _ from 'ramda';
import LocationBar from 'location-bar';
import throttle from 'lodash.throttle';
import { text } from './text';

import Overlay from './overlay';
import Stage from './stage';

let apertureSize = 50;
let windows = _.aperture(apertureSize, _.split('', text));
let paths = _.map(_.compose(_.replace(/ /g, '_'), _.join('')), windows);

let locationBar = new LocationBar;
locationBar.start({ pushState: false });

$(() => {
  let $window = $(window);

  let stage = new Stage({
    $window: $window,
    $el: $('.js-stage'),
    paths: paths
  });

  let overlay = new Overlay({
    stage: stage,
    $el: $('.js-overlay')
  });

  stage.render();
  stage.setOffset();

  let updatePath = () => {
    locationBar.update(stage.path(), {
      trigger: false, replace: true
    });
  };

  let update = _.compose(
    throttle(overlay.render.bind(overlay), 50),
    throttle(updatePath, 200)
  );

  $window
    .on('resize', throttle(stage.setOffset.bind(stage), 200))
    .on('scroll', update);

  let currentPath = location.hash.replace(/^#(\/)?/, '');
  if (currentPath) {
    window.scrollTo(0, stage.position(currentPath));
  };

  locationBar.onChange((path) => {
    window.scrollTo(0, stage.position(path));
  });

});
