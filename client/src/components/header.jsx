import * as React from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem
} from "baseui/header-navigation";
import { StyledLink } from "baseui/link";
import { Button } from "baseui/button";

export default () => {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            width: '100vw',
            height: '64px',
            paddingTop: '0',
            paddingRight: '0',
            paddingBottom: '0',
            paddingLeft: '0',
            zIndex: '1000'
          }
        }
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>Test project</StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink href="#basic-link1">
            Button
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right} style={{marginRight: '25px'}}>
        <StyledNavigationItem>
          <Button>Button</Button>
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  );
}