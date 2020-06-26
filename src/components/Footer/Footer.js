import React from 'react';
import styled from 'styled-components/macro';
import Icon from '../Icons/Icon';

import { useAppContext } from '../../context/AppProvider';
import { footerData } from '../../data';

const FooterWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.fullGrey};
`;

const FooterNav = styled.nav`
  position: relative;
  width: 100%;
`;

const NavLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  max-width: 61.5rem;
  padding: 3rem 1.5rem;
  width: 100%;
  justify-items: center;
`;

const NavLinkColumn = styled.div`
  position: relative;
`;

const NavLinkColumnItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavLinkColumnItem = styled.li`
  font-size: 0.875rem;
  letter-spacing: 0.031;
  line-height: 1.14;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  padding-bottom: 1.25rem;

  &:first-child {
    font-weight: 700;
  }

  &:last-child {
    padding-bottom: 0;
  }

  a {
    color: ${(props) => props.theme.colors.white};
    &:hover {
      color: ${(props) => props.theme.colors.softGrey};
    }
  }
`;

const FooterSocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.0625rem solid ${(props) => props.theme.colors.borderGrey};
  padding: 1rem;
`;

const SocialLinkItems = styled.ul`
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const SocialLinkItem = styled.li`
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  margin: 0 1rem;
  padding: 0;
  z-index: 1;

  ::after {
    content: '';
    position: absolute;
    background: linear-gradient(140deg, #0069d2, #28e1a5);
    border-radius: 50%;
    bottom: -0.125rem;
    left: -0.125rem;
    right: -0.125rem;
    top: -0.125rem;
    z-index: -1;
  }

  a {
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    background-color: ${(props) => props.theme.colors.fullGrey};
    border-radius: 50%;
    justify-content: center;

    span {
      margin-top: -0.0625rem;
    }
  }
}
`;

const FooterLegalContainer = styled.div`
  position: relative;
  border-top: 0.0625rem solid ${(props) => props.theme.colors.borderGrey};
  width: 100%;
`;

const FooterLegalItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  justify-content: space-between;
  padding: 1.5rem 2.625rem;

  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.large} {
    flex-direction: row;
  }
`;

const LanguageSelection = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
  color: ${(props) => props.theme.colors.white};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.031;
  line-height: 1.14;
  height: 1rem;

  .dropdown {
    margin: 0.0625rem 0 0 0.375rem;
  }
`;

const LegalLinks = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  margin: 0 auto;
  padding: 1.5rem 0 0;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  flex: 1 1;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.large} {
    flex-direction: row;
    padding: 0;
  }
`;

const LegalLinkItem = styled.div`
  font-size: 0.875rem;
  color: rgb(255, 255, 255);
  font-weight: 400;
  letter-spacing: 0.019;
  line-height: 1.14;
  padding-bottom: 1.125rem;

  a {
    color: ${(props) => props.theme.colors.white};
    &:hover {
      color: ${(props) => props.theme.colors.softGrey};
    }
  }

  @media ${(props) => props.theme.breakpoints.large} {
    padding-right: 1.5rem;
    flex-direction: row;
    padding-bottom: 0;
    &:first-child {
      margin-left: -3.5rem;
    }
  }
`;

const LanguageSelect = styled.select`
  position: relative;
  background: #2e3134;
  border: none;
  outline: none;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.5;
  color: #fff;
  cursor: pointer;
`;

const SelectOption = styled.option`
  font-size: 0.875rem;
`;

const LanguageSelector = () => {
  // set the language globally
  const { handleSetCurrentLanguage, currentLanguage } = useAppContext();

  return (
    <form>
      <LanguageSelect
        name="language"
        value={currentLanguage}
        onChange={(evt) => handleSetCurrentLanguage(evt.target.value)}>
        <SelectOption value="english">English</SelectOption>
        <SelectOption value="french">French</SelectOption>
        <SelectOption value="spanish">Spanish</SelectOption>
        <SelectOption value="german">German</SelectOption>
        <SelectOption value="dutch">Dutch</SelectOption>
        <SelectOption value="polish">Polish</SelectOption>
      </LanguageSelect>
    </form>
  );
};

const Footer = () => {
  const { navLinks, socialLinks, legalLinks } = footerData;

  return (
    <FooterWrapper>
      <FooterNav>
        <NavLinkContainer>
          {Object.values(navLinks).map((nav) => {
            return (
              <NavLinkColumn key={nav.title}>
                <NavLinkColumnItems>
                  <NavLinkColumnItem>{nav.title}</NavLinkColumnItem>
                  {nav.sublinks.map((item) => {
                    return (
                      <NavLinkColumnItem key={item.title}>
                        <a href={item.link}>{item.title}</a>
                      </NavLinkColumnItem>
                    );
                  })}
                </NavLinkColumnItems>
              </NavLinkColumn>
            );
          })}
        </NavLinkContainer>
        <FooterSocialLinks>
          <SocialLinkItems>
            {socialLinks.map(({ title, link }) => {
              return (
                <SocialLinkItem key={title}>
                  <a href={link}>
                    <Icon name={title} />
                  </a>
                </SocialLinkItem>
              );
            })}
          </SocialLinkItems>
        </FooterSocialLinks>
        <FooterLegalContainer>
          <FooterLegalItems>
            <LanguageSelection>
              <LanguageSelector />
            </LanguageSelection>
            <LegalLinks>
              {legalLinks.map(({ title, link }) => {
                return (
                  <LegalLinkItem key={title}>
                    <a href={link}>{title}</a>
                  </LegalLinkItem>
                );
              })}
            </LegalLinks>
          </FooterLegalItems>
        </FooterLegalContainer>
      </FooterNav>
    </FooterWrapper>
  );
};

export { Footer };
