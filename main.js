function startClassification() {
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sVFbhgLvT/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var goat = 0

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        animal_image = document.getElementById('ear.png')

        if (results[0].label == "cat meow") {
            img.src = 'giphy.gif';
            cat = cat + 1;
        } else if (results[0].label == "dog barking") {
            img.src = 'giphy(1).gif';
            dog = dog + 1;
        } else if (results[0].label == "goat sounds") {
            img.src = 'giphy(2).gif';
            goat = goat + 1
        } else {
            img.src = 'ear.png';
        }
    }
}