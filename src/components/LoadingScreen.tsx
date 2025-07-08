"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Column, Text, Flex, LetterFx } from "@once-ui-system/core";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const loadingTexts = [
  "Loading",
  "読み込み中",
  "Memuat"
];

// Circular Progress Bar Component
const CircularProgress = ({ progress }: { progress: number }) => {
  const radius = 60;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background circle */}
        <circle
          stroke="var(--neutral-weak)"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <motion.circle
          stroke="var(--accent-medium)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </svg>
      
      {/* Progress percentage in center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Text
          variant="heading-default-m"
          onBackground="neutral-strong"
          align="center"
        >
          {Math.round(progress)}%
        </Text>
        
        {/* Animated dots inside circle */}
        <Flex gap="xs" align="center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-medium)",
              }}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
};

export default function LoadingScreen({ 
  onLoadingComplete, 
  duration = 4500 
}: LoadingScreenProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Cycle through loading texts
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1200);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, duration / 65);

    // Complete loading after duration
    const loadingTimeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 500); // Wait for exit animation
    }, duration);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
      clearTimeout(loadingTimeout);
    };
  }, [duration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: "var(--page-background)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Column center gap="xl" maxWidth="s">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Text
                variant="heading-default-xl"
                onBackground="neutral-strong"
                align="center"
                style={{ marginBottom: "8px" }}
              >
                <LetterFx speed="medium" trigger="instant">
                  rozan.tech
                </LetterFx>
              </Text>
            </motion.div>

            {/* Circular Progress Bar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <CircularProgress progress={progress} />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ height: "32px", display: "flex", alignItems: "center" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={loadingTexts[currentTextIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <Text
                    variant="body-default-m"
                    onBackground="neutral-medium"
                    align="center"
                  >
                    {loadingTexts[currentTextIndex]}
                  </Text>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Subtle loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
            </motion.div>
          </Column>
        </motion.div>
      )}
    </AnimatePresence>
  );
}