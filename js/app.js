
var score = 0;


// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.height = 171;
    this.width = 101;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //this.x += this.speed * dt;
    //make enemy movements random
    this.x += Math.floor(Math.random() * this.speed + (150)) * dt
    if (this.x >= 500) { // if enemies x coordinate is off-screen
        this.x = 0;
    }

    this.checkCollisions(allEnemies, player);
}

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.height = 171;
    this.width = 101;
    this.x = x;
    this.y = y;
    //this.speed = 40
    this.sprite = 'images/char-princess-girl.png';
   // this.score = 0;
    //this.points = 0;

}

Player.prototype.update = function () {
   //this.y += this.speed * dt;
   //document.getElementById("score").innerHTML = score;
    if (this.y <= -44) {
        alert('Congratulations! you made it across!');
        //setTimeout(this.reset (200, 435), 5000)
        this.reset (200, 435);
        score++;
        //console.log(score);
        document.getElementById("score").innerHTML = 'Your Score is ' + score;
        if (score >= 2) {
        document.getElementById('score').innerHTML = 'Your Score = ' + score;
        alert('Congratulations! You have total a score of ' + score + ' You won the game!');
        //console.log(score);
        //this.reset (200, 435);
        //score = 0;
        setTimeout(function () {document.location.reload()}, 2000);
        //document.getElementById('score').innerHTML = 'Your Score is ' + score;
    }
    }

    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y === 0) {
        this.y = 435;
   // } else if (this.y < 0) {
    //    this.y = 0;
    } else if (this.y > 435) {
        this.y = 435;
    }

}



Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

Player.prototype.handleInput = function(direction) {
    if (direction === 'up' && this.y <= 435) {
       this.y -= 68;
    }

    if (direction === 'down' && this.y >= -45) {
        this.y += 68;
    }

    if (direction === 'left' && this.x >= 0) {
        this.x -= 100;
    }

     if (direction === 'right' && this.x >= 0) {
        this.x += 100;
    }

}


Player.prototype.reset = function (x, y) {
        this.y = y;
        this.x = x;
    }





// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemy = new Enemy (0, 50, 200);
allEnemies.push(enemy);
var enemyOne = new Enemy (0, 125, 350);
allEnemies.push(enemyOne);
var enemyTwo = new Enemy (0, 225, 250);
allEnemies.push(enemyTwo);

var player = new Player (200, 435);

Enemy.prototype.checkCollisions = function checkCollisions (allEnemies, player) {
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x < player.x + 50 &&
        allEnemies[i].x + 50 > player.x &&
        allEnemies[i].y < player.y + 40 &&
        40 + allEnemies[i].y > player.y) {
            alert('You lost! try again!')
            player.reset (200, 435);
        };

}}

//var player = [];
//var playerOne = new Player (0, 450, 50);
//player.push(playerOne);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



