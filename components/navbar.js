import React from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function NavBar(props) {
  const router = useRouter();
  const pages = [
    {
      path: "/",
      value: 0
    },
    {
      path: "/shop",
      value: 1
    }
  ];
  return (
    <div>
      <Logo
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src="../images/logo.png"></img>
      </Logo>
      <StyledTabs
        value={_.find(pages, p => p.path === router.pathname).value}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <StyledTab
          label="Gallery"
          onClick={() => (window.location.href = "/")}
        />
        <StyledTab
          label="Shop"
          onClick={() => (window.location.href = "/shop")}
        />
        <StyledTab label="About" />
        <StyledTab label="Contact" />
      </StyledTabs>
    </div>
  );
}

const Logo = styled.div`
  text-align: center;
`;

const StyledTabs = styled(Tabs)`
  margin-bottom: 32px;
`;
const StyledTab = styled(Tab)`
  font-size: 18px;
`;
