# A Simple NodeJS Proxy API Server

Welcome to the NodeJS Template API. This serves as a template api for starting a simple NodeJS project.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variable](#Environment-Variable)
- [Quick Start](#Quick-Start)
- [Development Documentation](#development-documentation)

## Introduction

This project serves a template for building a simple NodeJS project.

## Getting Started

I recommend running this project on **NodeJS v20+** or **NodeJS v22+**. This project was originally run on **NodeJS v21.7.1** and **npm@10.5.0**.

Before starting, you must delete `.git` folder.

### Installation

To get started, you need to download this project from the GitHub repository and navigate to the project's folder.

```sh
cd nodejs-template-api/
```

You need to dowload the project's dependencies.

```sh
npm install
```

Additionally, you should download an extra package for running the project, it's called [**nodemon**](https://www.npmjs.com/package/nodemon).

```sh
npm i nodemon --save-dev
```

### Environment Variable

This step is **important**! Create an `.env` file to store the application's credentials. These are the credentials you will need.

```sh
BE_PORT="" # IMPORTANT: This is the back end port, you need to have this variable for the project to work!
```

## Quick Start

Run the project using the following command(s).

```sh
npm start
```

Or, if you have already downloaded nodemon using `npm i nodemon --save-dev`, you can also run the project using the following commands(s).

```sh
npm run api
```

We also provide some Postman command inside the `.postman` folder.

---

## Development Documentation

_Order from newest to oldest_

### 2024/11/02

- Initialize: the project
