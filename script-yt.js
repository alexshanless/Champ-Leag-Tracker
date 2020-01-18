$(document).ready(function () {

getVideo();
function getVideo() {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyDZP5SAejKhtLtyvFNSGpIYHZLXZk6eho0',
          q: "cats",
          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
      }
    //   success: function(data){
    //       embedVideo(data)
    //   },
    //   error: function(response){
    //       console.log("Request Failed");
    //   }
    }).then(function(response) {
        console.log(response);

  });
}

function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}

});//end of document.ready