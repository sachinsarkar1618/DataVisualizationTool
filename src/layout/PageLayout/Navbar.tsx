import React from "react";
import styled from "styled-components";
import { JSONCrackLogo } from "../JsonCrackLogo";

const StyledNavbarWrapper = styled.div`
  z-index: 3;
  transition: background 0.2s ease-in-out;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  background: white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  @media only screen and (max-width: 768px) {
    padding: 16px 24px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Navbar = () => {
  return (
    <StyledNavbarWrapper className="navbar">
      <StyledNavbar>
        <Left>
          <JSONCrackLogo fontSize="1.2rem" />
        </Left>
        {/* <Center>
          <Button
            component="a"
            href="https://marketplace.visualstudio.com/items?itemName=AykutSarac.jsoncrack-vscode"
            target="_blank"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
            rel="noopener"
          >
            VS Code
          </Button>
          <Button
            component={Link}
            prefetch={false}
            href="/docs"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
          >
            Embed
          </Button>
          <Button
            component="a"
            href="https://github.com/AykutSarac/jsoncrack.com"
            target="_blank"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
            rel="noopener"
          >
            Open Source
          </Button>
          <Menu withArrow shadow="sm">
            <Menu.Target>
              <Button
                variant="subtle"
                color="black"
                visibleFrom="sm"
                size="md"
                radius="md"
                rightSection={<LuChevronDown />}
              >
                Tools
              </Button>
            </Menu.Target>
            <Menu.Dropdown maw={300} bg="white">
              <StyledMenuItem component={Link} prefetch={false} href="/converter/json-to-yaml">
                <Stack gap="2">
                  <Text c="black" size="sm" fw={600}>
                    Converter
                  </Text>
                  <Text size="xs" c="gray.6" lineClamp={2}>
                    Convert JSON to YAML, CSV to JSON, YAML to XML, and more.
                  </Text>
                </Stack>
              </StyledMenuItem>
              <StyledMenuItem component={Link} prefetch={false} href="/type/json-to-rust">
                <Stack gap="2">
                  <Text c="black" size="sm" fw={600}>
                    Generate Types
                  </Text>
                  <Text size="xs" c="gray.6" lineClamp={2}>
                    Generate TypeScript types, Golang structs, Rust, and more.
                  </Text>
                </Stack>
              </StyledMenuItem>
              <StyledMenuItem component={Link} prefetch={false} href="/tools/json-schema">
                <Stack gap="2">
                  <Text c="black" size="sm" fw={600}>
                    JSON Schema
                  </Text>
                  <Text size="xs" c="gray.6" lineClamp={2}>
                    Generate JSON schema from JSON data.
                  </Text>
                  <Text size="xs" c="gray.6" lineClamp={2}>
                    Generate JSON data from JSON schema.
                  </Text>
                </Stack>
              </StyledMenuItem>
            </Menu.Dropdown>
          </Menu>
        </Center>
        <Right>
          <Button
            component="a"
            href="https://todiagram.com?utm_source=jsoncrack&utm_medium=navbar"
            variant="subtle"
            color="black"
            size="md"
            radius="md"
            rel="noopener"
          >
            Upgrade
          </Button>
          <Button
            radius="md"
            component="a"
            color="#202842"
            href="/editor"
            visibleFrom="sm"
            size="md"
          >
            Editor
          </Button>
        </Right> */}
      </StyledNavbar>
    </StyledNavbarWrapper>
  );
};
