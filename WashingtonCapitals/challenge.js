const washingtonCapitals = require('./data.js');
const starters = require('./data.js')


// Exercises:

// 1:  Return an array of all the player's full names
const fullNames = (capitals) => {
  const playerNames = Object.keys(capitals).reduce( (names, player) => {
    names.push(capitals[player].name);
    return names;
  }, []);

  return playerNames;
}

console.log(fullNames(washingtonCapitals))

// 2: Find the goalie and return the last name
const goalieLastName = (capitals) => {
  const goalie = Object.keys(capitals).find( player => capitals[player].position === 'goalie')

  return goalie;
}

console.log(goalieLastName(washingtonCapitals))

// 2(b): Return the full name of the goalie

const goalieFullName = (capitals) => {
  const goalieName = Object.keys(capitals).reduce( (name, player) => {
    if (capitals[player].position === 'goalie') {
      name = capitals[player].name
    }

    return name;
  }, '')

  return goalieName;
}

console.log(goalieFullName(washingtonCapitals))


// 3: Return all the American player's last names

const lastNames = Object.keys(washingtonCapitals);

console.log(lastNames)

//  4: Find the sum of all of the jersey numbers

const jerseySum = capitals => {
  const sum = Object.keys(capitals).reduce((sum, player) => {
    sum = capitals[player].jersey;

    return sum;
  }, 0)

  return sum;
}

console.log(jerseySum(washingtonCapitals));

// 5: Sort players according to which hand they shoot with
// eg: {left: ['Evgeny Kuznetsov', 'Nicklas Backstrom, ...], right: ['TJ Oshie', 'Alex Ovechkin', ...]}

const dominateHand = capitals => {
  const shootFrom = Object.keys(capitals).reduce((perferedHand, player) => {
    if (capitals[player].shoots === 'right') {
      perferedHand.right.push(capitals[player].name)
    } else {
      perferedHand.left.push(capitals[player].name)
    }
    
    return perferedHand;
  }, {left: [], right: []})

  return shootFrom;
}

console.log(dominateHand(washingtonCapitals));


// 6: Create an object with each player sorted by position
// eg: {center: ['Evgeny Kuznetsov', 'Nicklas Backstrom]}

const positions = capitals => {
  const whatTheyPlay = Object.keys(capitals).reduce((postionObj, player) => {
    if(!postionObj[capitals[player].position]) {
      postionObj[capitals[player].position] = [];
    }

    postionObj[capitals[player].position].push(capitals[player].name)

    return postionObj;
  }, {});

  return whatTheyPlay;
}

console.log(positions(washingtonCapitals))

// 7: Write a function that takes in a position and returns all of the players who play that position
// eg: findByPosition('center') => {center: [ 'Backstrom', 'Kuznetsov', 'Beagle' ]}

const findByPosition = (position, capitalsPositions) => {
  return capitalsPositions[position]
}

console.log(findByPosition('center', positions(washingtonCapitals)))

// 8: Write a function that takes in a players last name and returns that players information
// eg: findbyLastName('Wilson') => { name: 'Tom Wilson', position: 'winger', nationality: 'Canadian', shoots: 'right', jersey: 43 }

const findbyLastName = (name, capitals) => {
  const playersInfo = Object.keys(capitals).reduce((info, player) => {
    if (player === name) {
      info = capitals[player]
    }

    return info;
  }, {})

  return playersInfo;
}

console.log(findbyLastName('Wilson', washingtonCapitals))

// 8(b): Write a function that takes in a players full name and returns that players nationality
// eg: findbyFullName('Tom Wilson') => 'Canadian'

const findbyFullName = (name, capitals) => {
  const nationality = Object.keys(capitals).reduce((nation, player) => {
    if (capitals[player].name === name) {
      nation = capitals[player].nationality
    }

    return nation;
  }, '')

  return nationality
}

console.log(findbyFullName('Tom Wilson', washingtonCapitals))

