const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`⚡️[server] API Server running on port ${PORT}`)
);
