import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { useContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import OrderCard from '../../components/OrderCard';
import { CartContext } from '../../contexts/CartContexts';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContainerCheckout,
  FormCheckout,
  Section,
  Container,
  CartResume,
  Resume,
  DescriptionAddress,
  DescriptionPayment,
  PaymentMethods,
  ButtonPayment,
  Total,
  PaymentButton,
  NotSelectedProducts,
} from './styles';
import { FormUser } from './components/FormUser';
import { useNavigate } from 'react-router-dom';

const newOrderFormSchemaValidation = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe um cep válido')
    .max(9, 'Informe um cep válido'),
  street: zod.string().min(2, 'Informe uma rua válida'),
  number: zod.string().min(2, 'Informe um número válido'),
  complement: zod.string().optional(),
  district: zod.string().min(2, 'Informe um bairro válido'),
  city: zod.string().min(2, 'Informe uma cidade válida'),
  uf: zod.string().max(2, 'Incorreto').min(2, 'Incorreto'),
});

export type NewOrderFormData = zod.infer<typeof newOrderFormSchemaValidation>;

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const FormUserProvider = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormSchemaValidation),
  });
  const { handleSubmit } = FormUserProvider;

  function handlePaymentMethod(method: string) {
    setPaymentMethod(method);
  }

  function handleNewOrderSubmit(data: NewOrderFormData) {
    // Efetivando um pedido
    localStorage.setItem(
      '@coffee-delivery:coffes-order-1.0.0',
      JSON.stringify(data)
    );

    // Removendo carrinho
    localStorage.removeItem('@coffee-delivery:coffes-items-cart-1.0.0');

    alert('Pedido realizado com sucesso!');
    navigate('/order');
  }

  const amountTotal = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue?.price * currentValue?.amount,
    0
  );

  const feeAmount = amountTotal * 0.05;

  return (
    <ContainerCheckout>
      <FormCheckout onSubmit={handleSubmit(handleNewOrderSubmit)}>
        <Section>
          <h2>Complete seu pedido</h2>
          <Container>
            <DescriptionAddress>
              <MapPinLine size={22} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </DescriptionAddress>

            <FormProvider {...FormUserProvider}>
              <FormUser />
            </FormProvider>
          </Container>

          <Container>
            <DescriptionPayment>
              <CurrencyDollar size={22} weight="fill" />
              <div>
                <p>Pagamento</p>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </DescriptionPayment>

            <PaymentMethods>
              <ButtonPayment
                type="button"
                isActive={paymentMethod === 'credit'}
                onClick={() => handlePaymentMethod('credit')}
              >
                <CreditCard size={16} />
                Cartão de crédito
              </ButtonPayment>
              <ButtonPayment
                type="button"
                isActive={paymentMethod === 'debit'}
                onClick={() => handlePaymentMethod('debit')}
              >
                <Bank size={16} />
                Cartão de débito
              </ButtonPayment>
              <ButtonPayment
                type="button"
                isActive={paymentMethod === 'money'}
                onClick={() => handlePaymentMethod('money')}
              >
                <Money size={16} />
                Dinheiro
              </ButtonPayment>
            </PaymentMethods>
          </Container>
        </Section>

        <Section>
          <h2>Cafés selecionados</h2>
          <CartResume>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <OrderCard
                    key={item.id}
                    name={item.name}
                    image_url={item.image_url}
                    price={item.price}
                    id={item.id}
                  />
                ))}

                <Resume>
                  <div>
                    <span>Total de itens</span>
                    <span>
                      {new Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency',
                      }).format(amountTotal)}
                    </span>
                  </div>
                  <div>
                    <span>Entrega</span>
                    <span>
                      {new Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency',
                      }).format(feeAmount)}
                    </span>
                  </div>
                  <Total>
                    <strong>Total</strong>
                    <strong>
                      {new Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency',
                      }).format(amountTotal + feeAmount)}
                    </strong>
                  </Total>
                </Resume>
                <PaymentButton type="submit">Confirmar Pedido</PaymentButton>
              </>
            ) : (
              <NotSelectedProducts>
                <p>Nada selecionado</p>
              </NotSelectedProducts>
            )}
          </CartResume>
        </Section>
      </FormCheckout>
    </ContainerCheckout>
  );
}

export { Checkout };
