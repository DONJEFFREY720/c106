function startClassification(){
     navigator.mediaDevices.getUserMedia
     ({
          audio : true
     });
     classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uGkyOcaJ8/model.json",modelReady);
}


function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var cow = 0;
var cokoo =0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "DOG") {
      img.src = 'https://shravaripatil.github.io/Sound_controlled_animals/bark.gif';
      dog = dog+1;
    } else if (results[0].label == "CAT") {
      img.src = 'https://shravaripatil.github.io/Sound_controlled_animals/meow.gif';
      cat = cat + 1;
    } else if (results[0].label == "COW") {
      img.src = 'https://gifdb.com/images/high/cartoon-cow-walk-61a1lckxexg0nc6f.gif';
      cow = cow + 1;
    }  else if (results[0].label == "COKOO") {
      img.src = 'https://i.gifer.com/origin/cc/cc701c835cbd2b4a1eaffd22b1596a79_w200.gif';
      cow = cokoo + 1;
    } else{
      img.src = 'https://shravaripatil.github.io/Sound_controlled_animals/listen.gif';
    }
  }
}
