import React from 'react';
import { Routes as RoutesDom, Route } from 'react-router-dom';
import { DefaultPage } from '../layout/DefaultPage';
import { Checkout } from '../pages/Checkout';
import { Home } from '../pages/Home';
import { Order } from '../pages/Order';

function Routes() {
  return (
    <RoutesDom>
      <Route path="/" element={<DefaultPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </RoutesDom>
  );
}

export { Routes };
