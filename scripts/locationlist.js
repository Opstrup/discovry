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
  location.id = location.title.replace(/[^A-Z0-9]/ig, "_");
  self.locations.push(location);

  $("#location-list").append([
    '<div class="location-card mdl-card mdl-shadow--2dp">' +
      '<div id="' + location.id + '" class="mdl-card__title">' +
        '<h2 class="location-title mdl-card__title-text">' +
          location.title +
        '</h2>' +
      '</div>' +
      '<div class="mdl-card__supporting-text">' +
        location.description +
      '</div>' +
      // TODO: opening hours
      // TODO: vicinity (address)
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
      // $('#'+location.id+'-status').hide(300);
      $('#' + location.id + '-status').css({backgroundColor: 'green'});
      $('#'+location.id+'-add')
        .animate({left: '110%'},
                { easing: 'swing',
                  duration: 500,
                  complete: function() {

                  }});
      $('#'+location.id+'-added')
        .animate({left: '0%'},
                { easing: 'swing',
                  duration: 500,
                  complete: function() {

                  }});
      // $('#'+location.id+'-status').animate({display: 'none'});
      self.addToPlan(location);
    });

    // Set background image on location card
    $('#'+location.id ).css({"background": "url('" + location.photo + "') center / cover"});
};
