const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

const compress = require("./routes/compress.router")
const decompress = require("./routes/decompress.router")
const { errorHandler } = require("./middlewares/error-handler.middleware")
const { routeNotFound } = require("./middlewares/route-not-found.middleware")

app.use("/api", compress);
app.use("/api", decompress);

app.use(routeNotFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server started on port: ${PORT}`));