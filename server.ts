import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Add security headers middleware
  server.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'interest-cohort=()');
    next();
  });

  // Serve manifest file with correct content type - MUST be before catch-all routes
  server.get('/assets/site.webmanifest', (req, res, next) => {
    const manifestPath = join(browserDistFolder, 'assets/site.webmanifest');
    res.setHeader('Content-Type', 'application/manifest+json');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.sendFile(manifestPath, (err) => {
      if (err) {
        console.error('Error serving manifest:', err);
        next(err);
      }
    });
  });

  // Serve static files from /browser - MUST be before Angular routes
  server.use(express.static(browserDistFolder, {
    maxAge: '1y',
    index: false, // Don't serve index.html for directory requests
    setHeaders: (res, path) => {
      if (path.endsWith('.webmanifest')) {
        res.setHeader('Content-Type', 'application/manifest+json');
      }
    }
  }));

  // All other routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    // Skip Angular routing for manifest
    if (originalUrl === '/site.webmanifest') {
      return next();
    }

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
