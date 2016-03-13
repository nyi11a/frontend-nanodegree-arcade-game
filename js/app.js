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

}

Player.prototype.update = function () {
   //this.y += this.speed * dt;
    if (this.y <= -10) {
        alert('Congratulations! you won!');
        //setTimeout(this.reset (200, 440), 5000)
        this.reset (200, 440)
    }

    if (this.x < 0) {
        this.x = 0;
    } else if (this.x > 400) {
        this.x = 400;
    } else if (this.y === 0) {
        this.y = 400;
   // } else if (this.y < 0) {
    //    this.y = 0;
    } else if (this.y > 400) {
        this.y = 400;
    }

}



Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

}

Player.prototype.handleInput = function(direction) {
    if (direction === 'up' && this.y <= 440) {
       this.y -= 67;
    }

    if (direction === 'down' && this.y >= 0) {
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

var player = new Player (200, 440);
Enemy.prototype.checkCollisions = function checkCollisions (allEnemies, player) {
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x < player.x + 70 &&
        allEnemies[i].x + 70 > player.x &&
        allEnemies[i].y < player.y + 50 &&
        50 + allEnemies[i].y > player.y) {
            alert('You lost! try again!')
            player.reset (200, 440);
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



