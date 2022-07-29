import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import React from 'react';
import {
  Container,
  Content,
  Address,
  Delivery,
  Payment,
  Image,
  Benefits,
  Benefit,
} from './styles';

import imageOrderDelivery from '../../assets/order-delivery.svg';

function Order() {
  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Content>
        <Benefits>
          <Benefit>
            <Address>
              <MapPin size={16} weight="fill" />
            </Address>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </Benefit>
          <Benefit>
            <Delivery>
              <Timer size={16} weight="fill" />
            </Delivery>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </Benefit>
          <Benefit>
            <Payment>
              <CurrencyDollar size={16} weight="fill" />
            </Payment>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </Benefit>
        </Benefits>
        <Image>
          <img src={imageOrderDelivery} alt="" />
        </Image>
      </Content>
    </Container>
  );
}

export { Order };
