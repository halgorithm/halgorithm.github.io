import freeze from 'deep-freeze';

const data = freeze({
  platformer: {
    id: 'platformer',
    label: 'Platformer'
  },
  jam: {
    id: 'jam',
    label: '24-hour challenge'
  },
  co_op: {
    id: 'co_op',
    label: 'Co-op'
  }
});

export default data;
