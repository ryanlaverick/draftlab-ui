const schools = [
  // ACC
  {
    name: 'Boston College',
    nickname: 'Eagles',
    shortName: 'BOSTON COL',
    image: '/assets/school/conferences/acc/boston-college-logo.png',
  },
  {
    name: 'California',
    nickname: 'Golden Eagles',
    shortName: 'CAL',
    image: '/assets/school/conferences/acc/california-logo.png',
  },
  {
    name: 'Clemson',
    nickname: 'Tigers',
    shortName: 'CLEMSON`',
    image: '/assets/school/conferences/acc/clemson-logo.png',
  },
  {
    name: 'Duke',
    nickname: 'Blue Devils',
    shortName: 'DUKE',
    image: '/assets/school/conferences/acc/duke-logo.png',
  },
  {
    name: 'Florida State',
    nickname: 'Seminoles',
    shortName: 'FLORIDA ST',
    image: '/assets/school/conferences/acc/florida-state-logo.png',
  },
  {
    name: 'Georgia Tech',
    nickname: 'Yellow Jackets',
    shortName: 'GA TECH',
    image: '/assets/school/conferences/acc/georgia-tech-logo.png',
  },
  {
    name: 'Louisville',
    nickname: 'Cardinals',
    shortName: 'LOUISVILLE',
    image: '/assets/school/conferences/acc/louisville-logo.png',
  },
  {
    name: 'Miami',
    nickname: 'Hurricanes',
    shortName: 'MIAMI FL',
    image: '/assets/school/conferences/acc/miami-logo.png',
  },
  {
    name: 'NC State',
    nickname: 'Wolfpack',
    shortName: 'NC STATE',
    image: '/assets/school/conferences/acc/nc-state-logo.png',
  },
  {
    name: 'North Carolina',
    nickname: 'Tar Heels',
    shortName: 'N CAROLINA',
    image: '/assets/school/conferences/acc/north-carolina-logo.png',
  },
  {
    name: 'Pittsburgh',
    nickname: 'Panthers',
    shortName: 'PITTSBURGH',
    image: '/assets/school/conferences/acc/pittsburgh-logo.png',
  },
  {
    name: 'SMU',
    nickname: 'Mustangs',
    shortName: 'SMU',
    image: '/assets/school/conferences/acc/smu-logo.png',
  },
  {
    name: 'Stanford',
    nickname: 'Cardinal',
    shortName: 'STANFORD',
    image: '/assets/school/conferences/acc/stanford-logo.png',
  },
  {
    name: 'Syracuse',
    nickname: 'Orange',
    shortName: 'SYRACUSE',
    image: '/assets/school/conferences/acc/syracuse-logo.png',
  },
  {
    name: 'Virginia',
    nickname: 'Cavaliers',
    shortName: 'VIRGINIA',
    image: '/assets/school/conferences/acc/virginia-logo.png',
  },
  {
    name: 'Virginia Tech',
    nickname: 'Hokies',
    shortName: 'VA TECH',
    image: '/assets/school/conferences/acc/virginia-tech-logo.png',
  },
  {
    name: 'Wake Forest',
    nickname: 'Demon Deacons',
    shortName: 'WAKE',
    image: '/assets/school/conferences/acc/wake-forest-logo.png',
  },

  // American
  {
    name: 'Army',
    nickname: 'Black Knights',
    shortName: "ARMY",
    image: '/assets/school/conferences/american/army-logo.png'
  },
  {
    name: 'Charlotte',
    nickname: '49ers',
    shortName: "CHARLOTTE",
    image: '/assets/school/conferences/american/charlotte-logo.png'
  },
  {
    name: 'East Carolina',
    nickname: 'Pirates',
    shortName: "E CAROLINA",
    image: '/assets/school/conferences/american/east-carolina-logo.png'
  },
  {
    name: 'Florida Atlantic',
    nickname: 'Owls',
    shortName: "FAU",
    image: '/assets/school/conferences/american/florida-atlantic-logo.png'
  },
  {
    name: 'Memphis',
    nickname: 'Tigers',
    shortName: "MEMPHIS",
    image: '/assets/school/conferences/american/memphis-logo.png'
  },
  {
    name: 'Navy',
    nickname: 'Midshipmen',
    shortName: "NAVY",
    image: '/assets/school/conferences/american/navy-logo.png'
  },
  {
    name: 'North Texas',
    nickname: 'Mean Green',
    shortName: "N TEXAS",
    image: '/assets/school/conferences/american/north-texas-logo.png'
  },
  {
    name: 'Rice',
    nickname: 'Owls',
    shortName: "RICE",
    image: '/assets/school/conferences/american/rice-logo.png'
  },
  {
    name: 'South Florida',
    nickname: 'Bulls',
    shortName: "USF",
    image: '/assets/school/conferences/american/south-florida-logo.png'
  },
  {
    name: 'Temple',
    nickname: 'Owls',
    shortName: "TEMPLE",
    image: '/assets/school/conferences/american/temple-logo.png'
  },
  {
    name: 'Tulane',
    nickname: 'Green Wave',
    shortName: "TULANE",
    image: '/assets/school/conferences/american/tulane-logo.png'
  },
  {
    name: 'Tulsa',
    nickname: 'Golden Hurricane',
    shortName: "TULSA",
    image: '/assets/school/conferences/american/tulsa-logo.png'
  },
  {
    name: 'UAB',
    nickname: 'Blazers',
    shortName: "UAB",
    image: '/assets/school/conferences/american/uab-logo.png'
  },
  {
    name: 'UTSA',
    nickname: 'Roadrunners',
    shortName: "UTSA",
    image: '/assets/school/conferences/american/utsa-logo.png'
  },

  // Big 12
  {
    name: 'Arizona',
    nickname: 'Wildcats',
    shortName: "ARIZONA",
    image: '/assets/school/conferences/big12/arizona-logo.png'
  },
  {
    name: 'Arizona State',
    nickname: 'Sundevils',
    shortName: "ARIZONA ST",
    image: '/assets/school/conferences/big12/arizona-state-logo.png'
  },
  {
    name: 'Baylor',
    nickname: 'Bears',
    shortName: "BAYLOR",
    image: '/assets/school/conferences/big12/baylor-logo.png'
  },
  {
    name: 'BYU',
    nickname: 'Cougars',
    shortName: "BYU",
    image: '/assets/school/conferences/big12/byu-logo.png'
  },
  {
    name: 'Cincinnati',
    nickname: 'Bearcats',
    shortName: "CINCINNATI",
    image: '/assets/school/conferences/big12/cincinnati-logo.png'
  },
  {
    name: 'Colorado',
    nickname: 'Buffaloes',
    shortName: "COLORADO",
    image: '/assets/school/conferences/big12/colorado-logo.png'
  },
  {
    name: 'Houston',
    nickname: 'Cougars',
    shortName: "HOUSTON",
    image: '/assets/school/conferences/big12/houston-logo.png'
  },
  {
    name: 'Iowa State',
    nickname: 'Cyclones',
    shortName: "IOWA STATE",
    image: '/assets/school/conferences/big12/iowa-state-logo.png'
  },
  {
    name: 'Kansas',
    nickname: 'Jayhawks',
    shortName: "KANSAS",
    image: '/assets/school/conferences/big12/kansas-logo.png'
  },
  {
    name: 'Kansas State',
    nickname: 'Wildcats',
    shortName: "KANSAS ST",
    image: '/assets/school/conferences/big12/kansas-state-logo.png'
  },
  {
    name: 'Oklahoma State',
    nickname: 'Cowboys',
    shortName: "OKLA STATE",
    image: '/assets/school/conferences/big12/oklahoma-state-logo.png'
  },
  {
    name: 'TCU',
    nickname: 'Horned Frogs',
    shortName: "TCU",
    image: '/assets/school/conferences/big12/tcu-logo.png'
  },
  {
    name: 'Texas Tech',
    nickname: 'Red Raiders',
    shortName: "TEXAS TECH",
    image: '/assets/school/conferences/big12/texas-tech-logo.png'
  },
  {
    name: 'UCF',
    nickname: 'Knights',
    shortName: "UCF",
    image: '/assets/school/conferences/big12/ucf-logo.png'
  },
  {
    name: 'Utah',
    nickname: 'Utes',
    shortName: "UTAH",
    image: '/assets/school/conferences/big12/utah-logo.png'
  },
  {
    name: 'West Virginia',
    nickname: 'Moutaineers',
    shortName: "W VIRGINIA",
    image: '/assets/school/conferences/big12/west-virginia-logo.png'
  },
]

export default schools
