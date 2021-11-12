/**
 * get Input
 */
 var goBtn = document.querySelector('.js-go');
 var inputValue = document.querySelector('input');
 var gifyContainer = document.getElementsByClassName('gify-container');
 
  goBtn.addEventListener('click', function () {
     cleanContainer();
     ajaxCall(inputValue.value);
  });
  document.querySelector('.js-input').addEventListener('keyup', function (e) {
     // if enter key pressed
     if (e.which === 13) {
         cleanContainer();
         ajaxCall(inputValue.value);
     }
     
  });
 
 
 /**
  *  get data from API
  * var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
  */
 function ajaxCall(inputValue) {
     var url = "https://api.giphy.com/v1/gifs/search?q="+ inputValue +"&api_key=dc6zaTOxFJmzC";
         // AJAX Request
         var GiphyAJAXCall = new XMLHttpRequest();
         GiphyAJAXCall.open( 'GET', url );
         GiphyAJAXCall.send();
         
    GiphyAJAXCall.onreadystatechange = (e) => {
        console.log("HTTPS PASSED!")
    }
 
         GiphyAJAXCall.addEventListener('load',function (e) {
             var giphyData = e.target.response;
             displayData(giphyData); 
             console.log(inputValue);
         });
     
 }
 
 
 
 
 
 /**
  * 
  * Display GIFs
  */
 function displayData(input){
     var gifData = JSON.parse(input);
     console.log(gifData);
 
     var gifUrls = gifData.data;
     gifUrls.forEach(function (gif) {
         // console.log(gif.images.fixed_height.url);
 
         var url = gif.images.fixed_height.url;
         gifyContainer[0].innerHTML += "<img src=\""+ url +"\" class =\"container-image\">";
     });
 
     // var gifyContainer = document.getElementsByClassName('gify-container');
     // gifyContainer[0].innerHTML = "<img src=\""+ gifUrl +"\" >";
 }
 
 
 function cleanContainer() {
 
     var container = document.querySelector(".gify-container");
    
     container.innerHTML = "";
    
 }