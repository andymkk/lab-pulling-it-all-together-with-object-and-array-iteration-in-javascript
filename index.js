
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


function numPointsScored(playerName) {
  let game = gameObject()
  
  for (let team in game) {
    let players = game[team].players
    for (let name in players) {
      if (name === playerName) {
        return players[name].points
      }
    }
  }
  return 0
}

function shoeSize(playerName) {
  let game = gameObject()
  
  for (let team in game) {
    let players = game[team].players
    for (let name in players) {
      if (name === playerName) {
        return players[name].shoe
      }
    }
  }
  return 0
}

function teamColors(teamName) {
  let game = gameObject()
  
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors
    }
  }
  return []
}

function teamNames() {
  let game = gameObject()
  let names = []
  
  for (let team in game) {
    names.push(game[team].teamName)
  }
  return names
}

function playerNumbers(teamName) {
  let game = gameObject()
  let numbers = []
  
  for (let team in game) {
    if (game[team].teamName === teamName) {
      let players = game[team].players
      for (let playerName in players) {
        numbers.push(players[playerName].number)
      }
    }
  }
  return numbers
}

function playerStats(playerName) {
  let game = gameObject()
  
  for (let team in game) {
    let players = game[team].players
    for (let name in players) {
      if (name === playerName) {
        return players[name]
      }
    }
  }
  return {}
}

function bigShoeRebounds() {
  let game = gameObject()
  let biggestShoe = 0
  let rebounds = 0
  
  for (let team in game) {
    let players = game[team].players
    for (let playerName in players) {
      let player = players[playerName]
      if (player.shoe > biggestShoe) {
        biggestShoe = player.shoe
        rebounds = player.rebounds
      }
    }
  }
  return rebounds
}

function mostPointsScored() {
  let game = gameObject()
  let mostPoints = 0
  let playerName = ""
  
  for (let team in game) {
    let players = game[team].players
    for (let name in players) {
      let player = players[name]
      if (player.points > mostPoints) {
        mostPoints = player.points
        playerName = name
      }
    }
  }
  return playerName
}

function winningTeam() {
  let game = gameObject()
  let homePoints = 0
  let awayPoints = 0
 
  let homePlayers = game.home.players
  for (let playerName in homePlayers) {
    homePoints += homePlayers[playerName].points
  }
  
  
  let awayPlayers = game.away.players
  for (let playerName in awayPlayers) {
    awayPoints += awayPlayers[playerName].points
  }
  
  if (homePoints > awayPoints) {
    return game.home.teamName
  } else {
    return game.away.teamName
  }
}

function playerWithLongestName() {
  let game = gameObject()
  let longestName = ""
  
  for (let team in game) {
    let players = game[team].players
    for (let name in players) {
      if (name.length > longestName.length) {
        longestName = name
      }
    }
  }
  return longestName
}

function doesLongNameStealATon() {
  let longestNamePlayer = playerWithLongestName()
  let game = gameObject()
  let mostSteals = 0
  let stealsPlayerName = ""
  
  for (let team in game) {
    let players = game[team].players
    for (let name in players) {
      let player = players[name]
      if (player.steals > mostSteals) {
        mostSteals = player.steals
        stealsPlayerName = name
      }
    }
  }
  
  return longestNamePlayer === stealsPlayerName
}

 