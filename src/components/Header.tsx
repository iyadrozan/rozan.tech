"use client";

import { useEffect, useState } from "react";
import { Fade, Flex } from "@once-ui-system/core";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

type LocationInfo = {
  city: string;
  country: string;
  timezone: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (!timeZone) return;

    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        };
        const timeString = new Intl.DateTimeFormat(locale, options).format(now);
        setCurrentTime(timeString);
      } catch (error) {
        console.error("Invalid timezone:", timeZone);
        const now = new Date();
        const timeString = now.toLocaleTimeString(locale, {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setCurrentTime(timeString);
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

// Function to get user's location and timezone
const getUserLocation = async (): Promise<LocationInfo> => {
  return new Promise((resolve) => {
    // First try to get timezone from browser
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Try to get geolocation for more accurate city info
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            // Use a free geocoding service to get city/country from coordinates
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
            );
            
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            resolve({
              city: data.city || data.locality || "Unknown",
              country: data.countryCode || "Unknown",
              timezone: detectedTimezone
            });
          } catch (error) {
            // Silently fallback to timezone-based location
            resolve(getLocationFromTimezone(detectedTimezone));
          }
        },
        (error) => {
          // Silently fallback to timezone-based location without logging
          resolve(getLocationFromTimezone(detectedTimezone));
        },
        { 
          timeout: 5000,
          enableHighAccuracy: false,
          maximumAge: 300000 // 5 minutes
        }
      );
    } else {
      // Fallback to timezone-based location
      resolve(getLocationFromTimezone(detectedTimezone));
    }
  });
};

// Fallback function to get approximate location from timezone
const getLocationFromTimezone = (timezone: string): LocationInfo => {
  const timezoneMap: Record<string, { city: string; country: string }> = {
    'Asia/Jakarta': { city: 'Jakarta', country: 'ID' },
    'Asia/Makassar': { city: 'Makassar', country: 'ID' },
    'Asia/Jayapura': { city: 'Jayapura', country: 'ID' },
    'America/New_York': { city: 'New York', country: 'US' },
    'America/Los_Angeles': { city: 'Los Angeles', country: 'US' },
    'Europe/London': { city: 'London', country: 'GB' },
    'Europe/Paris': { city: 'Paris', country: 'FR' },
    'Asia/Tokyo': { city: 'Tokyo', country: 'JP' },
    'Asia/Singapore': { city: 'Singapore', country: 'SG' },
    'Australia/Sydney': { city: 'Sydney', country: 'AU' },
  };

  const location = timezoneMap[timezone];
  if (location) {
    return { ...location, timezone };
  }

  // Extract city from timezone if not in map
  const parts = timezone.split('/');
  const city = parts[parts.length - 1].replace(/_/g, ' ');
  
  return {
    city: city || 'Unknown',
    country: 'Unknown',
    timezone
  };
};

export default function Header() {
  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    city: 'Makassar',
    country: 'ID',
    timezone: 'Asia/Makassar'
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeLocation = async () => {
      try {
        const userLocation = await getUserLocation();
        setLocationInfo(userLocation);
      } catch (error) {
        // Silently keep default Makassar location
      } finally {
        setIsLoading(false);
      }
    };

    initializeLocation();
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
            {isLoading ? 'Loading...' : `${locationInfo.timezone}`}
          </Flex>
        </Flex>

        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
          >
            <TimeDisplay timeZone={locationInfo.timezone} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}