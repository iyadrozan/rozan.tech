import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'

import classNames from "classnames";
import Script from 'next/script';

import { baseURL, meta, schema, fonts, effects, style, dataStyle } from "@/resources/once-ui.config";
import { Meta, Schema, Column, Flex, opacity, SpacingToken, Background} from "@once-ui-system/core";
import { Providers } from '@/components/Providers';
import Header from '@/components/Header';

export async function generateMetadata() {
  return {
    title: {
      default: meta.home.title,
      template: '%s | rozan.tech'
    },
    description: meta.home.description,
    keywords: meta.home.keywords,
    authors: [{ name: meta.home.author, url: baseURL }],
    creator: meta.home.author,
    publisher: meta.home.author,
    robots: meta.home.robots,
    metadataBase: new URL(baseURL),
    alternates: {
      canonical: meta.home.canonical,
      languages: {
        'en-US': meta.home.canonical,
        'x-default': meta.home.canonical,
      },
    },
    category: meta.home.category,
    classification: meta.home.classification,
    openGraph: {
      type: meta.home.openGraph.type,
      locale: meta.home.openGraph.locale,
      url: meta.home.openGraph.url,
      title: meta.home.openGraph.title,
      description: meta.home.openGraph.description,
      siteName: meta.home.openGraph.siteName,
      images: meta.home.openGraph.images.map(img => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
        type: img.type,
      })),
    },
    twitter: {
      card: meta.home.twitter.card,
      site: meta.home.twitter.site,
      creator: meta.home.twitter.creator,
      title: meta.home.twitter.title,
      description: meta.home.twitter.description,
      images: [
        {
          url: meta.home.twitter.image,
          alt: meta.home.twitter.imageAlt,
        }
      ],
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code',
    },
    appleWebApp: {
      capable: true,
      title: 'rozan.tech',
      statusBarStyle: 'black-translucent',
    },
    formatDetection: {
      telephone: false,
      date: false,
      address: false,
      email: false,
      url: false,
    },
    other: {
      'theme-color': '#5071cc',
      'color-scheme': 'dark light',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'rozan.tech',
      'application-name': 'rozan.tech',
      'msapplication-TileColor': '#5071cc',
      'msapplication-config': '/browserconfig.xml',
      'coverage': meta.home.coverage,
      'distribution': meta.home.distribution,
      'rating': meta.home.rating,
      'revisit-after': '7 days',
      'language': 'en',
      'geo.region': 'ID-SN',
      'geo.placename': 'Makassar',
      'geo.position': '-5.1477;119.4327',
      'ICBM': '-5.1477, 119.4327',
    },
    manifest: '/manifest.json',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeConfig = {
    theme: style.theme,
    brand: style.brand,
    accent: style.accent,
    neutral: style.neutral,
    solid: style.solid,
    'solid-style': style.solidStyle,
    border: style.border,
    surface: style.surface,
    transition: style.transition,
    scaling: style.scaling,
    'viz-style': dataStyle.variant,
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  
                  const config = ${JSON.stringify(themeConfig)};
                  
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = savedTheme ? resolveTheme(savedTheme) : config.theme === 'system' ? resolveTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : config.theme;
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
        <Schema
          as="website"
          baseURL={baseURL}
          title={schema.name}
          description={schema.description}
          path={meta.home.path}
          sameAs={schema.sameAs}
        />
        <Providers>
          <Column as="div" background="page" fillWidth margin="0" padding="0">
            <Background
              position="absolute"
              mask={{
                x: effects.mask.x,
                y: effects.mask.y,
                radius: effects.mask.radius,
                cursor: effects.mask.cursor,
              }}
              gradient={{
                display: effects.gradient.display,
                opacity: effects.gradient.opacity as opacity,
                x: effects.gradient.x,
                y: effects.gradient.y,
                width: effects.gradient.width,
                height: effects.gradient.height,
                tilt: effects.gradient.tilt,
                colorStart: effects.gradient.colorStart,
                colorEnd: effects.gradient.colorEnd,
              }}
              dots={{
                display: effects.dots.display,
                opacity: effects.dots.opacity as opacity,
                size: effects.dots.size as SpacingToken,
                color: effects.dots.color,
              }}
              grid={{
                display: effects.grid.display,
                opacity: effects.grid.opacity as opacity,
                color: effects.grid.color,
                width: effects.grid.width,
                height: effects.grid.height,
              }}
              lines={{
                display: effects.lines.display,
                opacity: effects.lines.opacity as opacity,
                size: effects.lines.size as SpacingToken,
                thickness: effects.lines.thickness,
                angle: effects.lines.angle,
                color: effects.lines.color,
              }}
            />
            <Header />
            {children}
          </Column>
        </Providers>
      </body>
    </html>
  );
}