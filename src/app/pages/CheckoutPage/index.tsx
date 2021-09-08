import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';
import { Helmet } from 'react-helmet-async';
import { StyleConstants } from 'styles/StyleConstants';
import {Header} from "../../components/Header";
import {PageWrapper} from "../../components/PageWrapper";

export function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Checkout Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <Header/>
      <PageWrapper>
        <div className="body-container">
          <div className="row">
            <h1>Checkout Page</h1>
            <a href={'/'}>Redirect to Home Page</a>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${p => p.theme.text};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
