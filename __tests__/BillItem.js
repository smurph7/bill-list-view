import React from 'react';
import BillItem, { formatString, formatDate } from '../src/components/BillItem';
import renderer from 'react-test-renderer';

describe('BillItem', () => {
  const bill = {
    id: '1',
    amount: 20,
    date: '2020-01-20',
    status: 'paid',
    url: 'https://via.placeholder.com/240x320/33FFFA?text=School+Fees',
    thumbnailUrl: 'https://via.placeholder.com/150/33FFFA?text=School+Fees',
  };

  it('should pass bill props correctly', () => {
    const tree = renderer.create(<BillItem bill={bill} />);
    expect(tree.root.props).toEqual({ bill });
  });

  it('should format status to have capital first letter', () => {
    expect(formatString('paid')).toEqual('Paid');
  });

  it('should format date to be dd/mm/yyyy', () => {
    expect(formatDate('2020-06-21')).toEqual('21/06/2020');
  });
});
