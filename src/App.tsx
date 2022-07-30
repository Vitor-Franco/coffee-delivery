import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContexts';
import { Routes } from './router/Routes';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Routes />
          </CartContextProvider>
        </BrowserRouter>

        <GlobalStyles />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
