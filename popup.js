const endpoint = "https://www.jsonstore.io/719a64bd0f896da76163beaca4a1587bf49cddde3434dd87611a94e5a6dfb74c";

function fetchJSON(a) {
	const f = new XMLHttpRequest();
	f.open("GET", a, false);
	f.send(null);
	return f.responseText;
}

function isURL(a) {
	const f = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	if (f.test(a)) {
		return true;
	} else {
		return false;
	}
}
const hashh = window.location.hash.substr(1);
if (window.location.hash != "") {
	const res = JSON.parse(fetchJSON(`${endpoint}/${hashh}`));
	const data = res.result;
	if (data != null) {
		if (isURL(data)) {
			window.location.href = data;
		}
	}
}
