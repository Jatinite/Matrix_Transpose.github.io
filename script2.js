function createMatrix() {
	// Get the number of rows and columns from the user
	var rows = parseInt(document.getElementById("rows").value);
	var cols = parseInt(document.getElementById("cols").value);

	// Generate a table for the matrix
	var matrixTable = "<table>";

	for (var i = 1; i <= rows; i++) {
		matrixTable += "<tr>";

		for (var j = 1; j <= cols; j++) {
			matrixTable += "<td><input type='number' id='m" + i + j + "'></td>";
		}

		matrixTable += "</tr>";
	}

	matrixTable += "</table>";

	// Display the matrix on the web page
	document.getElementById("matrix").innerHTML = matrixTable;
}

function transposeMatrix() {
	// Get the number of rows and columns from the user
	var rows = parseInt(document.getElementById("rows").value);
	var cols = parseInt(document.getElementById("cols").value);

	// Create a new matrix for the transposed values
	var transposedMatrix = [];

	for (var i = 1; i <= cols; i++) {
		transposedMatrix[i] = [];

		for (var j = 1; j <= rows; j++) {
			// Get the value of the cell in the original matrix
			var originalValue = parseInt(document.getElementById("m" + j + i).value);

			// Add the value to the transposed matrix
			transposedMatrix[i][j] = originalValue;
		}
	}

	// Generate a table for the transposed matrix
	var resultTable = "<table>";

	for (var i = 1; i <= cols; i++) {
		resultTable += "<tr>";

		for (var j = 1; j <= rows; j++) {
			resultTable += "<td>" + transposedMatrix[i][j] + "</td>";
		}

		resultTable += "</tr>";
	}

	resultTable += "</table>";

	// Display the transposed matrix on the web page
	document.getElementById("result").innerHTML = resultTable;
}
