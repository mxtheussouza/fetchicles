"use strict";
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// THEN METHOD
(0, _1.brands)("motorcycle").then(brands => console.log({ brands }));
(0, _1.models)({ vehicle: "motorcycle", brand: "honda" }).then(models =>
	console.log({ models }),
);
// ASYNC AWAIT
(() =>
	__awaiter(void 0, void 0, void 0, function* () {
		const carBrands = yield (0, _1.brands)("car");
		console.log(carBrands);
	}))();
(() =>
	__awaiter(void 0, void 0, void 0, function* () {
		const carModels = yield (0, _1.models)({ vehicle: "car", brand: "fiat" });
		console.log(carModels);
	}))();
