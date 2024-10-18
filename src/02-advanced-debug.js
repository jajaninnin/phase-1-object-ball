console.log('Advanced debugging example running.')
// debugger

// first, define the function.
function numPointsScored(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].points;
  } else {
    return game.away.players[playerName].points;
  }
}
function shoeSize(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  } else {
    return game.away.players[playerName].shoe;
  }
}
function teamColors(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.colors;
  } else {
    return game.away.colors;
  }
}
function teamNames(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.teamName;
  } else {
    return game.away.teamName;
  }
}
function playerNumbers(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName].number;
  } else {
    return game.away.players[playerName].number;
  }
}
function playerStats(playerName) {
  let game = gameObject();
  if (game.home.players[playerName]) {
    return game.home.players[playerName];
  } else {
    return game.away.players[playerName];
  }
}
function bigShoeRebounds() {
  let game = gameObject();
  let biggestShoeSize = 0;
  let reboundsOfBigShoe = 0;
  const allPlayers = Object.values({...game.home.players, ...game.away.players});
  console.log('allPlayers', allPlayers);
  for (playerInfo of allPlayers) {
    if (playerInfo.shoe > biggestShoeSize) {
      biggestShoeSize = playerInfo.shoe;
      reboundsOfBigShoe = playerInfo.rebounds;
    }
  }
  return reboundsOfBigShoe;
}



function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    // debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      // debugger
      
      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        // debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()

console.log(bigShoeRebounds());
