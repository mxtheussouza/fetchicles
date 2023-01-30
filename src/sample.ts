import { brands, models } from ".";

// THEN METHOD
brands("MOTORCYCLE").then(brands => console.log({ brands }));
models({ vehicle: "MOTORCYCLE", brand: "honda" }).then(models =>
	console.log({ models }),
);

// ASYNC AWAIT
(async () => {
	const carBrands = await brands("CAR");
	console.log(carBrands);
})();

(async () => {
	const carModels = await models({ vehicle: "CAR", brand: "fiat" });
	console.log(carModels);
})();
