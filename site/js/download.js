
var searchString;
function setSearchString(str)
{
	searchString=str;
}

function getSearchString() {
	return searchString;
}

function result_to_csv() {
	var filename= "SearchResult_" + getSearchString();
	var csvfile = "Titles, \n";
	$('.paper-stuff a').each(function() { 
		csvfile += $(this).text() + ", \n";
	});
	//$('.paper-stuff p').each(function() { csvfile += $(this).text() + ",\n"; });
	var csvData = 'data:text/json;charset=utf-8,'+ encodeURIComponent(csvfile);
	var a = document.createElement('a');
	a.href = csvData;
	a.download = filename + '.csv';
	document.body.appendChild(a);
	a.click();
}
