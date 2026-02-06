const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  const target = `https://www.performtrial.com${req.originalUrl}`;
  res.redirect(301, target);  // 301 = permanent, good for SEO
});

app.listen(port, () => {
  console.log(`Redirect server running on port ${port}`);
});
