import { brands, models } from ".";

// THEN METHOD
brands("car").then(data => console.log(data));
models({ vehicle: "car", brand: "fiat" }).then(data => console.log(data));

// ASYNC AWAIT
(async () => {
	const carBrands = await brands("car");
	console.log(carBrands);
})();

(async () => {
	const carModels = await models({ vehicle: "car", brand: "fiat" });
	console.log(carModels);
})();
