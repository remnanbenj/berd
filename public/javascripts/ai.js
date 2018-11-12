/* AI */

// Begins AI turn
function AI(team){
  var entities = teamUnitCounts[team];
  setTimeout(function(){ controlEntity(0, entities, team); }, 300);
}

// Goes through each entity in entities and tells the entity what to do
function controlEntity(index, entities, team){
  var entity = entities[index];
  if(!entity) { endTurn(); return; }
  var enemy = enemyClose(6*(entity.y-1)+(entity.x-1), team); // Check for enemies

  if(entity.action > 0 && enemy) {
    attack(entity, enemy);

    setTimeout(function(){ controlEntity(index, entities, team); }, 300);

  } else if(entity.movement > 0 && !enemy) {
    var enemyUnits = teamUnitCounts[0];
    var currentDist = 999;
    var currentEnemy = null;
    for(i = 0; i < enemyUnits.length; i++){
      var dist = distance(entity, enemyUnits[i]);
      if(currentDist > dist) {
        currentDist = dist;
        currentEnemy = enemyUnits[i];
      }
    }
    if(currentEnemy.y > entity.y) move(entity, 6*(entity.y-1+1)+(entity.x-1));
    else if(currentEnemy.y < entity.y) move(entity, 6*(entity.y-1-1)+(entity.x-1));
    else if(currentEnemy.x > entity.x) move(entity, 6*(entity.y-1)+(entity.x-1+1));
    else if(currentEnemy.x < entity.x) move(entity, 6*(entity.y-1)+(entity.x-1-1));

    setTimeout(function(){ controlEntity(index, entities, team); }, 300);

  } else {
    index++;
    if(index == entities.length) endTurn();
    else setTimeout(function(){ controlEntity(index, entities, team); }, 300);
  }

}

// Returns the euclidian distance between two entities
function distance(entity, target){
  return Math.abs(entity.x-target.x) + Math.abs(entity.y-target.y);
}

// Checks if enemy is in range
function enemyClose(squareID, team) {
  var surroundingSquareIDs = getSurroundingSquareIDs(squareID, 1);
  var ememies = [];
  for(i = 0; i < surroundingSquareIDs.length; i++) {
    if(squares[surroundingSquareIDs[i]] && squares[surroundingSquareIDs[i]].owner != team) {
      ememies.push(squares[surroundingSquareIDs[i]]);
    }
  }
  if(ememies.length > 0) {
    var enemy = ememies[0];
    for(i = 1; i < ememies.length; i++) { 
      if(ememies[i].health < enemy.health) 
        enemy = ememies[i]; 
    }
    return enemy;
  } else {
    return null;
  }
}




