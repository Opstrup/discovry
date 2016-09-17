'use strict';
var self;
function LocationList() {
  self = this;
  self.plan = [];
  self.locations = [];
}

LocationList.prototype.showList = function(locations) {
  $("#main-container").html(
    '<div id="location-list" class="location-cards-container"></div>'
  );
  if (locations) _.each(locations, self.addLocation);
};

LocationList.prototype.removeList = function() {
  $("#main-container").html('');
};

LocationList.prototype.addToPlan = function(location) {
  if(!self.plan) self.plan = [];
  self.plan.push(location);
};

LocationList.prototype.addLocation = function(location) {
  if (!self.locations) self.locations = [];
  location.id = location.name.replace(/[^A-Z0-9]/ig, "_");
  self.locations.push(location);

  $("#location-list").append([
    '<div class="location-card mdl-card mdl-shadow--2dp">' +
      '<div id="' + location.id + '" class="mdl-card__title">' +
        '<h2 class="location-title mdl-card__title-text">' +
          location.name +
        '</h2>' +
      '</div>' +
      '<span class="info"><i class="info-icon material-icons md-dark">place</i><h6>' +
        location.vicinity +
      '</h6></span>' +
      '<span class="info"><i class="info-icon material-icons md-dark">star</i><h6>' +
        location.rating +
      '</h6></span>' +
      '<div class="mdl-card__supporting-text">' +
        location.description +
      '</div>' +
      // TODO: opening hours
      // TODO: pricelevel
      // TODO: website
      '<div id="' + location.id + '-status" class="mdl-card__actions mdl-card--border">' +
        '<a id="' + location.id + '-add" class="add-location-button mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">' +
          '<i id="' + location.id + '"class="add-location-icon material-icons md-light">add_location</i>' +
          'Add to plan' +
        '</a>' +
        '<a id="' + location.id + '-added" class="added-location-status mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">' +
          '<i class="add-location-icon material-icons md-light">done</i>' +
          'Added' +
        '</a>' +
      '</div>'  +
      '<div class="mdl-card__menu">' +
      // TODO: Rating
      '</div>' +
    '</div>']);

    $('#'+location.id+'-add').click(function() {
      $('#' + location.id + '-status').animate({backgroundColor: 'green'},
                { easing: 'swing',
                  duration: 200 });
      $('#'+location.id+'-add')
        .animate({left: '110%'},
                { easing: 'swing',
                  duration: 200 });
      $('#'+location.id+'-added')
        .animate({left: '0%'},
                { easing: 'swing',
                  duration: 200 });
      self.addToPlan(location);
    });

    // Set background image on location card
    var photo = typeof location.photos !== 'undefined'
      ? location.photos[0].getUrl({'maxWidth': 500})
      : 'http://i.imgur.com/88F5ZvY.gif'
    $('#'+location.id ).css({"background": "url('" + photo + "') center / cover"});
};
