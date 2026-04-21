export interface DraftPick {
  round: number,
  pick: number,
  from: string | null,
  compensatory: boolean
}

interface DraftClass {
  year: number,
  picks: DraftPick[]
}

export interface Team {
  name: string,
  shortName: string,
  image: string,
  draftClasses: DraftClass[]
}

const teams = [
  {
    name: 'Arizona Cardinals',
    shortName: 'ARZ',
    image: '/assets/team/arizona-cardinals-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 3,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 34,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 65,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 104,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 143,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 183,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 217,
            from: null,
            compensatory: false,
          },
        ]
      }
    ]
  },
  {
    name: 'Atlanta Falcons',
    shortName: 'ATL',
    image: '/assets/team/atlanta-falcons-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 2,
            pick: 48,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 79,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 122,
            from: "PHI",
            compensatory: false,
          },
          {
            round: 6,
            pick: 215,
            from: "PHI",
            compensatory: true,
          },
          {
            round: 7,
            pick: 231,
            from: null,
            compensatory: false,
          },
        ]
      }
    ]
  },
  {
    name: 'Baltimore Ravens',
    shortName: 'BAL',
    image: '/assets/team/baltimore-ravens-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 14,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 45,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 80,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 115,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 154,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 162,
            from: "LAC",
            compensatory: false,
          },
          {
            round: 5,
            pick: 173,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 174,
            from: null,
            compensatory: true,
          },
          {
            round: 6,
            pick: 211,
            from: "DEN",
            compensatory: false,
          },
          {
            round: 7,
            pick: 250,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 253,
            from: null,
            compensatory: true,
          },
        ]
      }
    ],
  },
  {
    name: 'Buffalo Bills',
    shortName: 'BUF',
    image: '/assets/team/buffalo-bills-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 26,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 91,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 126,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 165,
            from: "CHI",
            compensatory: false,
          },
          {
            round: 5,
            pick: 168,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 182,
            from: "NYJ",
            compensatory: false,
          },
          {
            round: 7,
            pick: 220,
            from: "NYJ",
            compensatory: false,
          },
        ]
      }
    ]
  },
  {
    name: 'Carolina Panthers',
    shortName: 'CAR',
    image: '/assets/team/carolina-panthers-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 19,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 51,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 83,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 119,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 158,
            from: "MIN",
            compensatory: false,
          },
          {
            round: 5,
            pick: 159,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 200,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Chicago Bears',
    shortName: 'CHI',
    image: '/assets/team/chicago-bears-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 25,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 57,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 60,
            from: "BUF",
            compensatory: false,
          },
          {
            round: 3,
            pick: 89,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 129,
            from: "LAR",
            compensatory: false,
          },
          {
            round: 7,
            pick: 239,
            from: "PHI",
            compensatory: false,
          },
          {
            round: 7,
            pick: 241,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Cincinnati Bengals',
    shortName: 'CIN',
    image: '/assets/team/cincinnati-bengals-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 10,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 41,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 72,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 110,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 189,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 199,
            from: "DET",
            compensatory: false,
          },
          {
            round: 7,
            pick: 221,
            from: "NYG",
            compensatory: false,
          },
          {
            round: 7,
            pick: 226,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Cleveland Browns',
    shortName: 'CLE',
    image: '/assets/team/cleveland-browns-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 6,
            from: null,
            compensatory: false,
          },
          {
            round: 1,
            pick: 24,
            from: "JAX",
            compensatory: false,
          },
          {
            round: 2,
            pick: 39,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 70,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 107,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 146,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 149,
            from: "CIN",
            compensatory: false,
          },
          {
            round: 6,
            pick: 206,
            from: "CHI",
            compensatory: false,
          },
          {
            round: 7,
            pick: 248,
            from: "SEA",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Dallas Cowboys',
    shortName: 'DAL',
    image: '/assets/team/dallas-cowboys-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 12,
            from: null,
            compensatory: false,
          },
          {
            round: 1,
            pick: 20,
            from: "GB",
            compensatory: false,
          },
          {
            round: 3,
            pick: 92,
            from: "SF",
            compensatory: false,
          },
          {
            round: 4,
            pick: 112,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 152,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 177,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 180,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 218,
            from: "TEN",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Denver Broncos',
    shortName: 'DEN',
    image: '/assets/team/denver-broncos-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 2,
            pick: 62,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 108,
            from: "NO",
            compensatory: false,
          },
          {
            round: 4,
            pick: 111,
            from: "MIA",
            compensatory: false,
          },
          {
            round: 5,
            pick: 170,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 246,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 256,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 257,
            from: null,
            compensatory: true,
          },
        ]
      }
    ],
  },
  {
    name: 'Detroit Lions',
    shortName: 'DET',
    image: '/assets/team/detroit-lions-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 17,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 50,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 118,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 128,
            from: "HOU",
            compensatory: false,
          },
          {
            round: 5,
            pick: 157,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 181,
            from: null,
            compensatory: true,
          },
          {
            round: 6,
            pick: 205,
            from: "JAX",
            compensatory: false,
          },
          {
            round: 6,
            pick: 213,
            from: "SEA",
            compensatory: false,
          },
          {
            round: 7,
            pick: 222,
            from: "CLE",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Green Bay Packers',
    shortName: 'GB',
    image: '/assets/team/green-bay-packers-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 2,
            pick: 52,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 84,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 120,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 160,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 201,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 236,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 255,
            from: null,
            compensatory: true,
          },
        ],
      }
    ],
  },
  {
    name: 'Houston Texans',
    shortName: 'HOU',
    image: '/assets/team/houston-texans-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 28,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 38,
            from: "WAS",
            compensatory: false,
          },
          {
            round: 2,
            pick: 59,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 69,
            from: "NYG",
            compensatory: false,
          },
          {
            round: 4,
            pick: 106,
            from: "WAS",
            compensatory: false,
          },
          {
            round: 5,
            pick: 141,
            from: "LVR",
            compensatory: false,
          },
          {
            round: 5,
            pick: 167,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 243,
            from: "SF",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Indianapolis Colts',
    shortName: 'IND',
    image: '/assets/team/indianapolis-colts-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 2,
            pick: 47,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 78,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 113,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 156,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 214,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 249,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 254,
            from: null,
            compensatory: true,
          },
        ]
      }
    ],
  },
  {
    name: 'Jacksonville Jaguars',
    shortName: 'JAX',
    image: '/assets/team/jacksonville-jaguars-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 2,
            pick: 52,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 81,
            from: "DET",
            compensatory: false,
          },
          {
            round: 3,
            pick: 88,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 100,
            from: "DET",
            compensatory: true,
          },
          {
            round: 4,
            pick: 124,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 164,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 166,
            from: "SF",
            compensatory: false,
          },
          {
            round: 6,
            pick: 203,
            from: "PHI",
            compensatory: false,
          },
          {
            round: 7,
            pick: 233,
            from: "DET",
            compensatory: false,
          },
          {
            round: 7,
            pick: 240,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 245,
            from: "LAR",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Kansas City Chiefs',
    shortName: 'KC',
    image: '/assets/team/kansas-city-chiefs-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 9,
            from: null,
            compensatory: false,
          },
          {
            round: 1,
            pick: 29,
            from: "LAR",
            compensatory: false,
          },
          {
            round: 2,
            pick: 40,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 74,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 109,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 148,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 169,
            from: "LAR",
            compensatory: false,
          },
          {
            round: 5,
            pick: 176,
            from: null,
            compensatory: true,
          },
          {
            round: 6,
            pick: 210,
            from: "LAR",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Las Vegas Raiders',
    shortName: 'LVR',
    image: '/assets/team/las-vegas-raiders-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 1,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 36,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 67,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 102,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 117,
            from: "MIN",
            compensatory: false,
          },
          {
            round: 4,
            pick: 134,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 175,
            from: null,
            compensatory: true,
          },
          {
            round: 6,
            pick: 185,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 208,
            from: "BUF",
            compensatory: false,
          },
          {
            round: 7,
            pick: 219,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Los Angeles Chargers',
    shortName: 'LAC',
    image: '/assets/team/los-angeles-chargers-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 22,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 55,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 86,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 123,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 204,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Los Angeles Rams',
    shortName: 'LAR',
    image: '/assets/team/los-angeles-rams-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 13,
            from: "ATL",
            compensatory: false,
          },
          {
            round: 2,
            pick: 61,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 93,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 207,
            from: "HOU",
            compensatory: false,
          },
          {
            round: 7,
            pick: 232,
            from: "BAL",
            compensatory: false,
          },
          {
            round: 7,
            pick: 251,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 252,
            from: null,
            compensatory: true,
          },
        ]
      }
    ],
  },
  {
    name: 'Miami Dolphins',
    shortName: 'MIA',
    image: '/assets/team/miami-dolphins-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 11,
            from: null,
            compensatory: false,
          },
          {
            round: 1,
            pick: 30,
            from: "DEN",
            compensatory: false,
          },
          {
            round: 2,
            pick: 43,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 75,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 87,
            from: "PHI",
            compensatory: false,
          },
          {
            round: 3,
            pick: 90,
            from: "HOU",
            compensatory: false,
          },
          {
            round: 3,
            pick: 94,
            from: "DEN",
            compensatory: false,
          },
          {
            round: 4,
            pick: 130,
            from: "DEN",
            compensatory: false,
          },
          {
            round: 5,
            pick: 151,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 227,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 238,
            from: "LAC",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Minnesota Vikings',
    shortName: 'MIN',
    image: '/assets/team/minnesota-vikings-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 18,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 49,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 82,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 97,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 163,
            from: "PHI",
            compensatory: false,
          },
          {
            round: 6,
            pick: 196,
            from: "PHI",
            compensatory: false,
          },
          {
            round: 7,
            pick: 234,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 235,
            from: "CAR",
            compensatory: false,
          },
          {
            round: 7,
            pick: 244,
            from: "HOU",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'New England Patriots',
    shortName: 'NE',
    image: '/assets/team/new-england-patriots-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 31,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 63,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 95,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 125,
            from: "CHI",
            compensatory: false,
          },
          {
            round: 4,
            pick: 131,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 171,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 191,
            from: "KC",
            compensatory: false,
          },
          {
            round: 6,
            pick: 198,
            from: "MIN",
            compensatory: false,
          },
          {
            round: 6,
            pick: 202,
            from: "PIT",
            compensatory: false,
          },
          {
            round: 6,
            pick: 212,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 247,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'New Orleans Saints',
    shortName: 'NO',
    image: '/assets/team/new-orleans-saints-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 8,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 42,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 73,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 132,
            from: "SEA",
            compensatory: false,
          },
          {
            round: 4,
            pick: 136,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 150,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 172,
            from: "SEA",
            compensatory: false,
          },
          {
            round: 6,
            pick: 190,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'New York Giants',
    shortName: 'NYG',
    image: '/assets/team/new-york-giants-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 5,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 37,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 105,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 145,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 186,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 192,
            from: "MIA",
            compensatory: false,
          },
          {
            round: 6,
            pick: 193,
            from: "DAL",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'New York Jets',
    shortName: 'NYJ',
    image: '/assets/team/new-york-jets-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 2,
            from: null,
            compensatory: false,
          },
          {
            round: 1,
            pick: 16,
            from: "IND",
            compensatory: false,
          },
          {
            round: 2,
            pick: 33,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 44,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 103,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 140,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 179,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 228,
            from: "DEN",
            compensatory: false,
          },
          {
            round: 7,
            pick: 242,
            from: "BUF",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Philadelphia Eagles',
    shortName: 'PHI',
    image: '/assets/team/philadelphia-eagles-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 23,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 54,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 68,
            from: "NYJ",
            compensatory: false,
          },
          {
            round: 3,
            pick: 98,
            from: null,
            compensatory: true,
          },
          {
            round: 4,
            pick: 114,
            from: "ATL",
            compensatory: false,
          },
          {
            round: 4,
            pick: 137,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 153,
            from: "ATL",
            compensatory: false,
          },
          {
            round: 5,
            pick: 178,
            from: null,
            compensatory: true,
          },
          {
            round: 6,
            pick: 197,
            from: "ATL",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Pittsburgh Steelers',
    shortName: 'PIT',
    image: '/assets/team/pittsburgh-steelers-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 21,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 53,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 76,
            from: "DAL",
            compensatory: false,
          },
          {
            round: 3,
            pick: 85,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 99,
            from: null,
            compensatory: true,
          },
          {
            round: 4,
            pick: 121,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 135,
            from: null,
            compensatory: true,
          },
          {
            round: 5,
            pick: 161,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 216,
            from: null,
            compensatory: true,
          },
          {
            round: 7,
            pick: 224,
            from: "NO",
            compensatory: false,
          },
          {
            round: 7,
            pick: 230,
            from: "IND",
            compensatory: false,
          },
          {
            round: 7,
            pick: 237,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'San Francisco 49ers',
    shortName: 'SF',
    image: '/assets/team/san-francisco-49ers-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 27,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 58,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 127,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 133,
            from: null,
            compensatory: true,
          },
          {
            round: 4,
            pick: 138,
            from: null,
            compensatory: true,
          },
          {
            round: 4,
            pick: 139,
            from: null,
            compensatory: true,
          },
        ],
      }
    ],
  },
  {
    name: 'Seattle Seahawks',
    shortName: 'SEA',
    image: '/assets/team/seattle-seahawks-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 32,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 64,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 96,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 188,
            from: "CLE",
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Tampa Bay Buccaneers',
    shortName: 'TB',
    image: '/assets/team/tampa-bay-buccaneers-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 15,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 46,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 77,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 116,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 155,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 195,
            from: null,
            compensatory: false,
          },
          {
            round: 7,
            pick: 229,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
  {
    name: 'Tennessee Titans',
    shortName: 'TEN',
    image: '/assets/team/tennessee-titans-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 4,
            from: null,
            compensatory: false,
          },
          {
            round: 2,
            pick: 35,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 66,
            from: null,
            compensatory: false,
          },
          {
            round: 4,
            pick: 101,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 142,
            from: "NYJ",
            compensatory: false,
          },
          {
            round: 5,
            pick: 144,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 184,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 194,
            from: "BAL",
            compensatory: false,
          },
          {
            round: 7,
            pick: 225,
            from: "KC",
            compensatory: false,
          },
        ]
      },
      {
        year: 2025,
        picks: [
          {
            pick: 1,
            round: 1,
            from: null,
            compensatory: false
          }
        ]
      },
    ],
  },
  {
    name: 'Washington Commanders',
    shortName: 'WAS',
    image: '/assets/team/washington-commanders-logo.png',
    draftClasses: [
      {
        year: 2026,
        picks: [
          {
            round: 1,
            pick: 7,
            from: null,
            compensatory: false,
          },
          {
            round: 3,
            pick: 71,
            from: null,
            compensatory: false,
          },
          {
            round: 5,
            pick: 147,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 187,
            from: null,
            compensatory: false,
          },
          {
            round: 6,
            pick: 209,
            from: "SF",
            compensatory: false,
          },
          {
            round: 7,
            pick: 223,
            from: null,
            compensatory: false,
          },
        ]
      }
    ],
  },
] satisfies Team[]

