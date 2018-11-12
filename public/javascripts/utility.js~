/* UTILITY */

// Returns the surrounding squares if they arn't off the map
function getSurroundingSquareIDs(squareID, range) {
  var squareIDs = [];
  var row = Math.floor(squareID / 6);
  var col = squareID % 6;
  if(row!=0&&col!=0) squareIDs.push((row-1)*6+(col-1));
  if(row!=0) squareIDs.push((row-1)*6+(col));
  if(row!=0&&col!=5) squareIDs.push((row-1)*6+(col+1));
  if(row!=5&&col!=0) squareIDs.push((row+1)*6+(col-1));
  if(row!=5) squareIDs.push((row+1)*6+(col));
  if(row!=5&&col!=5) squareIDs.push((row+1)*6+(col+1));
  if(col!=0) squareIDs.push((row)*6+(col-1));
  if(col!=5) squareIDs.push((row)*6+(col+1));
  return squareIDs;
}

// Returns entity from element entityID
function getEntityFromElementID(entityID) {
  entityID = entityID.substring(6, entityID.length)
  var entity;
  // Look through all the squares
  for(i = 0; i < squares.length; i++){
    // If it has an entity and that entityElements id is equal to the id we're looking for
    if(squares[i] && squares[i].id == entityID) { 
      entity = squares[i];
      break;
    }
  }
  return entity;
}
  
// Unique ID generator. Do not touch. Highly complex.
function getID(){
  nextID++;
  return nextID - 1;
}

// Sleep
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// Clears css highlights across the board. Also clears moveable and actionable squares
function clearBoard(){
  $('.game-square').css('background', 'white');
  $('.game-square').css('cursor', 'pointer');
  $('.game-square-entity').css('background', 'white');
  $('.game-square-entity').each(function(index){
    var entity = getEntityFromElementID($(this).attr('id'));
    if(entity && entity.owner == 0)
      $(this).css('cursor', 'url("/images/cursor_select.png") 14 14, auto');
    else
      $(this).css('cursor', 'url("/images/cursor_select_enemy.png") 14 14, auto');
  });
  moveableSquareIDs = [];
  actionableSquareIDs = [];
}

// Clears and hides the left info box
function clearSelectedInfo(){
  selectedID = -1;
  $('.hover-info-selected').css('opacity', '0');
  $('.hover-info-selected-type').html('');
  $('.hover-info-selected-allegiance').html('');
  $('.hover-info-selected-allegiance').css('color', 'white')
  $('.hover-info-selected-action').html('');
  $('.hover-info-selected-health').html('');
  $('.hover-info-selected-movement').html('');
  $('.hover-info-selected-actions').html('');
}


 
