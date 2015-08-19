function csvReader(filename, separator, header) {
		var filename = filename;
		console.log("inside csvreader");
		var fr = new FileReader(); 
		fr.onload = function(e) {
			$scope.$apply(function(){
				console.log("inside onload");
				var content =  e.target.result.replace(/\r\n|\r/g,'\n');

				$scope.content = content;
				$scope.result = csvToJSON(content, separator, header);

				console.log(content);
			});
		};
		fr.readAsText();
	}; /* end csvReader */

	function csvToJSON(content, separator, header) {
		var lines = content.split('\n');
		var result = [];
		var start = 0;
		var columnCount = lines[0].split(separator).length;

		var headers=[];
		if (header){
			headers=lines[0].split(separator);
			start=1;
		}
		for (var i=start; i<lines.length; i++){
			var obj = {};
			var currentline=lines[i].split(new RegExp(separator+'(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)'));
			if ( currentline.length === columnCount ) {
				if (header) {
					for (var j=0; j<headers.length; j++) {
						obj[headers[j]] = currentline[j];
					}
				} else {
					for (var k=0; k<currentline.length; k++) {
						obj[k] = currentline[k];
					}
				}
				result.push(obj);
			}
		}
		return result;
	}; /*end csvToJSON */

	csvReader("courses.csv", ",", true);