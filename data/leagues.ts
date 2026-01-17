export interface League {
  id: string;
  name: string;
  fullName: string;
  emoji: string;
  color: string;
  gradient: string;
  description: string;
}

export const leagues: League[] = [
  {
    id: 'MLB',
    name: 'MLB',
    fullName: 'Major League Baseball',
    emoji: '⚾',
    color: '#002D72',
    gradient: 'from-[#002D72] to-[#001D42]',
    description: 'Yankees, Dodgers, Red Sox y más'
  },
  {
    id: 'NBA',
    name: 'NBA',
    fullName: 'National Basketball Association',
    emoji: '🏀',
    color: '#FD5E14',
    gradient: 'from-[#FD5E14] to-[#D54010]',
    description: 'Lakers, Bulls, Heat, Warriors'
  },
  {
    id: 'NFL',
    name: 'NFL',
    fullName: 'National Football League',
    emoji: '🏈',
    color: '#D50A0A',
    gradient: 'from-[#D50A0A] to-[#A50808]',
    description: 'Cowboys, Patriots, 49ers'
  }
];

export const getLeagueById = (id: string) => {
  return leagues.find(l => l.id === id);
};
