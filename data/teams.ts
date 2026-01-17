export interface Team {
  id: string;
  name: string;
  city: string;
  league: 'MLB' | 'NBA' | 'NFL';
  primaryColor: string;
  secondaryColor: string;
}

export const teams: Team[] = [
  // MLB Teams
  { id: 'yankees', name: 'Yankees', city: 'New York', league: 'MLB', primaryColor: '#1C2841', secondaryColor: '#FFFFFF' },
  { id: 'dodgers', name: 'Dodgers', city: 'Los Angeles', league: 'MLB', primaryColor: '#005A9C', secondaryColor: '#FFFFFF' },
  { id: 'red-sox', name: 'Red Sox', city: 'Boston', league: 'MLB', primaryColor: '#BD3039', secondaryColor: '#0C2340' },
  { id: 'cubs', name: 'Cubs', city: 'Chicago', league: 'MLB', primaryColor: '#0E3386', secondaryColor: '#CC3433' },
  { id: 'giants', name: 'Giants', city: 'San Francisco', league: 'MLB', primaryColor: '#27251F', secondaryColor: '#FD5A1E' },
  { id: 'braves', name: 'Braves', city: 'Atlanta', league: 'MLB', primaryColor: '#13274F', secondaryColor: '#CE1141' },
  { id: 'marlins', name: 'Marlins', city: 'Miami', league: 'MLB', primaryColor: '#000000', secondaryColor: '#00A3E0' },
  { id: 'rangers', name: 'Rangers', city: 'Texas', league: 'MLB', primaryColor: '#003278', secondaryColor: '#C0111F' },

  // NBA Teams
  { id: 'lakers', name: 'Lakers', city: 'Los Angeles', league: 'NBA', primaryColor: '#552583', secondaryColor: '#FDB927' },
  { id: 'bulls', name: 'Bulls', city: 'Chicago', league: 'NBA', primaryColor: '#CE1141', secondaryColor: '#000000' },
  { id: 'heat', name: 'Heat', city: 'Miami', league: 'NBA', primaryColor: '#000000', secondaryColor: '#98002E' },
  { id: 'warriors', name: 'Warriors', city: 'Golden State', league: 'NBA', primaryColor: '#1D428A', secondaryColor: '#FFC72C' },
  { id: 'celtics', name: 'Celtics', city: 'Boston', league: 'NBA', primaryColor: '#007A33', secondaryColor: '#BA9653' },
  { id: 'nets', name: 'Nets', city: 'Brooklyn', league: 'NBA', primaryColor: '#000000', secondaryColor: '#FFFFFF' },
  { id: 'knicks', name: 'Knicks', city: 'New York', league: 'NBA', primaryColor: '#006BB6', secondaryColor: '#F58426' },
  { id: 'suns', name: 'Suns', city: 'Phoenix', league: 'NBA', primaryColor: '#1D1160', secondaryColor: '#E56020' },

  // NFL Teams
  { id: 'cowboys', name: 'Cowboys', city: 'Dallas', league: 'NFL', primaryColor: '#003594', secondaryColor: '#869397' },
  { id: 'patriots', name: 'Patriots', city: 'New England', league: 'NFL', primaryColor: '#002244', secondaryColor: '#C60C30' },
  { id: '49ers', name: '49ers', city: 'San Francisco', league: 'NFL', primaryColor: '#AA0000', secondaryColor: '#B3995D' },
  { id: 'packers', name: 'Packers', city: 'Green Bay', league: 'NFL', primaryColor: '#203731', secondaryColor: '#FFB612' },
  { id: 'steelers', name: 'Steelers', city: 'Pittsburgh', league: 'NFL', primaryColor: '#000000', secondaryColor: '#FFB612' },
  { id: 'raiders', name: 'Raiders', city: 'Las Vegas', league: 'NFL', primaryColor: '#000000', secondaryColor: '#A5ACAF' },
  { id: 'chiefs', name: 'Chiefs', city: 'Kansas City', league: 'NFL', primaryColor: '#E31837', secondaryColor: '#FFB81C' },
  { id: 'seahawks', name: 'Seahawks', city: 'Seattle', league: 'NFL', primaryColor: '#002244', secondaryColor: '#69BE28' },
];

export const getTeamsByLeague = (league: 'MLB' | 'NBA' | 'NFL') => {
  return teams.filter(t => t.league === league);
};
