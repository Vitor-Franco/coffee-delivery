import { Minus, Plus, Trash } from 'phosphor-react';
import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContexts';

import {
  OrderContainer,
  Content,
  Actions,
  AddMoreItems,
  RemoveItem,
  Amount,
} from './styles';

interface IOrderCardProps {
  name: string;
  price: number;
  image_url: string;
  id: number;
}

const OrderCard = ({ id, image_url, name, price }: IOrderCardProps) => {
  const { removeToCart, addToCart, decrementToCart, getAmountOfCoffee } =
    useContext(CartContext);

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image_url,
    });
  }

  function handleRemoveFromCart() {
    removeToCart(id);
  }

  function handleDecrement() {
    decrementToCart(id);
  }

  return (
    <OrderContainer>
      <img src={image_url} alt="" />
      <Content>
        <p>{name}</p>
        <Actions>
          <AddMoreItems>
            <button type="button" onClick={handleDecrement}>
              <Minus size={16} weight="fill" />
            </button>
            <input type="text" value={getAmountOfCoffee(id)} disabled />
            <button type="button" onClick={handleAddToCart}>
              <Plus size={16} weight="fill" />
            </button>
          </AddMoreItems>
          <RemoveItem type="button" onClick={handleRemoveFromCart}>
            <Trash size={16} />
            REMOVER
          </RemoveItem>
        </Actions>
      </Content>
      <Amount>
        {new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        }).format(price)}
      </Amount>
    </OrderContainer>
  );
};

export default OrderCard;
