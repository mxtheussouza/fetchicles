import { brands, models } from ".";

brands("car").then(data => console.log(data));
models({ vehicle: "car", brand: "fiat" }).then(data => console.log(data));

(async () => {
	const carBrands = await brands("car");
	console.log(cars);
})();

(async () => {
	const carModels = await models({ vehicle: "car", brand: "fiat" });
	console.log(carModels);
})();
