function filter(tag) {
	unfilter();
	var sections = [document.getElementById("work"),
					document.getElementById("projects")];
	var i,j,k;
	for(j = 0; j < sections.length; ++j) {
		k = 0;
		var s = sections[j].getElementsByTagName("div");
		for(i = 0; i < s.length; ++i) {
			if(s[i].className.split(' ').indexOf(tag) == -1) {
				s[i].style.display = "none";
				++k;
			}
		}
		if(k == i) {
			sections[j].style.display = "none";
		}
	}
	document.getElementById("unfilter-button").style.display = "block";
}

function unfilter() {
	var sections = [document.getElementById("work"),
					document.getElementById("projects")];
	var i,j;
	for(j = 0; j < sections.length; ++j) {
		var s = sections[j].getElementsByTagName("div");
		for(i = 0; i < s.length; ++i) {
			s[i].style.display = "";
		}
		sections[j].style.display = "";
	}
	document.getElementById("unfilter-button").style.display = "none";
}
