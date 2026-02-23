const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'credit_and_background_checking_feb_22new.html'));
});

app.listen(PORT, () => {
  console.log(`Form running on port ${PORT}`);
});
