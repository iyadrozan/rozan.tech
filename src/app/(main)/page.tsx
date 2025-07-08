"use client";

import {
  Heading,
  Text,
  Button,
  Column,
} from "@once-ui-system/core";

export default function Home() {
  return (
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Heading variant="display-strong-xl" marginTop="24">
          Welcome to Your Starter Project
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          marginBottom="16"
        >
          Start building something amazing
        </Text>
        <Button
          id="get-started"
          href="https://docs.once-ui.com/once-ui/quick-start"
          data-border="rounded"
          weight="default"
          prefixIcon="rocket"
          arrowIcon
        >
          Get Started
        </Button>
      </Column>
    </Column>
  );
}