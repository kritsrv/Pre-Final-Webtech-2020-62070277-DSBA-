let requestURL = 'ezquiz.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

var result = '';

function dataReportStatus(data) {
    console.log(data.tracks.items.length);
    for (let i = 0; i < data.tracks.items.length; i++) {
        if (i % 3 == 0) {
            result += '<div class="row">';
            console.log(result);
        }
        for (let j = 0; j < data.tracks.items.length; j++) {
            result += '<div class="col-md-4"><div class="card" style="width: 23rem;"><img src="' + data.tracks.items[j].album.images[0].url + '" class="card-img-top" width="' + data.tracks.items[j].album.images[0].width + '"';
            result += '<div class="card-body"><h5 class="card-title">&nbsp;&nbsp;' + data.tracks.items[j].album.name + '</h5><p class="card-subtitle">&nbsp;&nbsp;Artist: ' + data.tracks.items[j].album.artists[0].name + '</p> <br>';
            result += '<p class="card-subtitle">&nbsp;&nbsp;Release date: ' + data.tracks.items[j].album.release_date + '</p> <br>';
            result += '<p class="card-subtitle">&nbsp;&nbsp;Avaliable: ' + parseInt(data.tracks.items[j].album.available_markets.length) + ' countries</p> <br></div></div><br>';
            console.log(result);
        }
    }
    document.getElementById("ans").innerHTML = result;
}