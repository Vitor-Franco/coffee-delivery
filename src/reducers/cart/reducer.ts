import produce from 'immer';
import { ActionTypes } from './actions';

export interface CartItem {
  id: number;
  name: string;
  amount: number;
  price: number;
  image_url: string;
}

interface CartItemsState {
  items: CartItem[];
}

interface IAction {
  payload: any;
  type: ActionTypes;
}

function saveOnLocalStorageCart(state: CartItemsState) {
  localStorage.setItem(
    '@coffee-delivery:coffes-items-cart-1.0.0',
    JSON.stringify(state)
  );
}

export function cartReducer(state: CartItemsState, action: IAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_OR_INCREMENT: {
      const stateHandled = produce(state, (draft) => {
        const { newItem } = action.payload;
        const itemExistsInCart = state.items.findIndex(
          (item) => item.id === newItem.id
        );

        if (itemExistsInCart >= 0) {
          draft.items[itemExistsInCart].amount += 1;
          return;
        }

        draft.items.push({ ...newItem, amount: 1 });
      });

      saveOnLocalStorageCart(stateHandled);
      return stateHandled;
    }

    case ActionTypes.DECREMENT_OR_REMOVE: {
      const stateHandled = produce(state, (draft) => {
        const { id } = action.payload;
        const coffeeActual = draft.items.findIndex((item) => item.id === id);
        const hasValueToDecrement =
          coffeeActual >= 0 && draft.items[coffeeActual].amount > 1;

        if (hasValueToDecrement) {
          draft.items[coffeeActual].amount -= 1;
          return;
        }

        draft.items = draft.items.filter((item) => item.id !== id);
      });

      saveOnLocalStorageCart(stateHandled);
      return stateHandled;
    }

    case ActionTypes.REMOVE_ITEM: {
      const stateHandled = produce(state, (draft) => {
        const { id } = action.payload;
        draft.items = draft.items.filter((item) => item.id !== id);
      });

      saveOnLocalStorageCart(stateHandled);
      return stateHandled;
    }

    default:
      return state;
  }
}
