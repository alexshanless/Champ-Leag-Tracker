$.ajax({
  headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
  url: 'http://api.football-data.org/v2/competitions/2016/teams' ,
  dataType: 'json',
  type: 'GET'
  }).then(function(response){

            const teamContainerDiv = $("#teamContainer")

            for (var i = 0; i < response.teams.length; i++) {
                    const teamName = response.teams[i].name;

                    const teamId = response.teams[i].id;


                     const teamNameDiv = $('<div></div>');
                     teamNameDiv.text(teamName);


                     const teamIdDiv = $('<div></div>');
                     teamIdDiv.text(teamId);

                     teamContainerDiv.append(teamNameDiv);
                     teamContainerDiv.append(teamIdDiv);

          }
  });






  //  OLD CODE BELOW




// // var teamName = prompt("Choose the team");
// var id;
// var name;


// $.ajax({
// headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
// url: 'http://api.football-data.org/v2/competitions/2016/teams' ,
// dataType: 'json',
// type: 'GET'
// }).then(function(response){

//   console.log(response);


// for(var i=0; i<response.teams.length;i++){
  
//   if(response.teams[i].name === teamName){
//     id = response.teams[i].id;
//   }
//   console.log(id);
//   console.log(teamName);
// }

// // getMatches();

// });



// function getMatches(){
//                           $.ajax({
//                             headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
//                             url: `http://api.football-data.org//v2/teams/${id}/matches/` ,
//                             dataType: 'json',
//                             type: 'GET'
//                             }).then(function(response){

//                         console.log(response);

//                             });
// };
