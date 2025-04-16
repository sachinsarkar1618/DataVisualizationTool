import React from "react";
import Link from "next/link";
import { Anchor, Container, Divider, Flex, Stack, Text, ThemeIcon } from "@mantine/core";
import dayjs from "dayjs";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { JSONCrackLogo } from "../JsonCrackLogo";

export const Footer = () => {
  return (
    <Container mt={60} px={60} pb="xl" bg="black" fluid>
      <Divider color="gray.3" mb="xl" mx={-60} />
      <Flex justify="space-between">
        <Stack gap={4} visibleFrom="sm">
          <JSONCrackLogo />
          <Anchor href="mailto:contact@todiagram.com" fz="xs" c="dimmed">
            sarkarsachindak@gmail.com
          </Anchor>
        </Stack>
        <Flex gap={60} visibleFrom="sm">
          <Stack gap="xs">
            <Text fz="sm" c="white">
              Social
            </Text>
            <Flex gap="xs">
              <Anchor
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/sachin-sarkar-618669360"
                fz="sm"
                rel="noopener"
              >
                <ThemeIcon variant="transparent" color="gray.5">
                  <FaLinkedin size={20} />
                </ThemeIcon>
              </Anchor>
              <Anchor
                aria-label="GitHub"
                href="https://github.com/sachinsarkar1618"
                fz="sm"
                rel="noopener"
              >
                <ThemeIcon variant="transparent" color="gray.5">
                  <FaGithub size={20} />
                </ThemeIcon>
              </Anchor>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Container>
  );
};
