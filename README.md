# [Helium](https://helium-compressor.herokuapp.com/)

`Helium` is a web application to compress and decompress your strings swiftly.

## About

Most of data on the web is in the form of text formats. To increase the efficiency of the user application, Text Data Compression plays an important role to radically reduce the load time, saves the data on the server and by simple encoding-decoding the the load on frontend and backend - both can be managed.

There are various string compression algorithms available, `Helium` brings all of them at one table. Choose your algorithm; enter desired input and get results within a start.
To note, lossless compression algorithms are ONLY a part of `Helium`, and thus the to-and-fro conversion hopefully doesn't conflicts or data losses.

**Some good use-cases of String Compression Algorithms (directly or indirectly)**:
- Many applications directly save user data to browser Storage, which is limited and directly affects the browser performance. Here, string compression can help.
- Storing text files, long input forms (blogs, captions etc.) to the backend.
- Strings with consecutive repetitive characters (based on application) can be drastically compressed
- CSS and JS minifiers (min.js files)
- Bundlers such as Webpack and rollup.js 
- Data Preprocessors

## Developer Guide

This section involves information for developers willing to contribute to the project. `Helium` is truly Open Source. Any sort of contribution to this project are highly appreciated. Read the [Contributing Guideline](./CONTRIBUTING.md) to learn more on how to setup development environment, propose bug fixes or improvements and how to build and test your changes to Helium. The brief explanation of the Compression algorithms used in Helium can be found [here](./ALGORITHM.md). 

### Spinning up local dev setup

- Helium uses Node.js + Express as backend. Run the below commands in the root of your clone.
```
npm install
node server.js
```
This should start the server on `PORT 8080`

- React.js is used for the Client Side. Setup the local React env by running below commands

```
cd client && npm install
npm start
```
This should start the client on `PORT 3000`

## Tech Stack ⚒

* General Technologies used 💻
  - Frontend Library: React.js
  - Backend Framework: Express.js
  - Runtime Env: Node.js
  - Hosted on: Heroku (with CI/CD enabled on `main`) 

* Supported Compression Algorithms
  - [Helium Compressor](https://github.com/sohamsshah/helium-compressor/blob/main/utils/compressors/heliumCompressor.js)

## Future Scope 🚀

- Add LZ String Compression: [lz-string](https://github.com/pieroxy/lz-string)
- Add GZIP Compression: [ZLib](https://github.com/madler/zlib)
- Publish the algorithms as an NPM package
- Find/Add more in Issues/Projects :) 
