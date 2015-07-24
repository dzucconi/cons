import _ from 'ramda';

export default class Stage {
  constructor(options) {
    this.$window = options.$window;
    this.$el = options.$el;
    this.paths = options.paths;
  }

  index() {
    return ~~(document.body.scrollTop / this.lh);
  };

  path() {
    return this.paths[this.index()];
  }

  position(path) {
    return this.paths.indexOf(path || this.path()) * this.lh;
  }

  template(x) {
    return `<a href='#/${x}' class='line js-line'>${x}</a>`
  };

  setOffset() {
    console.log('setOffset')
    this.$el.css({ marginBottom: ~~(this.$window.height() / this.lh) * this.lh })
  };

  render(x) {
    let $line = this.$el.html(_.map(this.template, this.paths)).find('.js-line:first');
    this.lh = $line.outerHeight();
    return this;
  }
};
