// create upgrade option
// Has a cost
// name
// resource increase
// resource type
// calculates value

// Model holds available upgrade options
// allows organizing upgrades based on value

var gibado = {};
gibado.Hotel = {};

gibado.Hotel.Model = {
	// The next upgrade ID value
	nextId: 0,
	// Upgrades that are available
	availableUpgrades: [],
	// Adds an upgrade to this list of upgrades
	addUpgrade: function(upgrade) {
		this.availableUpgrades.push(upgrade);
	},
	generateUpgrade: function(name, cost, increase, type) {
		this.addUpgrade(this.createUpgrade(name, cost, increase, type));
	},
	// Removes an upgrade from the list
	removeUpgrade: function(upgradeId) {
		// TODO implement this
		return "Not yet implemented";
	},
	// Prints out the available upgrade list
	printUpgrades: function() {
		let result = "";
		for (var i = 0; i < this.availableUpgrades.length; i++) {
			result += this.availableUpgrades[i].print() + "\n";
		}
		return result.trim();
	},
	// Prints out JS code to constructed this same model
	printConstruction: function() {
		let result = "";
		for (var i = 0; i < this.availableUpgrades.length; i++) {
			result += this.availableUpgrades[i].printConstruction() + ";\n";
		}
		return result.trim();
	},
	// Creates an upgrade
	createUpgrade: function(name, cost, increase, type) {
		return {
			id: this.nextId++,
			name: name,
			cost: cost,
			increase: increase,
			// TODO change this to an enum
			type: type,
			// TODO change this to calculate out to the value for the day
			value: cost/increase,
			print: function() {
				return this.id + "-" + this.name + " " + this.value + " " + this.type + " (costs $" + this.cost + ")";
			},
			printConstruction: function() {
				return "gibado.Hotel.Model.generateUpgrade('" + this.name + "'," + this.cost + "," + this.increase + ",'" + this.type + "')";
			},
			printMoney: function(value){
				// TODO implement this
				return "Not yet implementated";
			}
		};
	}
};