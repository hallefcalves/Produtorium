const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

require('./produtorium-iterative')(app);
require('./produtorium-recursive')(app);

app.listen(3000);