const backgroundColors = {
  'Arizona Cardinals': 'before:bg-cardinals',
  'Atlanta Falcons': 'before:bg-falcons',
  'Baltimore Ravens': 'before:bg-ravens',
  'Buffalo Bills': 'before:bg-bills',
  'Carolina Panthers': 'before:bg-panthers',
  'Chicago Bears': 'before:bg-bears',
  'Cincinnati Bengals': 'before:bg-bengals',
  'Cleveland Browns': 'before:bg-browns',
  'Dallas Cowboys': 'before:bg-cowboys',
  'Denver Broncos': 'before:bg-broncos',
  'Detroit Lions': 'before:bg-lions',
  'Green Bay Packers': 'before:bg-packers',
  'Houston Texans': 'before:bg-texans',
  'Indianapolis Colts': 'before:bg-colts',
  'Jacksonville Jaguars': 'before:bg-jaguars',
  'Kansas City Chiefs': 'before:bg-chiefs',
  'Las Vegas Raiders': 'before:bg-raiders',
  'Los Angeles Chargers': 'before:bg-chargers',
  'Los Angeles Rams': 'before:bg-rams',
  'Miami Dolphins': 'before:bg-dolphins',
  'Minnesota Vikings': 'before:bg-vikings',
  'New England Patriots': 'before:bg-patriots',
  'New Orleans Saints': 'before:bg-saints',
  'New York Giants': 'before:bg-giants',
  'New York Jets': 'before:bg-jets',
  'Philadelphia Eagles': 'before:bg-eagles',
  'Pittsburgh Steelers': 'before:bg-steelers',
  'San Francisco 49ers': 'before:bg-49ers',
  'Seattle Seahawks': 'before:bg-seahawks',
  'Tampa Bay Buccaneers': 'before:bg-buccaneers',
  'Tennessee Titans': 'before:bg-titans',
  'Washington Commanders': 'before:bg-commanders',
}

