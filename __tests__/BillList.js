import React from 'react';
import { FlatList } from 'react-native';
import BillList from '../src/components/BillList';
import { maxNumberOfBillsToRender } from '../src/constants';
import * as services from '../Services';
import renderer from 'react-test-renderer';

describe('BillList', () => {
  let tree, flatList, instance;

  beforeEach(() => {
    tree = renderer.create(<BillList />);
    flatList = tree.root.findByType(FlatList);
    instance = tree.getInstance();
  });

  it('should render bills', () => {
    expect(flatList).toBeTruthy();
  });

  it('should render a maximum of 10 bills on screen at a time', () => {
    expect(flatList.props.initialNumToRender).toEqual(maxNumberOfBillsToRender);
    expect(flatList.props.maxToRenderPerBatch).toEqual(
      maxNumberOfBillsToRender
    );
  });

  it('should get bills on componentDidMount()', () => {
    jest.spyOn(instance, 'getBills');
    instance.componentDidMount();
    expect(instance.getBills).toHaveBeenCalled();
  });

  it('should set state of bills with fetched data', async () => {
    const bills = [
      {
        id: '1',
        amount: 20,
        date: '2020-01-20',
        status: 'paid',
      },
    ];
    jest.spyOn(instance, 'setState');
    jest.spyOn(services, 'getBills').mockReturnValue(bills);
    await instance.getBills();
    expect(instance.setState).toHaveBeenCalledWith({ bills });
  });
});
