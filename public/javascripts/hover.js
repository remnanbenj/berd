/* HOVER FUNCTIONS */

// Hover over empty square
$('.game-square').hover(function(){
  $('.hover-info-hovered').css('opacity', '1')
  $('.hover-info-hovered-type').html('Empty');
  $('.hover-info-hovered-action').css('background', 'none');
  $('.hover-info-hovered-health').css('background', 'none');
  $('.hover-info-hovered-actions').css('background', 'none');
  $('.hover-info-hovered-movement').css('background', 'none');
  $('.hover-info-hovered-actions').css('border', 'none');
  $('.hover-info-hovered-movement').css('border', 'none');
  if(moveableSquareIDs.indexOf(parseInt($(this).attr('id'))) != -1) {
    $('.hover-info-action').html('Right click to move here');
  }

}, function(){ 
  clearHoveredInfo();
});

// Hover over square with an entity
$('.game-square-entity').hover(function(){
  var entity = getEntityFromElementID($(this).attr('id'));

  $('.hovered-entity-info').css('display', 'block');
  $('.hovered-entity-info').css('top', entity.y*80-70);
  $('.hovered-entity-info').css('left', entity.x*80);
  $('.hovered-entity-info-type').html('&nbsp;' + entity.type);
  if(entity.owner == 0) $('.hovered-entity-info-type').css('background', '#0f0');
  else $('.hovered-entity-info-type').css('background', '#f00');
  $('.hovered-entity-info-action').html(entity.actionAmount);
  $('.hovered-entity-info-health').html(entity.health);
  $('.hovered-entity-info-movement').html(entity.movement + " movements remaining");
  $('.hovered-entity-info-actions').html(entity.action + " attacks remaining");

  $('.hover-info-hovered').css('opacity', '1')
  $('.hover-info-hovered-type').html(entity.type);

  $('.hover-info-hovered-action').html(entity.actionAmount);
  $('.hover-info-hovered-health').html(entity.health);
  $('.hover-info-hovered-movement').html(entity.movement);
  $('.hover-info-hovered-actions').html(entity.action);

  if(entity.type == "Healer"){
    $('.hover-info-hovered-action').css('background', 'url("/images/heal.png")');
  } else {
    $('.hover-info-hovered-action').css('background', 'url("/images/target.png")');
  }
  $('.hover-info-hovered-health').css('background', 'url("/images/heart.png")');

  $('.hover-info-hovered-actions').css('background', '#FFE99B');
  $('.hover-info-hovered-movement').css('background', '#AEDCE5');
  $('.hover-info-hovered-actions').css('border-radius', '50%');
  $('.hover-info-hovered-movement').css('border-radius', '50%');
  $('.hover-info-hovered-actions').css('border', '1px solid black');
  $('.hover-info-hovered-movement').css('border', '1px solid black');

  if(entity.owner == 0) { // Friendly
    $('.hover-info-hovered-allegiance').html('Friendly');
    $('.hover-info-hovered-allegiance').css('color', '#0f0')
    $('.hover-info-action').html('Left click to select this unit');
    if(squares[selectedID] && squares[selectedID].owner == 0) $('.hover-info-action').html("Can't move there");
    
  } else { // Enemy
    $('.hover-info-hovered-allegiance').html('Enemy');
    $('.hover-info-hovered-allegiance').css('color', '#f00')
    $('.hover-info-action').html('Left click to select this unit');
    if(squares[selectedID] && squares[selectedID].owner == 0 && squares[selectedID].type == "Healer") $('.hover-info-action').html("Healers can't attack");
  }

  // Actionable square hover
  if(actionableSquareIDs.indexOf(6 * (entity.y-1) + (entity.x-1)) != -1) {
    if(squares[selectedID].type == "Healer") $('.hover-info-action').html('Right click to heal this unit');
    else $('.hover-info-action').html('Right click to attack this unit');
  }

}, function(){ clearHoveredInfo(); });

// Clears and hides the right info box
function clearHoveredInfo(){
  $('.hover-info-hovered').css('opacity', '0');
  $('.hover-info-hovered-type').html('');
  $('.hover-info-hovered-allegiance').html('');
  $('.hover-info-hovered-allegiance').css('color', 'white')
  $('.hover-info-hovered-action').html('');
  $('.hover-info-hovered-health').html('');
  $('.hover-info-hovered-movement').html('');
  $('.hover-info-hovered-actions').html('');
  $('.hover-info-action').html('');
  $('.hovered-entity-info').css('display', 'none');
}
