"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Text,
  Column,
  Flex,
  Icon,
  LetterFx
} from "@once-ui-system/core";
import { social } from "@/resources";
import dynamic from "next/dynamic";
import styles from './page.module.css';

// Dynamically import LoadingScreen for better performance
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

const greetings = [
  "Hello",
  "こんにちは", 
  "Halo"
];

// Memoized Social Button Component
const SocialButton = memo(({ item, index }: { item: any; index: number }) => (
  <Button
    key={index}
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
    variant="secondary"
    size="s"
  >
    <Flex
      align="center"
      gap="xs"
      padding="s"
      radius="m"
      style={{
        transition: "all 0.2s ease",
        cursor: "pointer"
      }}
      onBackground="neutral-weak"
    >
      <Icon name={item.icon} size="xs" />
      <Text variant="body-default-xs" onBackground="neutral-strong">
        {item.name}
      </Text>
    </Flex>
  </Button>
));

SocialButton.displayName = "SocialButton";

// Memoized Main Content Component
const MainContent = memo(({ currentIndex }: { currentIndex: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
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
          <LetterFx speed="slow" trigger="hover">Rozan</LetterFx>「ロザン」is a Sulawesi-based developer with a passion for transforming complex ideas into simple, purposeful technology. He enjoys building things from scratch, customizing tools to fit unique needs, and exploring how 「技術」 (technology) and open-source ideas can empower others.
        </Text>
        <Flex gap="s" wrap>
          {social.map((item, index) => (
            <SocialButton key={item.name || index} item={item} index={index} />
          ))}
        </Flex>
      </Column>
    </Column>
  </motion.div>
));

MainContent.displayName = "MainContent";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Memoized callback for loading completion
  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isLoading]);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} duration={4500} />;
  }

  return <MainContent currentIndex={currentIndex} />;
}