# A Simple NodeJS Proxy API Server

Welcome to a Simple Proxy API Server using NodeJS.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variable](#Environment-Variable)
- [Quick Start](#Quick-Start)
- [Development Documentation](#development-documentation)

## Introduction

This is a project about building a Simple Proxy API Server using NodeJS.

The project's functionalities will be:

- Getting weather data from OpenWeather API.
- Rate Limiting Requests. Rate Limiting Requests based on previous proxy servers headers.
- Cache Responses. Cache Responses which have 200 status code.

## Getting Started

I recommend running this project on **NodeJS v20+** or **NodeJS v22+**. This project was originally run on **NodeJS v21.7.1** and **npm@10.5.0**.

### Installation

To get started, you need to download this project from the GitHub repository and navigate to the project's folder.

```sh
cd nodejs-simple-proxy-api/
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
OPENWEATHER_API_BASE_URL=""
OPENWEATHER_API_KEY_NAME=""
OPENWEATHER_API_KEY_VALUE=""
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

### 2024/11/05

- Using `express-rate-limit` to limit the request. Because this program is a proxy, it will be a proxy server in a line of multiple proxy servers, so in addition of `express-rate-limit`, I will also use `app.set("trust proxy", 1)` to tell this proxy server to trust the information pass on from the previous proxy servers, this helps `express-rate-limit` to accurately identify and rate limit the requests.

- More information on `app.set("trust proxy", 1)`, the setting tell the program to trust the information pass on from the previous proxy servers, you can use `app.set("trust proxy", <number>)` with `<number>` being the number of proxies you want to trust or you can use `app.set("trust proxy", true)` to trust all of the previous proxies.

- Using `apicache` to cache responses and make response faster (in-memory version, although `apicache` does support redis). The use of cache reduce the wait time from >100ms to <5ms.

### 2024/11/04

- Using `needle()` to perform HTTP requests, I choose `needle()` because it is rather light-weight and simple to use.

### 2024/11/02

- Initialize: the project
