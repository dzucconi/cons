export default class Overlay {
  constructor(options) {
    this.stage = options.stage;
    this.$el = options.$el;
  }

  render(x) {
    return this.$el.html(this.stage.path());
  }
};
