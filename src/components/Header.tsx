"use client";

import { useEffect, useState } from "react";
import { Fade, Flex, LetterFx } from "@once-ui-system/core";

type TimeDisplayProps = {
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Makassar",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [locale]);

  return <>{currentTime}</>;
};

export default function Header() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simple loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      
      <Flex
        fitHeight
        position="fixed"
        top="0"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          <Flex>
            <LetterFx
              speed="medium"
              trigger="instant"
            >
              {isLoading ? 'Loading...' : 'Asia/Makassar'}
            </LetterFx>
          </Flex>
        </Flex>

        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
          >
            <TimeDisplay />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}