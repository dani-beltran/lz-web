# Vue Router Configuration Guide

## Development Server

The webpack dev server is now configured with `historyApiFallback: true` which ensures that all routes are properly handled during development.

## Production Deployment

When deploying to production, you'll need to configure your web server to handle client-side routing. Here are configurations for common web servers:

### Apache (.htaccess)

Create a `.htaccess` file in your web root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

Add this to your Nginx server configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Express.js

If serving with Express.js:

```javascript
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
```

### AWS S3 + CloudFront

1. In S3 bucket settings, set both index document and error document to `index.html`
2. In CloudFront distribution, create a custom error page:
   - HTTP Error Code: 404
   - Error Caching Minimum TTL: 10
   - Customize Error Response: Yes
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200

### Netlify

Create a `_redirects` file in your `dist` folder:

```
/*    /index.html   200
```

## Testing Routes

You can now access these routes directly:

- `/` - Home page
- `/privacy-policy` - Privacy Policy
- `/terms-of-service` - Terms of Service
- `/cookie-policy` - Cookie Policy
- `/legal` - Legal Hub
- Any other path will redirect to `/404`

## Notes

- The `publicPath: '/'` in webpack output ensures assets are loaded correctly
- `historyApiFallback: true` in devServer handles all routes during development
- Vue Router uses `createWebHistory()` for clean URLs without hash fragments