const borderColors = {
  'Arizona Cardinals': 'border-cardinals',
  'Atlanta Falcons': 'border-falcons',
  'Baltimore Ravens': 'border-ravens',
  'Buffalo Bills': 'border-bills',
  'Carolina Panthers': 'border-panthers',
  'Chicago Bears': 'border-bears',
  'Cincinnati Bengals': 'border-bengals',
  'Cleveland Browns': 'border-browns',
  'Dallas Cowboys': 'border-cowboys',
  'Denver Broncos': 'border-broncos',
  'Detroit Lions': 'border-lions',
  'Green Bay Packers': 'border-packers',
  'Houston Texans': 'border-texans',
  'Indianapolis Colts': 'border-colts',
  'Jacksonville Jaguars': 'border-jaguars',
  'Kansas City Chiefs': 'border-chiefs',
  'Las Vegas Raiders': 'border-raiders',
  'Los Angeles Chargers': 'border-chargers',
  'Los Angeles Rams': 'border-rams',
  'Miami Dolphins': 'border-dolphins',
  'Minnesota Vikings': 'border-vikings',
  'New England Patriots': 'border-patriots',
  'New Orleans Saints': 'border-saints',
  'New York Giants': 'border-giants',
  'New York Jets': 'border-jets',
  'Philadelphia Eagles': 'border-eagles',
  'Pittsburgh Steelers': 'border-steelers',
  'San Francisco 49ers': 'border-49ers',
  'Seattle Seahawks': 'border-seahawks',
  'Tampa Bay Buccaneers': 'border-buccaneers',
  'Tennessee Titans': 'border-titans',
  'Washington Commanders': 'border-commanders',
}

export default function useTeams() {
  const getBackgroundColor = (team: string) => backgroundColors[team]
  const getBorderColor = (team: string) => borderColors[team]

  const getFirstPickForYear = (team: Team, year: number) => {
    return team.draftClasses.find((draftClass) => draftClass.year === year)?.picks[0]
  }

  return {
    getBackgroundColor,
    getBorderColor,

    getFirstPickForYear,

    teams,
  }
}
