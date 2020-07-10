import { getBills } from '../Services';

describe('Services', () => {
  it('should get bills', async () => {
    const expectedResponse = [
      {
        id: 1,
        amount: 20,
        date: '2020-01-20',
        status: 'paid',
        url: 'https://via.placeholder.com/240x320/33FFFA?text=School+Fees',
        thumbnailUrl: 'https://via.placeholder.com/150/33FFFA?text=School+Fees',
      },
    ];

    fetchMock.mockResponse(JSON.stringify(expectedResponse));
    const bills = await getBills();
    expect(fetchMock.mock.calls.length).toEqual(1);
    expect(bills).toEqual(expectedResponse);
  });
});
