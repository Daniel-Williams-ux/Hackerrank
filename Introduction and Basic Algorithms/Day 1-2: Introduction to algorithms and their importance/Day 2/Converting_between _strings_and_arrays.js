//Converting between strings and arrays
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const cities = data.split(",");
cities;

cities.length;
cities[0]; // the first item in the array
cities[1]; // the second item in the array
cities[cities.length - 1]; // the last item in the array

const commaSeparated = cities.join(",");
commaSeparated;


/*Another way of converting an array to a string is to use the toString() method. toString() is arguably simpler than join() as 
it doesn't take a parameter, but more limiting. With join() you can specify different separators,
whereas toString() always uses a comma. (Try running Step 4 with a different character than a comma.*/

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
