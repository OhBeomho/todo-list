import { Link } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";

export default function (props: { children: ReactNode }) {
  return (
    <Wrapper>
      <header>
        <Navbar>
          <Link className="brand" to="/">
            TODO List
          </Link>
          <div>
            <Link to="/create">Create TODO</Link>
          </div>
        </Navbar>
      </header>
      <Main>{props.children}</Main>
      <Footer>
        <p>
          Made by <a href="https://github.com/OhBeomho">OhBeomho</a>
        </p>
        <p>
          Source on <a href="https://github.com/OhBeomho/todo-list">GitHub</a>
        </p>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  & .brand {
    color: black;
    font-size: 25px;
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 500px;
  margin: auto;
`;

const Footer = styled.footer`
  background-color: lightgray;
  text-align: center;
`;
