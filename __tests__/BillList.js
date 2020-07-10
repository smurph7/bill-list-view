import React from 'react';
import { FlatList } from 'react-native';
import BillList from '../src/components/BillList';
import { maxNumberOfBillsToRender } from '../src/constants';
import renderer from 'react-test-renderer';

it('should render bills', () => {
  const tree = renderer.create(<BillList />);
  const flatList = tree.root.findByType(FlatList);
  expect(flatList).toBeTruthy();
});

it('should render a maximum of 10 bills on screen at a time', () => {
  const tree = renderer.create(<BillList />);
  const flatListProps = tree.root.findByType(FlatList).props;
  expect(flatListProps.initialNumToRender).toEqual(maxNumberOfBillsToRender);
  expect(flatListProps.maxToRenderPerBatch).toEqual(maxNumberOfBillsToRender);
});
