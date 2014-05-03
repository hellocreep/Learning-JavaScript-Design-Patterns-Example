require('summonlist', function() {
	
	// Observer pattern 
	function SummonList() {
		this.summonList = [];
	}

	SummonList.prototype.add = function(summon) {
		return this.summonList.push(obj);
	}

	SummonList.prototype.count = function() {
		return this.summonList.length;
	}

	SummonList.prototype.get = function(index) {
		return this.summonList[index];
	}

	SummonList.prototype.indexOf = function(summon, startIndex) {
		var i = startIndex;
 
		while(i < this.summonList.length) {
		    if(this.summonList[i] === obj) {
		    	return i;
		    }
		    i++;
		}
		 
		return -1;
	}

	SummonList.prototype.removeAt = function(index) {
		this.summonList.splice(index, 1).destroy();
	}

	return SummonList;	
});