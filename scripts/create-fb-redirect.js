import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=https://facebook.com/nbn.sohan">
  <link rel="canonical" href="https://facebook.com/nbn.sohan">
  <title>Redirecting to Facebook - Sohan Chowdhury</title>
  <meta name="robots" content="noindex, follow">
  <script>
    window.location.replace("https://facebook.com/nbn.sohan");
  </script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background-color: #FAF9F5;
      color: #1c1917;
      text-align: center;
      padding: 24px;
      box-sizing: border-box;
    }
    .card {
      background: #ffffff;
      padding: 36px 28px;
      border-radius: 16px;
      border: 1px solid #e7e5e4;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
      max-width: 420px;
      width: 100%;
    }
    .logo-badge {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #1877F2;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 18px;
      box-shadow: 0 4px 14px rgba(24, 119, 242, 0.35);
    }
    .logo-badge svg {
      width: 26px;
      height: 26px;
      fill: #ffffff;
    }
    h1 {
      margin: 0 0 10px;
      font-size: 20px;
      font-weight: 700;
      color: #1c1917;
    }
    p {
      font-size: 14px;
      color: #78716c;
      margin: 0 0 20px;
      line-height: 1.5;
    }
    a.btn {
      display: inline-block;
      padding: 10px 24px;
      background: #1877F2;
      color: #ffffff;
      font-weight: 600;
      font-size: 14px;
      border-radius: 9999px;
      text-decoration: none;
      transition: background 0.2s;
    }
    a.btn:hover {
      background: #166fe5;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo-badge">
      <svg viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </div>
    <h1>Redirecting to Facebook...</h1>
    <p>
      Taking you to <strong>N B N Sohan Chowdhury</strong>'s official Facebook profile (<span style="color: #1877F2;">@nbn.sohan</span>).
    </p>
    <a href="https://facebook.com/nbn.sohan" class="btn">Click here if not redirected</a>
  </div>
</body>
</html>`;

const targets = ['fb/index.html', 'public/fb/index.html', 'dist/fb/index.html'];

for (const target of targets) {
  const dir = path.dirname(target);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(target, htmlContent, 'utf-8');
}

console.log('Successfully created clean fb redirect pages.');
