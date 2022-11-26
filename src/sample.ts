import { brands, models } from ".";

// THEN METHOD
brands("motorcycle").then(brands => console.log({ brands }));
models({ vehicle: "motorcycle", brand: "honda" }).then(models =>
	console.log({ models }),
);

// ASYNC AWAIT
(async () => {
	const carBrands = await brands("car");
	console.log(carBrands);
})();

(async () => {
	const carModels = await models({ vehicle: "car", brand: "fiat" });
	console.log(carModels);
})();
