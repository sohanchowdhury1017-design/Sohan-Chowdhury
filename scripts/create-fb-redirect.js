import fs from 'fs';
import path from 'path';

const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting to Facebook - Sohan Chowdhury</title>
  <meta http-equiv="refresh" content="0; url=https://www.facebook.com/nbn.sohan">
  <link rel="canonical" href="https://www.facebook.com/nbn.sohan">
  <meta name="robots" content="noindex, follow">
  <script>
    window.location.replace("https://www.facebook.com/nbn.sohan");
  </script>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #faf9f5; color: #1c1917; text-align: center; padding: 20px; box-sizing: border-box;">
  <div style="background: #fff; padding: 32px 24px; border-radius: 16px; border: 1px solid #e7e5e4; box-shadow: 0 4px 20px rgba(0,0,0,0.06); max-width: 380px; width: 100%;">
    <div style="width: 48px; height: 48px; border-radius: 50%; background: #1877f2; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
      <svg style="width: 24px; height: 24px; fill: #fff;" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </div>
    <h2 style="font-size: 18px; margin: 0 0 8px;">Redirecting to Facebook...</h2>
    <p style="font-size: 14px; color: #78716c; margin: 0 0 20px;">Taking you to <strong>@nbn.sohan</strong></p>
    <a href="https://www.facebook.com/nbn.sohan" style="display: inline-block; background: #1877f2; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 999px; font-weight: 600; font-size: 14px;">Open Facebook Profile</a>
  </div>
  <script>
    window.location.href = "https://www.facebook.com/nbn.sohan";
  </script>
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

console.log('Successfully created instant fb redirect files.');
