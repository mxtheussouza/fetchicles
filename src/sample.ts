import { brands, models } from ".";

brands("car").then(data => data);
models("car", "fiat").then(data => console.log(data));
