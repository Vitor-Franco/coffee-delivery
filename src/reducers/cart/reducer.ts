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

export function cartReducer(state: CartItemsState, action: IAction) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_OR_INCREMENT: {
      const { newItem } = action.payload;

      const itemExistsInCart = state.items.find(
        (item) => item.id === newItem.id
      );

      if (itemExistsInCart) {
        const handledItems = state.items.map((item) => {
          if (item.id === newItem.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }

          return item;
        });

        return {
          ...state,
          items: handledItems,
        };
      }

      Object.assign(newItem, {
        amount: 1,
      });

      return {
        ...state,
        items: [...state.items, newItem],
      };
    }

    case ActionTypes.DECREMENT_OR_REMOVE: {
      const { id } = action.payload;

      const coffeeActual = state.items.find((item) => item.id === id);

      const hasValueToRemove = !!coffeeActual && coffeeActual.amount > 1;
      if (hasValueToRemove) {
        const decrementedItem = state.items.map((coffeeActual) => {
          if (coffeeActual.id === id) {
            return {
              ...coffeeActual,
              amount: coffeeActual.amount - 1,
            };
          }

          return coffeeActual;
        });

        return {
          ...state,
          items: decrementedItem,
        };
      }

      const cartItemsWithoutRemovedItem = state.items.filter(
        (item) => item.id !== id
      );

      return {
        ...state,
        items: cartItemsWithoutRemovedItem,
      };
    }

    case ActionTypes.REMOVE_ITEM: {
      const { id } = action.payload;
      const itemsHandled = state.items.filter((item) => item.id !== id);

      return {
        ...state,
        items: itemsHandled,
      };
    }

    default:
      return state;
  }
}
