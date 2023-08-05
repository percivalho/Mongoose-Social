const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Grace',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughtDescriptions = [
  'Just had the best cup of coffee ever!',
  'Enjoying a beautiful sunset at the beach.',
  'Just got the new XYZ smartphone. Excited to try it out.',
  'Just booked a trip to Hawaii!',
  'Tried making homemade pasta today, and it turned out great!',
  'Going for a morning run.',
  'Looking for recommendations for things to do in Hawaii.',
  'Had a great time at the beach today.',
  'The camera on the new XYZ smartphone is amazing.',
  'Nothing beats a morning run. ',
  "Packing for my trip to Hawaii. Can't wait!",
  'The waves were amazing today.',
  'The new XYZ smartphone has some really cool features.',
  'Making homemade pizza for dinner tonight.',
  'Just completed a 5k run.',
  'Off to Hawaii!',
  'Found a beautiful seashell at the beach.',
  'Just posted a review of the new XYZ smartphone on my blog.',
  'The homemade pizza turned out delicious!',
  'Planning to run a marathon next month.',
];

const possibleReactions = [
  'Like',
  'Love',
  'Haha',
  'Wow',
  'Sad',
  'Angry',
  'This made my day!',
  'So inspiring!',
  'I can relate to this.',
  'This is hilarious.',
  'This is heartbreaking.',
  'Great post!',
  "Interesting, I hadn't thought about it that way.",
  'Thanks for sharing.',
  'Keep up the good work.'
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Function to generate random thoughts that we can add to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtDescriptions),
      username: getRandomArrItem(names),
      reactions: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };
