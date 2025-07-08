"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Text,
  Column,
  Flex,
  Icon
} from "@once-ui-system/core";
import { social } from "@/resources";
import styles from './page.module.css';

const greetings = [
  "Hello",
  "こんにちは", 
  "Halo"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <>
    <Column fillWidth center padding="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="s" horizontal="start" gap="s" align="left">
        <div className={styles.cycleText}>
          👋
          <AnimatePresence mode="wait">
            <motion.span
              key={greetings[currentIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className={styles.greeting}
            >
              {greetings[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <Text
          variant="heading-default-m"
          onBackground="neutral-strong"
          wrap="balance"
          marginBottom="16"
        >
          Rozan [ ロザン ] is a Sulawesi-based developer with a passion for transforming complex ideas into simple, purposeful technology. He enjoys building things from scratch, customizing tools to fit unique needs, and exploring how 「技術」 (technology) and open-source ideas can empower others.
        </Text>
        <Flex gap="s" wrap>
          {social.map((item, index) => (
            <Button
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
              variant="secondary"
            >
              <Flex
                align="center"
                gap="xs"
                padding="xs"
                radius="s"
                style={{
                  transition: "all 0.2s ease",
                  cursor: "pointer"
                }}
                onBackground="neutral-weak"
              >
                <Icon name={item.icon} size="s" />
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {item.name}
                </Text>
              </Flex>
            </Button>
          ))}
        </Flex>
      </Column>
    </Column>
    </>
  );
}