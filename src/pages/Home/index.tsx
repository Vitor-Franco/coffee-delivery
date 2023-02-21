import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
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
} from "./styles";
import BannerImage from "../../assets/banner.svg";
import { CoffeeCard, CoffeeProps } from "../../components/CoffeeCard";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/axios";

function Home() {
  const {
    data: coffees,
    isFetching,
    error,
    isLoading,
    isRefetching,
    isStale,
  } = useQuery<CoffeeProps[]>(
    ["coffees"],
    async () => {
      const res = await api.get("/coffees/");
      return res.data;
    },
    {
      staleTime: 1000 * 5,
    }
  );

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

      <>
        {isFetching && (
          <span
            style={{
              display: "block",
              fontSize: 15,
              color: "#333",
              fontWeight: 600,
            }}
          >
            fetching...
          </span>
        )}
      </>
      <>
        {error && (
          <span
            style={{
              display: "block",
              fontSize: 15,
              color: "#333",
              fontWeight: 600,
            }}
          >
            Erro ao carregar os dados
          </span>
        )}
      </>

      <>
        {isLoading && (
          <span
            style={{
              display: "block",
              fontSize: 15,
              color: "#333",
              fontWeight: 600,
            }}
          >
            Carregando...
          </span>
        )}
      </>

      <Content>
        <Title>Nossos Cafés</Title>

        <ShoppingInfo>
          {coffees?.map((coffee) => (
            <CoffeeCard key={coffee.id} {...coffee} />
          ))}
        </ShoppingInfo>
      </Content>
    </div>
  );
}

export { Home };
