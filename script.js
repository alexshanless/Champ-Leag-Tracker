$(document).ready(function () {
var team1;
var team2;
var team1FullName;
var team2FullName;
var datePlayed;
var winningTeam;
var team1Score;
var team2Score;
var searchString;

var firstPage = $("#pageOne");
var secondPage = $("#pageTwo");

var displayDate = $("#date");
var displayWinner = $("#winner");
var displayScore = $("#score");
var goBackBtn = $("#goBack");

populateDropdowns(1);
populateDropdowns(2);
$('.dropdown-trigger').dropdown();

$(".team1").on("click", function(){
    console.log($(this)[0].innerText);
    $("#selectedTeam1").text($(this)[0].innerText);
    team1 = $(this)[0].innerText;

})

$(".team2").on("click", function(){
    console.log($(this)[0].innerText);
    $("#selectedTeam2").text($(this)[0].innerText);
    team2 = $(this)[0].innerText;
})

$("#goBtn").on("click", onGO);
goBackBtn.on("click", goToFirstPage);

function onGO(){

$.ajax({
    headers:{'X-Auth-Token' :'3d5af28fa6024c74b54c5588d1536b09'},
    url: 'http://api.football-data.org/v2/competitions/2001/matches' ,
    dataType: 'json',
    type: 'GET'
    }).then(function(response){

        console.log(response);
        console.log(response.matches[102].homeTeam.name);
        console.log(response.matches[102].awayTeam.name);
        console.log("***" + team1 + "***");
        console.log("***" + team2 + "***");

        // let indexTeam1 = teamShortNames.indexOf(team1);
        // let indexTeam2 = teamShortNames.indexOf(team2);
        // let team1FullName = teamNames[indexTeam1];
        // let team2FullName = teamNames[indexTeam2];

        var indexTeam1 = teamShortNames.indexOf(team1);
        var indexTeam2 = teamShortNames.indexOf(team2);
        team1FullName = teamNames[indexTeam1];
        team2FullName = teamNames[indexTeam2];

        console.log(indexTeam1);
        console.log(indexTeam2);
        console.log(team1FullName);
        console.log(team2FullName);


        for(let i=response.matches.length-1; i>=0; i--)
        {

            if((team1FullName === response.matches[i].homeTeam.name && team2FullName === response.matches[i].awayTeam.name) || (team1FullName === response.matches[i].awayTeam.name && team2FullName === response.matches[i].homeTeam.name))
            {
                console.log(i);
                let utcDate = response.matches[i].utcDate;
                console.log(utcDate);
                let utcDateArr = utcDate.split("T");
                let dt = utcDateArr[0];
                console.log(dt);
                dt = moment(dt , "YYYY-MM-DD").format("MM-DD-YYYY");
                console.log(dt);

                if(response.matches[i].score.winner === "DRAW")
                {
                    winningTeam = "Draw";
                }
                else if(response.matches[i].score.winner === "HOME_TEAM")
                {
                    winningTeam = response.matches[i].homeTeam.name;
                }
                else
                {
                    winningTeam = response.matches[i].awayTeam.name;
                }

                scoreTeam1 = response.matches[i].homeTeam.name + " : " + response.matches[i].score.fullTime.homeTeam;
                scoreTeam2 = response.matches[i].awayTeam.name + " : " + response.matches[i].score.fullTime.awayTeam;

                console.log("Date Played : " + dt);
                console.log("Winner : " + winningTeam)
                console.log(scoreTeam1);
                console.log(scoreTeam2);

                datePlayed = dt;
                team1Score = scoreTeam1;
                team2Score = scoreTeam2;

                break;
                
            }

        }

        displayMatchData();

    });

}

function displayMatchData(){

    //$("#pageOne").style.display = "none";
    //$("#pageTwo").style.display = "initial";

    firstPage.css("display", "none");
    secondPage.css("display", "initial");

    displayDate.text(datePlayed);
    displayWinner.text(winningTeam);
    displayScore.text(" " + team1Score + "   " + team2Score);

    searchString = team1FullName + " vs " + team2FullName + " " + datePlayed + " Champions League";
    console.log(searchString);

    getVideo();

}

function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyDZP5SAejKhtLtyvFNSGpIYHZLXZk6eho0',
          q: searchString,
          part: 'snippet',
          maxResults: 4,
          type: 'video',
          videoEmbeddable: true,
      }
    }).then(function(response) {
        
        $('.carousel').carousel();

        $('.next').click(function(){
            $('.carousel').carousel('next');
        })

        $('.prev').click(function(){
            $('.carousel').carousel('prev');
        })

        $('#video1').attr('src', 'https://www.youtube.com/embed/' + response.items[0].id.videoId)
        $('#video2').attr('src', 'https://www.youtube.com/embed/' + response.items[1].id.videoId)
        $('#video3').attr('src', 'https://www.youtube.com/embed/' + response.items[2].id.videoId)
        $('#video4').attr('src', 'https://www.youtube.com/embed/' + response.items[3].id.videoId)
        $('h3').text(response.items[0].snippet.title)
        $('.description').text(response.items[0].snippet.description)

  });
}

function goToFirstPage()
{
    firstPage.css("display", "initial");
    secondPage.css("display", "none");

}

function populateDropdowns(x)
{
    for(let i = 0; i < teamShortNames.length; i++)
    {
        let listItem = $("<li>");
        listItem.attr("class" , `team${x}`);
        listItem.text(teamShortNames[i]);

        $(`#dropdown${x}`).append(listItem);

    }
}

});//end of document.ready
  