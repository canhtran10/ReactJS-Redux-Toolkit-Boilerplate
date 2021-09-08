import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { PageWrapper } from 'app/components/PageWrapper';
import 'styles/pages/home.scss';
import { Demo } from "./components/Demo";
import {Redirect, Link} from "react-router-dom";

export function HomePage() {

  const redirectToCheckoutPage = () => {
    console.log('Click');
    return <Redirect to={'/checkout'}/>;
    return <Redirect
      to={{
        pathname: "/checkout",
        search: "?utm=your+face",
        state: { referrer: "" }
      }}
    />
  }

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Header/>
      <PageWrapper>
        <div className="body-container">
          <div className="row">
            <h1>Home Page</h1>

            <Demo />

            <Link to="/checkout">Checkout</Link>

            <Link to="/dashboard">Dashboard</Link>

          </div>
        </div>
      </PageWrapper>
    </>
  );
}
