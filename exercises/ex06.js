const eatsPlants = false;
const eatsAnimals = false;
let foodEaterType;

if (eatsPlants && eatsAnimals) {
  foodEaterType = "omnivore";
} else if (eatsPlants && !eatsAnimals) {
  foodEaterType = "herbivore";
} else if (!eatsPlants && eatsAnimals) {
  foodEaterType = "carnivore";
} else {
  foodEaterType = "undefined";
}

console.log("\n", foodEaterType);

foodEaterType = (eatsPlants && eatsAnimals) ? "omnivore": "";
foodEaterType = (eatsPlants && !eatsAnimals) ? "herbivore": "";
foodEaterType = (!eatsPlants && eatsAnimals) ? "carnivore": "";
foodEaterType = (!eatsPlants && !eatsAnimals) ? "undefined": "";

console.log("\n", foodEaterType);