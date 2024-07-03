<p align="center">
  <a href="" rel="noopener">
    <img width=200px height=200px src="https://i.imgur.com/G5h7EoT.png">
 </a>
</p>

<h1 align="center">Fetchicles</h1>

<p align="center">
  A lib created to return all brands and models of vehicles in the world.
</p>

<div align="center">
    <a>
        <img src="https://img.shields.io/badge/version-1.2.3-blue.svg?cacheSeconds=2592000">
    </a>
    <a>
        <img src="https://img.shields.io/badge/status-active-success.svg">
    </a>
    <a href="https://github.com/mxtheussouza/fetchicles/issues">
        <img src="https://img.shields.io/github/issues/mxtheussouza/fetchicles">
    </a>
    <a href="https://github.com/mxtheussouza/fetchicles/pulls">
        <img src="https://img.shields.io/github/issues-pr/mxtheussouza/fetchicles">
    </a>
</div>

## Installing

npm

```
npm install --save fetchicles
```

yarn

```
yarn add fetchicles
```

## Getting started

### Retrieving all vehicle brands (example: CAR):

```js
import { brands } from "fetchicles";

// Using the then method
brands("CAR").then(data => console.log(data));
```

```js
import { brands } from "fetchicles";

// Using await inside an immediately invoked function
(async () => {
	const carBrands = await brands("CAR");
	console.log(carBrands);
})();
```

#### return:

```js
[
	"Ford",
	"Chevrolet",
	"Fiat",
	"Citroen",
	"Honda",
	"Hyundai",
	"Renault",
	"Toyota",
	"Volkswagen",
]
```

### Retrieving all vehicle models by brands (example: CAR):

And now, inside params it will be an object, with first parameter a vehicle name, as string, and second parameter a brand name as string.

```js
import { models } from "fetchicles";

// Using the then method
models({ vehicle: "CAR", brand: "fiat" }).then(data => console.log(data));
```

```js
import { models } from "fetchicles";

// Using await inside an immediately invoked function
(async () => {
	const carModels = await models({ vehicle: "CAR", brand: "fiat" });
	console.log(carModels);
})();
```

#### return:

```js
[
    "Uno",
    "Doblo",
    "Pulse",
    "Argo",
    "Strada",
    "Cronos",
    "Mobi"
]
```

This will be standard for all vehicles (vehicle names must be uppercase).

**Vehicles types available:**

- CAR
- MOTORCYCLE
-

## How to contribute

Read our [contribution](/CONTRIBUTING.md) guide.

## Contributors

<a href="https://github.com/mxtheussouza/fetchicles/graphs/contributors"><img src="https://contrib.rocks/image?repo=mxtheussouza/fetchicles" /></a>

## Author

| [<img src="https://avatars.githubusercontent.com/u/61164981?v=3&s=115"><br><sub>@mxtheussouza</sub>](https://github.com/mxtheussouza) |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |

## LICENSE

This repository use [MIT License](/LICENSE).
