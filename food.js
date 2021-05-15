function dare1() {
    var preferedTrail = document.getElementById("htmlTrail").value;
    if (preferedTrail == 'hiking') {
        document.getElementById("dare1").innerHTML = 'Your Dare Number 1 is to go to Heart Lake Conservation Park and find a heart-shaped rock. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare2()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
    else if (preferedTrail == 'footpath') {
        document.getElementById("dare1").innerHTML = 'Your Dare Number 1 is to go to invite 2 people to go to the Eldorado Park with you, and take a walk on one of the trails there. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare2()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
    else if (preferedTrail == 'naturalTrail') {
        document.getElementById("dare1").innerHTML = 'Your Dare Number 1 is go on the Chinguacousy Trail and name at least 3 trees, flowers, plants and bugs that you find on the trail. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare2()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
    
    else {
        document.getElementById("dare1").innerHTML = 'Your Dare Number 1 is go to White Spruce Park and improve your photography skills by taking 10 pictures of nature. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare2()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
}

function dare2() {
    var tryout2 = document.getElementById("comfortLevel").value;
    if (tryout2 == 'yes'){
        dare2random();
    }else{
        dare2specific();
    }
}

function dare2random() {
    var dare2random = ["Your Dare Number 2 is to go to Claireville Conservation Area and take a picture in the Bird Watching area. ", "Your Dare Number 2 is to go to Professor's Lake and pick at least two pieces of litter and throw them out. ", "Your Dare Number 2 is to go to Parr Lake North Park and find 6 shades of green. ", "Your Dare Number 2 is to go to Ester Lake Trial, and take a picture beside the beach. "]
    var randomFoodDare = Math.floor(Math.random()*(dare2random.length));
    document.getElementById("dare2").innerHTML = dare2random[randomFoodDare] + '<br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare3()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
}

function dare2specific() {
    var preferedTrail = document.getElementById("htmlTrail").value;
    if (preferedTrail == 'hiking') {
        document.getElementById("dare2").innerHTML = 'Your Dare Number 2 is to go to Claireville Conservation Area and take a picture in the Bird Watching area. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare3()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
    else if (preferedTrail == 'footpath') {
        document.getElementById("dare2").innerHTML = 'Your Dare Number 2 is to go to Professors Lake and pick at least two pieces of litter and throw them out. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare3()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
    else if (preferedTrail == 'naturalTrail') {
        document.getElementById("dare2").innerHTML = 'Your Dare Number 2 is to go to Parr Lake North Park and find 6 shades of green. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare3()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
    else if (preferedTrail == 'forestExploration') {
        document.getElementById("dare2").innerHTML = 'Your Dare Number 2 is to go to Ester Lake Trial, and take a picture beside the beach. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare3()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    }
}



function dare3() {
    var preferedFood = document.getElementById("htmlFood").value;
    if (preferedFood == 'southAsian')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to Madras Restaurant and try the Madras Special Masala Dosa.  <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'asian')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to the Hakka Village Chinese Restaurant and try out the Hakka Chow Mien. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'mediterranean')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to Lazeez Shawarma and try out Falafel Sandwich.  <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'european')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to Queen Gypsy and try out Special Karadjordjeva Schnitzel.  <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'northAmerican')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to J Red and Co. and try Crispy Fried Calamari. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'caribbean')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to Xaymaca Restaurant and try Rasta Veggie Burger.  <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'vietnamese')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to Pho Dau Bo and try out Vegetarian Fried Rice. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else if (preferedFood == 'italian')
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to That Italian Place Pizzeria & Paninoteca and try out Panino. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
    else
        document.getElementById("dare3").innerHTML = 'Your Dare Number 3 is to go to Toshi Japanese Restaurant and try Aburi Rainbow Roll. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button onclick="dare4()" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Next</button>';
}

function dare4() {
    var tryout4 = document.getElementById("comfortLevel").value;
    if (tryout4 == 'yes')
        dare4random();
    else
        dare4specific();
}

function dare4random() {
    var dare4random = ["Your Dare Number 4 is to go to Brar Restaurant and try Delhi Kulcha Chana.", "Your Dare Number 4 is to go to Wok of Flame Restaurant and try Teppanyaki.", "Your Dare Number 4 is to go to Sabroso Pita Express and try out Spanakopita.", "Your Dare Number 4 is to go to Vesuvio Ristorante and try Gnocchi", "Your Dare Number 4 is to go to Aria Bistro & Lounge and try Mushroom Risotto", "Your Dare Number 4 is to go to SunRise Caribbean Restaurant and try Jamaica House Jerk Carrot Juice.", "Your Dare Number 4 is to go to Saigon House Restaurant and try Vermicelli Noodles", "Your Dare Number 4 is to go to Pomodoro Italian Kitchen and try Pomodoro's Famous Tomato Sauce Pasta.", "Your Dare Number 4 is to go to En Sushi and try Vegetable Box."]
    var randomFoodDare = Math.floor(Math.random()*(dare4random.length));
    document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is: ' + dare4random[randomFoodDare] + '<br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
}

function dare4specific() {
    var preferedFood = document.getElementById("htmlFood").value;
    if (preferedFood == 'southAsian')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Brar Restaurant and try Delhi Kulcha Chana. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'asian')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Wok of Flame Restaurant and try Teppanyaki. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'mediterranean')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Sabroso Pita Express and try out Spanakopita.  <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'european')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Vesuvio Ristorante and try Gnocchi. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'northAmerican')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Aria Bistro & Lounge and try Mushroom Risotto. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'caribbean')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to SunRise Caribbean Restaurant and try Jamaica House Jerk Carrot Juice. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'vietnamese')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Saigon House Restaurant and try Vermicelli Noodles. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else if (preferedFood == 'italian')
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to Pomodoro Italian Kitchen and try Pomodoros Famous Tomato Sauce Pasta. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
    else
        document.getElementById("dare4").innerHTML = 'Your Dare Number 4 is to go to En Sushi and try Vegetable Box. <br><form action="/action_page.php"><input type="file" id="myFile" name="filename" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"><input type="submit" style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;"></form><br><button style="background-color:#ccf2ff;color:#0008ff; font-family: courier new;">Finish</button>';
}
