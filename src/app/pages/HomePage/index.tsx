import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { PageWrapper } from 'app/components/PageWrapper';
import 'styles/pages/home.scss';
import { Demo } from "./components/Demo";

export function HomePage() {
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
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
