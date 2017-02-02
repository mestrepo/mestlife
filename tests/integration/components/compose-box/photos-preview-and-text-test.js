import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('compose-box/photos-preview-and-text', 'Integration | Component | compose box/photos preview and text', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{compose-box/photos-preview-and-text}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#compose-box/photos-preview-and-text}}
      template block text
    {{/compose-box/photos-preview-and-text}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
