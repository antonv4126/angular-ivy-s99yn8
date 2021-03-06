


var game1 = new Chessgame("board1");
var game2 = new Chessgame("board2");
var game3 = new Chessgame("board3");

function startGame() {
	game1.start();
	game1.gameBoard.radius = 1;
	game1.canvas.addEventListener('click', function(){ game1.onTouchEvent( event.clientX, event.clientY ); }, false); 
	game1.canvas.addEventListener('touch', function(){ game1.onTouchEvent( event.clientX, event.clientY ); }, false); 

	game2.start();
	game2.gameBoard.radius = .65;
	game2.canvas.addEventListener('click', function(){ game2.onTouchEvent( event.clientX, event.clientY ); }, false); 
	game2.canvas.addEventListener('touch', function(){ game2.onTouchEvent( event.clientX, event.clientY ); }, false); 

	game3.start();
	game3.gameBoard.radius = .85;
	game3.canvas.addEventListener('click', function(){ game3.onTouchEvent( event.clientX, event.clientY ); }, false); 
	game3.canvas.addEventListener('touch', function(){ game3.onTouchEvent( event.clientX, event.clientY ); }, false); 
}

function updateGameArea() {
	//    myGameArea.draw();
    game1.draw();
    game2.draw();
    game3.draw();
	//myGamePiece.newPos();
		//myGamePiece.update();
	}

function Chessgame( newID ) {
	this.ID = newID;
    //canvas : document.getElementById("chessboard"),
	this.canvas = document.createElement("canvas");
    this.gameBoard = new chessBoard( this.ID);
	//this.canvas.addEventListener('click', function(){ board.onTouchEvent( event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop ); }, false); 
	//this.canvas.addEventListener('touch', function(){ board.onTouchEvent( event.clientX - this.canvas.offsetLeft, event.clientY - this.canvas.offsetTop); }, false); 


	this.onTouchEvent = function( x, y) {
		this.gameBoard.onTouchEvent(x - this.canvas.offsetLeft, y - this.canvas.offsetTop);
	};

	this.start = function () {
		console.log("ChessGame.start: " + this.ID);

		this.context = this.canvas.getContext("2d");
		//document.body.insertBefore(this.canvas, document.body.childNodes[0]);

		document.getElementById(this.ID).appendChild(this.canvas);

		this.frameNo = 0;
        //this.myBoard = new chessBoard();
        this.interval = setInterval(updateGameArea, 20);
        //log("end of myGame -> area.start");
        //this.canvas.addEventListener('click', function(){ clicker( event.clientX, event.clientY ); }, false); 
        //this.canvas.addEventListener('touch', function(){ clicker( event.clientX, event.clientY ); }, false); 
//        this.canvas.addEventListener('click', function(){ clicker( event.clientX, event.clientY ); }, false); 
}
	
    this.draw = function () {
        //console.log( this.ID + " : draw");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		var ctx = this.context;
        this.canvas.width = document.getElementById(this.ID).clientWidth; //400;
        this.canvas.height = this.canvas.width;
		
        //this.myBoard = new chessBoard();

       //  this.myBoard.onTouchEvent( 327, 472 );// 327, 459
 
//        var myField = this.myBoard.getField(1,5,3);
//        myField.setPiece(Piece.QUEEN);
//        myField.setSuit(Suit.WHITE);
//        myField.select();
//        var  moves = this.myBoard.getLegalMoves( myField, myField.getSuit() );
//        if (moves != null)
//            for (i=0; i<moves.length; i++) 
//                moves[i].setCanBeMovedTo();
        
  
        this.gameBoard.draw(ctx);
	}
	
    this.stop = function() {
        console.log("myGameArea : stop");
        clearInterval(this.interval);
    }


}


