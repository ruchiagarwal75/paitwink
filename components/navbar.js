import React from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function NavBar(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Logo>
        <img src="../images/logo.png"></img>
      </Logo>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <StyledTab label="Gallery" onClick={props.handleResetGalleryView} />
        <StyledTab label="Shop" />
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
