# Contributing to Sodium-UI

Thanks for showing interest in contributing to `Helium` and being part of the community. At `Helium` we aim to make Open Source cake walk for the contributors and are always ready to assist you for all your queries. Here are some guidelines that will help you along the way.

## Setup the Project

Follow the below mentioned steps to setup the dev environment:
1. Fork this Repository
2. Clone your fork locally
```sh
git clone https://github.com/<your_github_username>/helium-compressor.git
cd helium-compressor
```

3. Setup the backend

Helium uses Node.js + Express as backend. Run the below commands in the root of your clone.
```
npm install
node server.js
```
This should start the server on `PORT 8080`

4. Setup the Frontend
React.js is used for the Client Side. Setup the local React env by running below commands

```
cd client && npm install
npm start
```
This should start the client on `PORT 3000`

5. Create a Pull Request
Once done with the changes, feel free to raise a PR. It is recommended to work remotely by creating a separate branch for the same.

## Code of Conduct

Sodium-UI has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Licence
By contributing your code to the sodium-ui GitHub repository, you agree to license your contribution under the MIT license.
