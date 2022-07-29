import { CartItem } from './reducer';

export enum ActionTypes {
  ADD_NEW_OR_INCREMENT = 'ADD_NEW_OR_INCREMENT',
  DECREMENT_OR_REMOVE = 'DECREMENT_OR_REMOVE',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

type AddNewCartItemProps = Omit<CartItem, 'amount'>;

export function addNewCartItemAction(item: AddNewCartItemProps) {
  return {
    type: ActionTypes.ADD_NEW_OR_INCREMENT,
    payload: {
      newItem: item,
    },
  };
}

export function decrementAmountOrRemoveCartItemAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_OR_REMOVE,
    payload: {
      id,
    },
  };
}

export function removeCartItemAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  };
}
