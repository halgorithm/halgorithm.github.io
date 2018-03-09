import freeze from 'deep-freeze';

const data = freeze({
  platformer: {
    id: 'platformer',
    label: 'Platformer',
    icon: 'directions_run'
  },
  jam: {
    id: 'jam',
    label: '24-hour challenge',
    icon: 'timer'
  },
  co_op: {
    id: 'co_op',
    label: 'Co-op',
    icon: 'supervisor_account'
  }
});

export default data;
