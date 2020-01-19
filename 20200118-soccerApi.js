var teamName = prompt("Choose the team");
var id;

$.ajax({
headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
url: 'http://api.football-data.org/v2/competitions/2016/teams' ,
dataType: 'json',
type: 'GET'
}).then(function(response){

  console.log(response);
$("#scoreDiv").text(response);

for(var i=0; i<response.teams.length;i++){
  
  if(response.teams[i].name === teamName){
    id = response.teams[i].id;
  }
  console.log(id);
  console.log(teamName);
}

getMatches();

});



function getMatches(){
                          $.ajax({
                            headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
                            url: `http://api.football-data.org//v2/teams/${id}/matches/` ,
                            dataType: 'json',
                            type: 'GET'
                            }).then(function(response){

                        console.log(response);

                            });
};

// console.log(response.matches[5].status);

// competition id 2016


// /v2/competitions/2084/standings
// /v2/teams/{id}/matches/

// /v2/competitions/{id}/teams

// 'http://api.football-data.org/v2/teams/{id}';

// 'http://api.football-data.org/v2/matches?status=LIVE'


// $.ajax({
//     headers: { 'X-Auth-Token': '3d5af28fa6024c74b54c5588d1536b09' },
//     url: 'http://api.football-data.org/v2/matches?status='LIVE',
//     dataType: 'json',
//     type: 'GET',
//   }).done(function(response) {
//     // do something with the response, e.g. isolate the id of a linked resource
//     console.log(response);
//   });




//   $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

//       // Create CODE HERE to Log the queryURL
//       // Create CODE HERE to log the resulting object
//       // Create CODE HERE to transfer content to HTML
//       // Create CODE HERE to calculate the temperature (converted from Kelvin)
//       // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
//       // Create CODE HERE to dump the temperature content into HTML

//     });


  