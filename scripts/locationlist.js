'use strict';

function LocationList() { }

LocationList.prototype.showList = function(locations) {
  $("#main-container").html(
    '<div id="location-list" class="location-cards-container"></div>'
  );
  if (locations) { _.each(locations, this.addLocation); }
};

LocationList.prototype.hideList = function() {
  this.mainContainer.innerHtml = '';
};

LocationList.prototype.addLocation = function(location) {

  var titleImgID = location.title.replace(/[^A-Z0-9]/ig, "_");;;

  $("#location-list").append([
    '<div class="location-card mdl-card mdl-shadow--2dp">' +
      '<div id="' + titleImgID + '" class="mdl-card__title">' +
        '<h2 class="location-title mdl-card__title-text">' +
          location.title +
        '</h2>' +
      '</div>' +
      '<div class="mdl-card__supporting-text">' +
        location.description +
      '</div>' +
      '<div class="mdl-card__actions mdl-card--border">' +
        '<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">' +
          'GO!' +
        '</a>' +
      '</div>' +
      '<div class="mdl-card__menu">' +
      '</div>' +
    '</div>']);

    // Set background image on location card
    $('#'+titleImgID).css({"background": "url('" + location.img + "') center / cover"});
};
