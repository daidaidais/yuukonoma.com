import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar, Nav } from "react-bootstrap";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = () => {
  const coverGradient =
    "linear-gradient(30deg, rgba(255,170,123,1) 0%, rgba(255,244,203,1) 100%)";

  return (
    <Navbar expand="lg" fixed="top" className="mt-3 mb-3">
      <Navbar.Toggle aria-controls="navbarResponsive">
        <StaticImage
                  src="../images/hamburger.png"
                  alt="hamburger.png"
                  className="hamburger"
                  loading="eager"
                  placeholder="blurred"
                />
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ml-auto">
          <Nav.Item as="li">
            <AniLink
              cover
              direction="right"
              bg={coverGradient}
              to="/"
              className="my-nav-link"
              activeClassName="nav-link-active"
            >
              TOP
            </AniLink>
          </Nav.Item>
          <Nav.Item as="li">
            <AniLink
              cover
              direction="right"
              bg={coverGradient}
              to="/hypnobirthing"
              className="my-nav-link"
              activeClassName="nav-link-active"
            >
              HYPNOBIRTHING
            </AniLink>
          </Nav.Item>
          <Nav.Item as="li">
          <AniLink
              cover
              direction="right"
              bg={coverGradient}
              to="/meditation"
              className="my-nav-link"
              activeClassName="nav-link-active"
            >
              瞑想講座
            </AniLink>
          </Nav.Item>
          <Nav.Item as="li">
            <AniLink
              cover
              direction="right"
              bg={coverGradient}
              to="/profile"
              className="my-nav-link"
              activeClassName="nav-link-active"
            >
              PROFILE
            </AniLink>
          </Nav.Item>
          <Nav.Item as="li">
            <a
              className="my-nav-link"
              href="https://www.instagram.com/yuukonoma/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 27 28"
                xmlns="http://www.w3.org/2000/svg"
                className="menu-icon"
              >
                <path d="M19.0735 27.6333H7.58913C3.40504 27.6333 0 24.1043 0 19.7679V7.86542C0 3.529 3.40504 0 7.58913 0H19.0735C23.2576 0 26.6627 3.529 26.6627 7.86542V19.7699C26.6627 24.1043 23.2576 27.6333 19.0735 27.6333ZM7.58913 2.36908C4.66482 2.36908 2.28586 4.83465 2.28586 7.86542V19.7699C2.28586 22.8007 4.66482 25.2662 7.58913 25.2662H19.0735C21.9978 25.2662 24.3768 22.8007 24.3768 19.7699V7.86542C24.3768 4.83465 21.9978 2.36908 19.0735 2.36908H7.58913V2.36908Z" />
                <path d="M13.3313 20.8924C9.56717 20.8924 6.50415 17.7179 6.50415 13.8167C6.50415 9.91549 9.56717 6.74097 13.3313 6.74097C17.0955 6.74097 20.1585 9.91549 20.1585 13.8167C20.1585 17.7179 17.0955 20.8924 13.3313 20.8924ZM13.3313 9.11004C10.827 9.11004 8.79002 11.2211 8.79002 13.8167C8.79002 16.4122 10.827 18.5233 13.3313 18.5233C15.8357 18.5233 17.8727 16.4122 17.8727 13.8167C17.8727 11.2211 15.8357 9.11004 13.3313 9.11004Z" />
                <path d="M22.0909 6.33725C22.0909 7.27661 21.3555 8.03677 20.451 8.03677C19.5447 8.03677 18.8093 7.27464 18.8093 6.33725C18.8093 5.39789 19.5447 4.63577 20.451 4.63577C21.3574 4.63577 22.0909 5.39789 22.0909 6.33725Z" />
              </svg>
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
