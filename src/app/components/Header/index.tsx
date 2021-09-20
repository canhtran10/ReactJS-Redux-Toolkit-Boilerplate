import * as React from 'react';
import LogoImg from 'assets/images/logo.png';
import 'styles/libs/index';
import { PageWrapper } from 'app/components/PageWrapper';
import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeSwitch } from '../ThemeSwitch';

export function Header() {
  return (
    <PageWrapper>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={ LogoImg } width="90" height="70" className="d-inline-block align-top" alt={"Logo"} />
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto'>
              <LanguageSwitch />
              <ThemeSwitch />
            </ul>
          </div>
        </nav>
      </header>
    </PageWrapper>
  );
}
