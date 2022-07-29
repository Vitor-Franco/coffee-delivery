import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import OrderCard from '../../components/OrderCard';
import { CartContext } from '../../contexts/CartContexts';
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
  GridInputs,
  Cep,
  Rua,
  Numero,
  Complemento,
  Bairro,
  Cidade,
  UF,
  Total,
  PaymentButton,
  NotSelectedProducts,
} from './styles';

interface ICheckoutForm {
  cep: string;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  uf: string;
}

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const { cartItems } = useContext(CartContext);
  const { register, handleSubmit } = useForm<ICheckoutForm>();

  function handlePaymentMethod(method: string) {
    setPaymentMethod(method);
  }

  function handleNewOrderSubmit(data: ICheckoutForm) {
    console.log(
      '🚀 ~ file: index.tsx ~ line 46 ~ handleNewOrderSubmit ~ data',
      data
    );
  }

  const amountTotal = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue?.price * currentValue?.amount,
    0
  );

  const taxsAmount = amountTotal * 0.05;
  
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

            <GridInputs>
              <Cep>
                <Input type="text" placeholder="CEP" {...register('cep')} />
              </Cep>
              <Rua>
                <Input type="text" placeholder="Rua" {...register('street')} />
              </Rua>

              <Numero>
                <Input
                  type="text"
                  placeholder="Número"
                  {...register('number')}
                />
              </Numero>

              <Complemento>
                <Input
                  type="text"
                  placeholder="Complemento"
                  isOptional
                  {...register('complement')}
                />
              </Complemento>

              <Bairro>
                <Input
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                />
              </Bairro>

              <Cidade>
                <Input type="text" placeholder="Cidade" {...register('city')} />
              </Cidade>

              <UF>
                <Input type="text" placeholder="UF" {...register('uf')} />
              </UF>
            </GridInputs>
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
                      }).format(taxsAmount)}
                    </span>
                  </div>
                  <Total>
                    <strong>Total</strong>
                    <strong>
                      {new Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        style: 'currency',
                      }).format(amountTotal + taxsAmount)}
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
