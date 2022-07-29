import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { CartContext } from '../../contexts/CartContexts';
import { HeaderContainer, Location, Navigator, GoToCart } from './styles';

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <Navigator>
        <Location>
          <MapPin size={24} weight="fill" />
          Guarulhos, SP
        </Location>
        <NavLink to="/checkout" title="Ir para carrinho">
          <GoToCart>
            <ShoppingCart size={24} weight="fill" />
            {cartItems?.length > 0 && <span>{cartItems.length}</span>}
          </GoToCart>
        </NavLink>
      </Navigator>
    </HeaderContainer>
  );
}

export { Header };
