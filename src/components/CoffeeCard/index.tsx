import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContexts';

import {
  ContainerCard,
  ImageInfo,
  Badge,
  Badges,
  Footer,
  Amount,
  Total,
  TotalItems,
  CartButton,
} from './styles';

export interface CoffeeProps {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image_url: string;
}

function CoffeeCard({
  id,
  name,
  description,
  price,
  tags,
  image_url,
}: CoffeeProps) {
  const { addToCart, decrementToCart, getAmountOfCoffee } =
    useContext(CartContext);

  const totalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
    .format(price)
    .replace('R$', '')
    .trim();

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image_url,
    });
  }

  function handleDecrement() {
    decrementToCart(id);
  }

  return (
    <ContainerCard>
      <ImageInfo>
        <img src={image_url} alt={name} />
        <Badges>
          {tags.map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </Badges>
      </ImageInfo>

      <h4>{name}</h4>
      <p>{description}</p>

      <Footer>
        <Amount>
          R$ <strong>{totalPrice}</strong>
        </Amount>
        <Total>
          <TotalItems>
            <button type="button" onClick={handleDecrement}>
              <Minus size={16} weight="fill" />
            </button>
            <input type="text" value={getAmountOfCoffee(id)} disabled />
            <button type="button" onClick={handleAddToCart}>
              <Plus size={16} weight="fill" />
            </button>
          </TotalItems>

          <NavLink to={'/'}>
            <CartButton>
              <ShoppingCartSimple size={22} weight="fill" />
            </CartButton>
          </NavLink>
        </Total>
      </Footer>
    </ContainerCard>
  );
}

export { CoffeeCard };
