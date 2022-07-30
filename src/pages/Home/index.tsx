import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useEffect, useState } from 'react';
import {
  BannerContent,
  Highlights,
  MainTitle,
  Subtitle,
  ImageBanner,
  Delivery,
  Box,
  Timing,
  CoffeeQuality,
  HighlightItem,
  BannerBackground,
  BannerImageBackground,
  Main,
  Title,
  Content,
  ShoppingInfo,
} from './styles';
import BannerImage from '../../assets/banner.svg';
import { CoffeeCard, CoffeeProps } from '../../components/CoffeeCard';

function Home() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);

  function loadCoffees() {
    try {
      fetch('http://localhost:3000/coffees/')
        .then((response) => response.json())
        .then((data) => setCoffees(data));
    } catch {
      console.log('Erro ao carregar os dados');
    }
  }

  useEffect(() => {
    loadCoffees();
  }, []);

  return (
    <div>
      <BannerBackground>
        <Main>
          <BannerContent>
            <MainTitle>
              Encontre o café perfeito para qualquer hora do dia
            </MainTitle>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              <br />
              qualquer hora
            </Subtitle>

            <Highlights>
              <HighlightItem>
                <Delivery>
                  <ShoppingCart size={16} weight="fill" />
                </Delivery>
                <span>Compra simples e segura</span>
              </HighlightItem>

              <HighlightItem>
                <Box>
                  <Package size={16} weight="fill" />
                </Box>
                <span>Embalagem mantém o café intacto</span>
              </HighlightItem>

              <HighlightItem>
                <Timing>
                  <Timer size={16} weight="fill" />
                </Timing>
                <span>Entrega rápida e rastreada</span>
              </HighlightItem>

              <HighlightItem>
                <CoffeeQuality>
                  <Coffee size={16} weight="fill" />
                </CoffeeQuality>
                <span>O café chega fresquinho até você</span>
              </HighlightItem>
            </Highlights>
          </BannerContent>

          <ImageBanner src={BannerImage} alt="" />
        </Main>
        <BannerImageBackground />
      </BannerBackground>

      <Content>
        <Title>Nossos Cafés</Title>

        <ShoppingInfo>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </ShoppingInfo>
      </Content>
    </div>
  );
}

export { Home };
