module.exports.register = function (registry) {
  registry.block(function () {
    const self = this;
    self.named('accordion');
    self.onContext('section');   // allows nesting under headings
    self.process((parent, reader) => {
      const html = `<div class="accordion-block">${reader.read()}</div>`;
      return self.createBlock(parent, 'pass', html);
    });
  });
};
