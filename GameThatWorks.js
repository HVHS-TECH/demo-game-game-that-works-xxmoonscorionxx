console.log("hi")

const WINDOWWIDTH = 500;
const WINDOWHEIGHT = 500;
const MOVEMENTSPEED = 7;
const COINSIZE = 10;
const COINTIMEOUT = 4000;

var Score = 0;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(WINDOWWIDTH, WINDOWHEIGHT);
	player = new Sprite(400, 400, 50, 'd');
	player.color = 'red';
    createCoin();
    coins = new group();

}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background('cyan');
    displayScore();
    movePlayer();
}

function removeCoin() {

}
function displayScore() {
    fill (0,0,0);
    textSize(20);
    text("Score: " + Score ,10,20);
}
function createCoin() {
    coin = new Sprite(random(0,WINDOWWIDTH),random(0,WINDOWHEIGHT),COINSIZE,'d');
    coin.color = ("yellow");
    coin.coinspawntime = millis();
}
function checkCoinTime() {
    if (coin.coinspawntime + COINTIMEOUT < millis()) {
        coin.remove();
    }
}
function movePlayer() {
    if (kb.pressing('left')) {
        player.vel.x = -1 * MOVEMENTSPEED;
   
   }
   
   else if (kb.pressing ('right')) {
   
       player.vel.x = MOVEMENTSPEED;  
   
   };
   
   if (kb.released('left')) {
   
       player.vel.x = 0;
   
   }

   else if (kb.released('right')) {
       player.vel.x = 0;
   }
   if (kb.pressing('up')) {
   
       player.vel.y = -1 * MOVEMENTSPEED;
   
   }
   else if(kb.pressing('down')) {
       player.vel.y = MOVEMENTSPEED;
   }
   if (kb.released('up')) {
   
       player.vel.y = 0;
   
   }

   else if (kb.released('down')) {
       player.vel.y = 0;
   }
}
