import { brands, models } from ".";

brands("car").then(data => console.log(data));
models("car", "fiat").then(data => console.log(data));
