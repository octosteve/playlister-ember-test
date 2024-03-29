import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  imageUrl: DS.attr('string'),
  artists: DS.hasMany('artist'),
  songs: DS.hasMany('song')
});
