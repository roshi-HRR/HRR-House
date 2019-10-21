const axios = require('axios');

describe('API Routes', () => {
    test('A get request to /house to fetch data', async () => {
      try {
        var response = await axios.get('http://localhost:3005/house');
      } catch (err) {
        console.error(err);
      }
      expect(response.status).toBe(200);
      expect(response.data.length).toBe(100);
      expect(Object.keys(response.data[0]).length).toBe(12);
      expect(typeof response.data[0].rooms.guests).toBe('number');
    });
  });