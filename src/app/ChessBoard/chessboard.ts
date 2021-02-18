enum Piece {ROOK = 1, KNIGHT = 2, BISHOP = 3, QUEEN = 4, KING = 5, PAWN =6};
enum Suit { BLACK = 1, WHITE = 2, RED = 3};
const darkField  = '#996430'; //rgb(153, 100, 48)
const lightField = '#ddBD97'; //(221, 189, 151)

const blackPawn = '';
const blackRook = '';
const blackKnight = '';
const blackBishop = '';
const blackQueen = '';
const blackKing = '';

const whitePawn = '';
const whiteRook = '';
const whiteKnight = '';
const whiteBishop = '';
const whiteQueen = '';
const whiteKing = '';

const redPawn = '';
const redRook = '';
const redKnight = '';
const redBishop = '';
const redQueen = '';
const redKing = '';

class ChessBoard {

private canvas:  HTMLCanvasElement;
private ctx: CanvasRenderingContext2D;

private radius:  number;
private board: ChessField[][][];
private whiteView0: ChessField[][];
private whiteViewL: ChessField[][];
private whiteViewR: ChessField[][];
private blackView0: ChessField[][];
private blackViewL: ChessField[][];
private blackViewR: ChessField[][];
private redView0: ChessField[][];
private redViewL: ChessField[][];
private redViewR: ChessField[][];
private ID: number;

constructor() {
//	        lightField.setAntiAlias(true);
//	        lightField.setStyle(Style.FILL_AND_STROKE);
//	        lightField.setColor(Color.rgb(221, 189, 151));
	        
//	        darkField.setAntiAlias(true);
//	        darkField.setStyle(Style.FILL_AND_STROKE);
//	        darkField.setColor(Color.rgb(153, 100, 48));
    this.canvas = document.getElementById('board1') as
                 HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");

      this.ID = 999; //ID is not in use, just there for console logging usage
			this.radius = 1;
           var board = [
                            [  
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ], 
                                [ new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ), new ChessField( Suit.WHITE ) ]
                           ],
                           [ 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ], 
                                [ new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ), new ChessField( Suit.BLACK ) ]
                           ],
                           [
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ], 
                                [ new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ), new ChessField( Suit.RED ) ]
                           ]
                        ];

           // initialize white views
this.whiteView0 = [ 
                    [board[0][0][0], board[0][0][1], board[0][0][2], board[0][0][3], 
                     board[1][7][3], board[1][7][2], board[1][7][1], board[1][7][0]
                    ],
                    [board[0][1][0], board[0][1][1], board[0][1][2], board[0][1][3], 
                     board[1][6][3], board[1][6][2], board[1][6][1], board[1][6][0]
                    ], 
                    [board[0][2][0], board[0][2][1], board[0][2][2], board[0][2][3], 
                     board[1][5][3], board[1][5][2], board[1][5][1], board[1][5][0]
                    ],
                    [board[0][3][0], board[0][3][1], board[0][3][2], board[0][3][3], 
                     board[1][4][3], board[1][4][2], board[1][4][1], board[1][4][0]
                    ],
                    [board[0][4][0], board[0][4][1], board[0][4][2], board[0][4][3], 
                     board[2][3][3], board[2][3][2], board[2][3][1], board[2][3][0]
                    ],
                    [board[0][5][0], board[0][5][1], board[0][5][2], board[0][5][3], 
                     board[2][2][3], board[2][2][2], board[2][2][1], board[2][2][0]
                    ],
                    [board[0][6][0], board[0][6][1], board[0][6][2], board[0][6][3], 
                     board[2][1][3], board[2][1][2], board[2][1][1], board[2][1][0]
                    ],
                    [board[0][7][0], board[0][7][1], board[0][7][2], board[0][7][3], 
                     board[2][0][3], board[2][0][2], board[2][0][1], board[2][0][0]
                    ]
                ];
                
this.whiteViewL = [ 
                    [this.whiteView0[0][0], this.whiteView0[0][1], this.whiteView0[0][2], this.whiteView0[0][3], 
                     this.whiteView0[0][4], this.whiteView0[0][5], this.whiteView0[0][6], this.whiteView0[0][7]
                    ],
                    [this.whiteView0[1][0], this.whiteView0[1][1], this.whiteView0[1][2], this.whiteView0[1][3], 
                     this.whiteView0[1][4], this.whiteView0[1][5], this.whiteView0[1][6], this.whiteView0[1][7]
                    ],
                    [this.whiteView0[2][0], this.whiteView0[2][1], this.whiteView0[2][2], this.whiteView0[2][3], 
                     this.whiteView0[2][4], this.whiteView0[2][5], this.whiteView0[2][6], this.whiteView0[2][7]
                    ],
                    [this.whiteView0[3][0], this.whiteView0[3][1], this.whiteView0[3][2], this.whiteView0[3][3], 
                     this.whiteView0[3][4], this.whiteView0[3][5], this.whiteView0[3][6], this.whiteView0[3][7]
                    ],
                    [this.whiteView0[4][0], this.whiteView0[4][1], this.whiteView0[4][2], this.whiteView0[4][3], 
                     board[1][3][3], board[1][3][2], board[1][3][1], board[1][3][0]
                    ],
                    [this.whiteView0[5][0], this.whiteView0[5][1], this.whiteView0[5][2], this.whiteView0[5][3], 
                     board[1][2][3], board[1][2][2], board[1][2][1], board[1][2][0]
                    ],
                    [this.whiteView0[6][0], this.whiteView0[6][1], this.whiteView0[6][2], this.whiteView0[6][3], 
                     board[1][1][3], board[1][1][2], board[1][1][1], board[1][1][0]
                    ],
                    [this.whiteView0[7][0], this.whiteView0[7][1], this.whiteView0[7][2], this.whiteView0[7][3], 
                     board[1][0][3], board[1][0][2], board[1][0][1], board[1][0][0]
                    ]
                ];

this.whiteViewR = [ 
                    [this.whiteView0[0][0], this.whiteView0[0][1], this.whiteView0[0][2], this.whiteView0[0][3], 
                    board[2][7][3], board[2][7][2], board[2][7][1], board[2][7][0]
                    ],
                    [this.whiteView0[1][0], this.whiteView0[1][1], this.whiteView0[1][2], this.whiteView0[1][3], 
                    board[2][6][3], board[2][6][2], board[2][6][1], board[2][6][0]
                    ],
                    [this.whiteView0[2][0], this.whiteView0[2][1], this.whiteView0[2][2], this.whiteView0[2][3], 
                    board[2][5][3], board[2][5][2], board[2][5][1], board[2][5][0]
                    ],
                    [this.whiteView0[3][0], this.whiteView0[3][1], this.whiteView0[3][2], this.whiteView0[3][3], 
                    board[2][4][3], board[2][4][2], board[2][4][1], board[2][4][0]
                    ],
                    [this.whiteView0[4][0], this.whiteView0[4][1], this.whiteView0[4][2], this.whiteView0[4][3], 
                     this.whiteView0[4][4], this.whiteView0[4][5], this.whiteView0[4][6], this.whiteView0[4][7]
                    ],
                    [this.whiteView0[5][0], this.whiteView0[5][1], this.whiteView0[5][2], this.whiteView0[5][3], 
                     this.whiteView0[5][4], this.whiteView0[5][5], this.whiteView0[5][6], this.whiteView0[5][7]
                    ],
                    [this.whiteView0[6][0], this.whiteView0[6][1], this.whiteView0[6][2], this.whiteView0[6][3], 
                     this.whiteView0[6][4], this.whiteView0[6][5], this.whiteView0[6][6], this.whiteView0[6][7]
                    ],
                    [this.whiteView0[7][0], this.whiteView0[7][1], this.whiteView0[7][2], this.whiteView0[7][3], 
                     this.whiteView0[7][4], this.whiteView0[7][5], this.whiteView0[7][6], this.whiteView0[7][7]
                    ]
                ];

	        // initialize black views
this.blackView0 = [ 
                    [board[1][0][0], board[1][0][1], board[1][0][2], board[1][0][3], 
                    board[2][7][3], board[2][7][2], board[2][7][1], board[2][7][0]
                    ],
                    [board[1][1][0], board[1][1][1], board[1][1][2], board[1][1][3], 
                     board[2][6][3], board[2][6][2], board[2][6][1], board[2][6][0]
                    ], 
                    [board[1][2][0], board[1][2][1], board[1][2][2], board[1][2][3], 
                     board[2][5][3], board[2][5][2], board[2][5][1], board[2][5][0]
                    ],
                    [board[1][3][0], board[1][3][1], board[1][3][2], board[1][3][3], 
                     board[2][4][3], board[2][4][2], board[2][4][1], board[2][4][0]
                    ],
                    [board[1][4][0], board[1][4][1], board[1][4][2], board[1][4][3], 
                     board[0][3][3], board[0][3][2], board[0][3][1], board[0][3][0]
                    ],
                    [board[1][5][0], board[1][5][1], board[1][5][2], board[1][5][3], 
                     board[0][2][3], board[0][2][2], board[0][2][1], board[0][2][0]
                    ],
                    [board[1][6][0], board[1][6][1], board[1][6][2], board[1][6][3], 
                     board[0][1][3], board[0][1][2], board[0][1][1], board[0][1][0]
                    ],
                    [board[1][7][0], board[1][7][1], board[1][7][2], board[1][7][3], 
                     board[0][0][3], board[0][0][2], board[0][0][1], board[0][0][0]
                    ]
                ];
                
this.blackViewL = [ 
                    [this.blackView0[0][0], this.blackView0[0][1], this.blackView0[0][2], this.blackView0[0][3], 
                     this.blackView0[0][4], this.blackView0[0][5], this.blackView0[0][6], this.blackView0[0][7]
                    ],
                    [this.blackView0[1][0], this.blackView0[1][1], this.blackView0[1][2], this.blackView0[1][3], 
                     this.blackView0[1][4], this.blackView0[1][5], this.blackView0[1][6], this.blackView0[1][7]
                    ],
                    [this.blackView0[2][0], this.blackView0[2][1], this.blackView0[2][2], this.blackView0[2][3], 
                     this.blackView0[2][4], this.blackView0[2][5], this.blackView0[2][6], this.blackView0[2][7]
                    ],
                    [this.blackView0[3][0], this.blackView0[3][1], this.blackView0[3][2], this.blackView0[3][3], 
                     this.blackView0[3][4], this.blackView0[3][5], this.blackView0[3][6], this.blackView0[3][7]
                    ],
                    [this.blackView0[4][0], this.blackView0[4][1], this.blackView0[4][2], this.blackView0[4][3], 
                     board[2][3][3], board[2][3][2], board[2][3][1], board[2][3][0]
                    ],
                    [this.blackView0[5][0], this.blackView0[5][1], this.blackView0[5][2], this.blackView0[5][3], 
                     board[2][2][3], board[2][2][2], board[2][2][1], board[2][2][0]
                    ],
                    [this.blackView0[6][0], this.blackView0[6][1], this.blackView0[6][2], this.blackView0[6][3], 
                     board[2][1][3], board[2][1][2], board[2][1][1], board[2][1][0]
                    ],
                    [this.blackView0[7][0], this.blackView0[7][1], this.blackView0[7][2], this.blackView0[7][3], 
                     board[2][0][3], board[2][0][2], board[2][0][1], board[2][0][0]
                    ]
                ];
	        
this.blackViewR = [ 
                    [this.blackView0[0][0], this.blackView0[0][1], this.blackView0[0][2], this.blackView0[0][3], 
                    board[0][7][3], board[0][7][2], board[0][7][1], board[0][7][0]
                    ],
                    [this.blackView0[1][0], this.blackView0[1][1], this.blackView0[1][2], this.blackView0[1][3], 
                    board[0][6][3], board[0][6][2], board[0][6][1], board[0][6][0]
                    ],
                    [this.blackView0[2][0], this.blackView0[2][1], this.blackView0[2][2], this.blackView0[2][3], 
                    board[0][5][3], board[0][5][2], board[0][5][1], board[0][5][0]
                    ],
                    [this.blackView0[3][0], this.blackView0[3][1], this.blackView0[3][2], this.blackView0[3][3], 
                    board[0][4][3], board[0][4][2], board[0][4][1], board[0][4][0]
                    ],
                    [this.blackView0[4][0], this.blackView0[4][1], this.blackView0[4][2], this.blackView0[4][3], 
                     this.blackView0[4][4], this.blackView0[4][5], this.blackView0[4][6], this.blackView0[4][7]
                    ],
                    [this.blackView0[5][0], this.blackView0[5][1], this.blackView0[5][2], this.blackView0[5][3], 
                     this.blackView0[5][4], this.blackView0[5][5], this.blackView0[5][6], this.blackView0[5][7]
                    ],
                    [this.blackView0[6][0], this.blackView0[6][1], this.blackView0[6][2], this.blackView0[6][3], 
                     this.blackView0[6][4], this.blackView0[6][5], this.blackView0[6][6], this.blackView0[6][7]
                    ],
                    [this.blackView0[7][0], this.blackView0[7][1], this.blackView0[7][2], this.blackView0[7][3], 
                     this.blackView0[7][4], this.blackView0[7][5], this.blackView0[7][6], this.blackView0[7][7]
                    ]
                ];

	        // initialize red views
this.redView0 = [ 
                    [board[2][0][0], board[2][0][1], board[2][0][2], board[2][0][3], 
                     board[0][7][3], board[0][7][2], board[0][7][1], board[0][7][0]
                    ],
                    [board[2][1][0], board[2][1][1], board[2][1][2], board[2][1][3], 
                     board[0][6][3], board[0][6][2], board[0][6][1], board[0][6][0]
                    ], 
                    [board[2][2][0], board[2][2][1], board[2][2][2], board[2][2][3], 
                     board[0][5][3], board[0][5][2], board[0][5][1], board[0][5][0]
                    ],
                    [board[2][3][0], board[2][3][1], board[2][3][2], board[2][3][3], 
                     board[0][4][3], board[0][4][2], board[0][4][1], board[0][4][0]
                    ],
                    [board[2][4][0], board[2][4][1], board[2][4][2], board[2][4][3], 
                     board[1][3][3], board[1][3][2], board[1][3][1], board[1][3][0]
                    ],
                    [board[2][5][0], board[2][5][1], board[2][5][2], board[2][5][3], 
                     board[1][2][3], board[1][2][2], board[1][2][1], board[1][2][0]
                    ],
                    [board[2][6][0], board[2][6][1], board[2][6][2], board[2][6][3], 
                     board[1][1][3], board[1][1][2], board[1][1][1], board[1][1][0]
                    ],
                    [board[2][7][0], board[2][7][1], board[2][7][2], board[2][7][3], 
                     board[1][0][3], board[1][0][2], board[1][0][1], board[1][0][0]
                    ]
                ];
                
this.redViewL = [ 
                    [this.redView0[0][0], this.redView0[0][1], this.redView0[0][2], this.redView0[0][3], 
                     this.redView0[0][4], this.redView0[0][5], this.redView0[0][6], this.redView0[0][7]
                    ],
                    [this.redView0[1][0], this.redView0[1][1], this.redView0[1][2], this.redView0[1][3], 
                     this.redView0[1][4], this.redView0[1][5], this.redView0[1][6], this.redView0[1][7]
                    ],
                    [this.redView0[2][0], this.redView0[2][1], this.redView0[2][2], this.redView0[2][3], 
                     this.redView0[2][4], this.redView0[2][5], this.redView0[2][6], this.redView0[2][7]
                    ],
                    [this.redView0[3][0], this.redView0[3][1], this.redView0[3][2], this.redView0[3][3], 
                     this.redView0[3][4], this.redView0[3][5], this.redView0[3][6], this.redView0[3][7]
                    ],
                    [this.redView0[4][0], this.redView0[4][1], this.redView0[4][2], this.redView0[4][3], 
                     board[0][3][3], board[0][3][2], board[0][3][1], board[0][3][0]
                    ],
                    [this.redView0[5][0], this.redView0[5][1], this.redView0[5][2], this.redView0[5][3], 
                     board[0][2][3], board[0][2][2], board[0][2][1], board[0][2][0]
                    ],
                    [this.redView0[6][0], this.redView0[6][1], this.redView0[6][2], this.redView0[6][3], 
                     board[0][1][3], board[0][1][2], board[0][1][1], board[0][1][0]
                    ],
                    [this.redView0[7][0], this.redView0[7][1], this.redView0[7][2], this.redView0[7][3], 
                     board[0][0][3], board[0][0][2], board[0][0][1], board[0][0][0]
                    ]
                ];
	        
this.redViewR = [ 
                    [this.redView0[0][0], this.redView0[0][1], this.redView0[0][2], this.redView0[0][3], 
                    board[1][7][3], board[1][7][2], board[1][7][1], board[1][7][0]
                    ],
                    [this.redView0[1][0], this.redView0[1][1], this.redView0[1][2], this.redView0[1][3], 
                    board[1][6][3], board[1][6][2], board[1][6][1], board[1][6][0]
                    ],
                    [this.redView0[2][0], this.redView0[2][1], this.redView0[2][2], this.redView0[2][3], 
                    board[1][5][3], board[1][5][2], board[1][5][1], board[1][5][0]
                    ],
                    [this.redView0[3][0], this.redView0[3][1], this.redView0[3][2], this.redView0[3][3], 
                    board[1][4][3], board[1][4][2], board[1][4][1], board[1][4][0]
                    ],
                    [this.redView0[4][0], this.redView0[4][1], this.redView0[4][2], this.redView0[4][3], 
                     this.redView0[4][4], this.redView0[4][5], this.redView0[4][6], this.redView0[4][7]
                    ],
                    [this.redView0[5][0], this.redView0[5][1], this.redView0[5][2], this.redView0[5][3], 
                     this.redView0[5][4], this.redView0[5][5], this.redView0[5][6], this.redView0[5][7]
                    ],
                    [this.redView0[6][0], this.redView0[6][1], this.redView0[6][2], this.redView0[6][3], 
                     this.redView0[6][4], this.redView0[6][5], this.redView0[6][6], this.redView0[6][7]
                    ],
                    [this.redView0[7][0], this.redView0[7][1], this.redView0[7][2], this.redView0[7][3], 
                     this.redView0[7][4], this.redView0[7][5], this.redView0[7][6], this.redView0[7][7]
                    ]
                ];
	        
	        for (let i=0; i<3; i++) {
	        	board[i][0][0].setPiece(Piece.ROOK);
	        	board[i][1][0].setPiece(Piece.KNIGHT);
	        	board[i][2][0].setPiece(Piece.BISHOP);
	        	board[i][3][0].setPiece(Piece.KING);
	        	board[i][4][0].setPiece(Piece.QUEEN);
	        	board[i][5][0].setPiece(Piece.BISHOP);
	        	board[i][6][0].setPiece(Piece.KNIGHT);
	        	board[i][7][0].setPiece(Piece.ROOK);
	        	for (let j=0; j<8; j++) {
	            	board[i][j][1].setPiece(Piece.PAWN);
	        	}
	        }
	       	for ( let j=0; j<8; j++) {
	           	board[0][j][0].setSuit(Suit.WHITE);
	           	board[0][j][1].setSuit(Suit.WHITE);
	           	board[1][j][0].setSuit(Suit.BLACK);
	           	board[1][j][1].setSuit(Suit.BLACK);
	           	board[2][j][0].setSuit(Suit.RED);
	           	board[2][j][1].setSuit(Suit.RED);
	       	}
          this.draw(this.ctx); 
    }      	   

    getField(t: number, x: number, y:number) {
        return this.board[t][x][y];
    }           
    draw(ctx: CanvasRenderingContext2D){

			//canvas.scale(gZoom, gZoom, gXpos-(gDXpos/gZoom), gYpos-(gDYpos/gZoom));
			
			//canvas.translate(gXpos, gYpos);
		    var gHeight = ctx.canvas.clientHeight; // 450; //= ctx.getHeight(); //    canvas.getHeight();
		    var gWidth = ctx.canvas.clientWidth; //= ctx.getWidth(); //    canvas.getWidth();
		    
		    gHeight=Math.min(gHeight, gWidth);
		    gWidth=Math.min(gHeight, gWidth);

		    var pieceWidth = gWidth/16;
            var gRadiusFactor = this.radius;
		    var lMiddle = Math.min(gHeight, gWidth)/2;
		    var lRadius = (lMiddle-10);
		    var lShortRadius = Math.cos(Math.PI/6) * lRadius * gRadiusFactor;	    
		    var lTop = (lMiddle - Math.cos(Math.PI/6)*lRadius);
		    var lBottom = (lMiddle + Math.cos(Math.PI/6)*lRadius);
		    var lTopLeft = (lMiddle - Math.sin(Math.PI/6)*lRadius);
		    var lTopRight = (lMiddle + Math.sin(Math.PI/6)*lRadius);
		    var lLeft = (lMiddle - lRadius);
		    var lRight = (lMiddle + lRadius);

            this.drawTridrant(0, ctx, 
		    		     lTopLeft, lBottom,
		    		     (lMiddle-lShortRadius*Math.cos(Math.PI/6)),( lMiddle+lShortRadius*Math.sin(Math.PI/6)),
	                     lMiddle, lMiddle,
		    		     (lMiddle+lShortRadius*Math.cos(Math.PI/6)),( lMiddle+lShortRadius*Math.sin(Math.PI/6)),
		    		     lTopRight, lBottom
		    		     );
            this.drawTridrant(1, ctx, 
	   		             lTopLeft, lTop,
	   		             lMiddle, lMiddle-lShortRadius,
	                     lMiddle, lMiddle,
	   		             (lMiddle-lShortRadius*Math.cos(Math.PI/6)),( lMiddle+lShortRadius*Math.sin(Math.PI/6)),
	   		             lLeft, lMiddle
	   		             );
            this.drawTridrant(2, ctx, 
		   		         lRight, lMiddle,
		   		         (lMiddle+lShortRadius*Math.cos(Math.PI/6)),( lMiddle+lShortRadius*Math.sin(Math.PI/6)),
		                 lMiddle, lMiddle,
		   		         lMiddle, lMiddle-lShortRadius,
		   		         lTopRight, lTop
		   		         );

            var thisPiece;
		    for ( let t=0; t<3; t++) {
		    	for ( let x=0;x<8;x++) {
		    		for ( let y=0; y<4; y++){
		    			if (this.board[t][x][y].isOccupied()){
		    				switch (this.board[t][x][y].getSuit()){
		    				case Suit.BLACK:
		    				   	switch(this.board[t][x][y].getPiece()){
		    				   	case Piece.PAWN:
		    				   		thisPiece = blackPawn;
		    				   		break;
		    				   	case Piece.ROOK:
		    				   		thisPiece = blackRook;
		    				   		break;
		    				   	case Piece.KNIGHT:
		    				   		thisPiece = blackKnight;
		    				   		break;
		    				   	case Piece.BISHOP:
		    				   		thisPiece = blackBishop;
		    				   		break;
		    				   	case Piece.KING:
		    				   		thisPiece = blackKing;
		    				   		break;
		    				   	case Piece.QUEEN:
		    				   		thisPiece = blackQueen;
		    				   		break;
	    				    	}
	    				   		break;
		    				case Suit.WHITE:
		    				   	switch(this.board[t][x][y].getPiece()){
		    				   	case Piece.PAWN:
		    				   		thisPiece = whitePawn;
		    				   		break;
		    				   	case Piece.ROOK:
		    				   		thisPiece = whiteRook;
		    				   		break;
		    				   	case Piece.KNIGHT:
		    				   		thisPiece = whiteKnight;
		    				   		break;
		    				   	case Piece.BISHOP:
		    				   		thisPiece = whiteBishop;
		    				   		break;
		    				   	case Piece.KING:
		    				   		thisPiece = whiteKing;
		    				   		break;
		    				   	case Piece.QUEEN:
		    				   		thisPiece = whiteQueen;
		    				   		break;
	    				    	}
	    				   		break;
		    				case Suit.RED:	
		    				   	switch(this.board[t][x][y].getPiece()){
		    				   	case Piece.PAWN:
		    				   		thisPiece = redPawn;
		    				   		break;
		    				   	case Piece.ROOK:
		    				   		thisPiece = redRook;
		    				   		break;
		    				   	case Piece.KNIGHT:
		    				   		thisPiece = redKnight;
		    				   		break;
		    				   	case Piece.BISHOP:
		    				   		thisPiece = redBishop;
		    				   		break;
		    				   	case Piece.KING:
		    				   		thisPiece = redKing;
		    				   		break;
		    				   	case Piece.QUEEN:
		    				   		thisPiece = redQueen;
		    				   		break;
	    				    	}
	    				   		break;
		    				}
		    			ctx.drawImage( thisPiece,
                                            this.board[t][x][y].getCenterX()-(pieceWidth/2),
                                            this.board[t][x][y].getCenterY()-(pieceWidth/2),
                                            pieceWidth,
                                            pieceWidth
		    					    );
		    			}
		    			if (this.board[t][x][y].isSelected()){
                            //console.log("Selected trident : " + t + " x: "+x+"  y: " + y);
                            ctx.strokeStyle = '#CC0000';
                            ctx.lineWidth=4;
                            console.log( "On " + this.ID + " Selected : X1:"+ this.board[t][x][y].getX1() + " Y1:"+ this.board[t][x][y].getY1() + "  Xc:"+ this.board[t][x][y].getCenterX() + " Yc:"+ this.board[t][x][y].getCenterY() + "     ==> RC X1:" + ((this.board[t][x][y].getCenterX()-this.board[t][x][y].getX1())/(this.board[t][x][y].getY1()-this.board[t][x][y].getCenterY()))+
                                         "RC Y1:" + (this.board[t][x][y].getY1()-this.board[t][x][y].getCenterY())/(this.board[t][x][y].getX1()-this.board[t][x][y].getCenterX())
                            
                            ); 

// draw circle
							ctx.beginPath();
							ctx.arc(this.board[t][x][y].getCenterX(), this.board[t][x][y].getCenterY(), pieceWidth/2, 0, 2 * Math.PI, false);
							ctx.lineWidth = pieceWidth/10;
							ctx.strokeStyle = '#0000CC';
							ctx.stroke();

// draw outline
//                            ctx.beginPath();
//                            ctx.moveTo(board[t][x][y].getX1()+4, 
//                                       board[t][x][y].getY1()-4);
//                            ctx.lineTo(board[t][x][y].getX2()+4, 
//                                       board[t][x][y].getY2()+4);
//                            ctx.lineTo(board[t][x][y].getX3()-4, 
//                                       board[t][x][y].getY3()+4);
//                            ctx.lineTo(board[t][x][y].getX4()-4, 
//                                       board[t][x][y].getY4()-4);
//                            ctx.closePath();
//                            ctx.stroke();


// draw square
//                            ctx.beginPath();
//                            ctx.moveTo(board[t][x][y].getCenterX()-1, board[t][x][y].getCenterY()+1)
//                            ctx.lineTo(board[t][x][y].getCenterX()-1, board[t][x][y].getCenterY()-1);
//                            ctx.lineTo(board[t][x][y].getCenterX()+1, board[t][x][y].getCenterY()-1);
//                            ctx.lineTo(board[t][x][y].getCenterX()+1, board[t][x][y].getCenterY()+1);
//                            ctx.closePath();
//                            ctx.stroke();

                            //ctx.fill();
                            //ctx.lineTo(board[t][x][y].getX1(), board[t][x][y].getY1());
	                    	//canvas.drawPath(border, bPaint);
	                    	//this.invalidate();
	                    }
		    			if (this.board[t][x][y].getCanBeMovedTo()){
                            //console.log("canBeMovedto trident : " + t + " x: "+x+"  y: " + y);
// Draw circle
                            ctx.beginPath();
							ctx.arc(this.board[t][x][y].getCenterX(), this.board[t][x][y].getCenterY(), pieceWidth/8, 0, 2 * Math.PI, false);
                            ctx.fillStyle = '#00CC00';
							ctx.fill();
							ctx.strokeStyle = '#00CC00';
							ctx.lineWidth = 1;
							ctx.stroke();


//  Draw outline
//                            ctx.fillStyle = '#0f0';
//                            ctx.strokeStyle = '#00CC00';
//                            ctx.lineWidth = 4;
//                            ctx.beginPath();
//                            ctx.moveTo(board[t][x][y].getX1(), 
//                                       board[t][x][y].getY1());
//	                    	ctx.lineTo(board[t][x][y].getX2()+4, board[t][x][y].getY2()+4);
//	                    	ctx.lineTo(board[t][x][y].getX3()-4, board[t][x][y].getY3()+4);
//	                    	ctx.lineTo(board[t][x][y].getX4()-4, board[t][x][y].getY4()-4);
	                    	//ctx.lineTo(board[t][x][y].getX1(), board[t][x][y].getY1());
//                            ctx.closePath();
                            //ctx.fill();
//                            ctx.stroke();
	                    }
		    		}
		    	}
		    }
//		    Paint textPaint = new Paint();
//		    textPaint.setColor(Color.LTGRAY);
//		    canvas.drawText(reportString, 5+(gXpos+gDXpos)/gZoom,15+(gYpos+gDYpos)/gZoom, textPaint);
		    
			//testPiece = (ImageView) findViewById(R.id.ImageView01);
			//testPiece = new ImageView(this.getContext());
			//testPiece.
			//testPiece.setBackgroundResource(R.drawable.bishop_wht);
		    //findViewById(R.id.FrameLayout01);
//			LayoutParams params = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT);
//			LayoutParams params = new LayoutParams(200, 300);

			//theLayout.addView(testPiece, params);
//			Matrix m = new Matrix();
//			m.reset();
			//testPiece. .setImageMatrix(m);
			//m.preTranslate(100, 100);
//			m.postTranslate(100, 100);
//			testPiece.setPadding(0, 100, 100, 150);
			//testPiece.invalidate();

		}


		drawTridrant( tridantNr:number, ctx, blX:number,  blY:number,  tlX:number,  tlY:number,  middleX:number,  middleY:number,  trX:number,  trY:number,  brX:number,  brY:number){
            ctx.fillStyle = '#0f0';
            ctx.strokeStyle = darkField;
            ctx.lineWidth = 2;
            ctx.beginPath();
			ctx.moveTo(blX,blY);
			ctx.lineTo(tlX,tlY);
			ctx.lineTo(middleX, middleY);
			ctx.lineTo(trX,trY);
            ctx.lineTo(brX, brY);
            ctx.closePath();
            ctx.stroke();
		    for ( let i=0;i<4;i++){
		    	for( let j=0;j<4;j++){
	                if ((i+j)%2 == 1)
                        ctx.fillStyle = darkField;
	                else
                        ctx.fillStyle = lightField;
		    		ctx.beginPath()
		    		let bStartX = blX -j*((blX-tlX)/4);
		    		let bStartY = blY -j*((blY-tlY)/4);
		    		let bEndX = (blX+brX)/2 -j*(((blX+brX)/2-middleX)/4);
		    		let bEndY = (blY+brY)/2 -j*(((blY+brY)/2-middleY)/4);
		    		let tStartX = blX -(j+1)*((blX-tlX)/4);
		    		let tStartY = blY -(j+1)*((blY-tlY)/4);
		    		let tEndX = (blX+brX)/2 -(j+1)*(((blX+brX)/2-middleX)/4);
		    		let tEndY = (blY+brY)/2 -(j+1)*(((blY+brY)/2-middleY)/4);

		    		this.board[tridantNr][i][j].setX1(Math.round(bStartX+i*((bEndX-bStartX)/4)));
		    		this.board[tridantNr][i][j].setY1(Math.round(bStartY+i*((bEndY-bStartY)/4)));
		    		this.board[tridantNr][i][j].setX2(Math.round(tStartX+i*((tEndX-tStartX)/4)));
		    		this.board[tridantNr][i][j].setY2(Math.round(tStartY+i*((tEndY-tStartY)/4)));
		    		this.board[tridantNr][i][j].setX3(Math.round(tStartX+(i+1)*((tEndX-tStartX)/4)));
		    		this.board[tridantNr][i][j].setY3(Math.round(tStartY+(i+1)*((tEndY-tStartY)/4)));
		    		this.board[tridantNr][i][j].setX4(Math.round(bStartX+(i+1)*((bEndX-bStartX)/4)));
		    		this.board[tridantNr][i][j].setY4(Math.round(bStartY+(i+1)*((bEndY-bStartY)/4)));

		    		ctx.moveTo(this.board[tridantNr][i][j].getX1(),this.board[tridantNr][i][j].getY1());
		    		ctx.lineTo(this.board[tridantNr][i][j].getX2(),this.board[tridantNr][i][j].getY2());
		    		ctx.lineTo(this.board[tridantNr][i][j].getX3(),this.board[tridantNr][i][j].getY3());
		    		ctx.lineTo(this.board[tridantNr][i][j].getX4(),this.board[tridantNr][i][j].getY4());
		    		ctx.lineTo(this.board[tridantNr][i][j].getX1(),this.board[tridantNr][i][j].getY1());
                    ctx.closePath();
                    ctx.fill();
            //ctx.stroke();                        
		    	}
		    }
		    for ( let i=0;i<4;i++){
		    	for( let j=0;j<4;j++){
	                if ((i+j)%2 == 1)
                        ctx.fillStyle = darkField;
	                else
                        ctx.fillStyle = lightField;
		    		ctx.beginPath()
		    		let bStartX = (blX+brX)/2 -j*(((blX+brX)/2-middleX)/4);
		    		let bStartY = (blY+brY)/2 -j*(((blY+brY)/2-middleY)/4);
		    		let bEndX = brX -j*((brX-trX)/4);
		    		let bEndY = brY -j*((brY-trY)/4);
		    		let tStartX = (blX+brX)/2 -(j+1)*(((blX+brX)/2-middleX)/4);
		    		let tStartY = (blY+brY)/2 -(j+1)*(((blY+brY)/2-middleY)/4);
		    		let tEndX = brX -(j+1)*((brX-trX)/4);
		    		let tEndY = brY -(j+1)*((brY-trY)/4);

		    		this.board[tridantNr][i+4][j].setX1(bStartX+i*((bEndX-bStartX)/4));
		    		this.board[tridantNr][i+4][j].setY1(bStartY+i*((bEndY-bStartY)/4));
		    		this.board[tridantNr][i+4][j].setX2(tStartX+i*((tEndX-tStartX)/4));
		    		this.board[tridantNr][i+4][j].setY2(tStartY+i*((tEndY-tStartY)/4));
		    		this.board[tridantNr][i+4][j].setX3(tStartX+(i+1)*((tEndX-tStartX)/4));
		    		this.board[tridantNr][i+4][j].setY3(tStartY+(i+1)*((tEndY-tStartY)/4));
		    		this.board[tridantNr][i+4][j].setX4(bStartX+(i+1)*((bEndX-bStartX)/4));
		    		this.board[tridantNr][i+4][j].setY4(bStartY+(i+1)*((bEndY-bStartY)/4));

		    		ctx.moveTo(this.board[tridantNr][i+4][j].getX1(),this.board[tridantNr][i+4][j].getY1());
		    		ctx.lineTo(this.board[tridantNr][i+4][j].getX2(),this.board[tridantNr][i+4][j].getY2());
		    		ctx.lineTo(this.board[tridantNr][i+4][j].getX3(),this.board[tridantNr][i+4][j].getY3());
		    		ctx.lineTo(this.board[tridantNr][i+4][j].getX4(),this.board[tridantNr][i+4][j].getY4());
		    		ctx.lineTo(this.board[tridantNr][i+4][j].getX1(),this.board[tridantNr][i+4][j].getY1());
                    ctx.closePath();
                    ctx.fill();
		    	}
		    }

		}

		getLegalMoves( fromHere: ChessField, suitsTurn: Suit) {
			if ( !(fromHere.isOccupied() && fromHere.getSuit() == suitsTurn) ) {
				return null;
			}
			else {
				switch ( fromHere.getPiece()) { 
					case Piece.PAWN: {
						switch(suitsTurn) {
						case Suit.WHITE:
							return this.pawnMoves( fromHere, this.whiteView0, this.whiteViewL, this.whiteViewR);
						case Suit.BLACK:
							return this.pawnMoves( fromHere, this.blackView0, this.blackViewL, this.blackViewR);
						case Suit.RED:
							return this.pawnMoves( fromHere, this.redView0, this.redViewL, this.redViewR);
						}
					}
					case Piece.ROOK: {
						switch(fromHere.getHomeSuit()) {
						case Suit.WHITE:
							return this.rookMoves( fromHere, this.whiteView0 );
						case Suit.BLACK:
							return this.rookMoves( fromHere, this.blackView0 );
						case Suit.RED:
							return this.rookMoves( fromHere, this.redView0 );
						}
						break;
					}
					case Piece.KNIGHT: {
						switch(fromHere.getHomeSuit()) {
						case Suit.WHITE:
							return this.knightMoves( fromHere, this.whiteView0, this.whiteViewL, this.whiteViewR);
						case Suit.BLACK:
							return this.knightMoves( fromHere, this.blackView0, this.blackViewL, this.blackViewR);
						case Suit.RED:
							return this.knightMoves( fromHere, this.redView0, this.redViewL, this.redViewR);
						}
					}
					case Piece.BISHOP: {
						switch(fromHere.getHomeSuit()) {
						case Suit.WHITE:
							return this.bishopMoves( fromHere, this.whiteView0, this.whiteViewL, this.whiteViewR );
						case Suit.BLACK:
							return this.bishopMoves( fromHere, this.blackView0, this.blackViewL, this.blackViewR );
						case Suit.RED:
							return this.bishopMoves( fromHere, this.redView0, this.redViewL, this.redViewR );
						}
	                    break;
					}
					case Piece.QUEEN: {
						let result1 = [];
						let result2 = [];
						
						switch(fromHere.getHomeSuit()) {
						case Suit.WHITE: {
							result1 = this.rookMoves( fromHere, this.whiteView0 );
							result2	= this.bishopMoves( fromHere, this.whiteView0, this.whiteViewL, this.whiteViewR );
							if (result1 == null)
								return result2;
							else if (result2 == null)
								return result1;
							else {
								this.set_addset(result1, result2);
							    return result1;
							}
						}
						case Suit.BLACK: {
							result1 = this.rookMoves( fromHere, this.blackView0 );
							result2	= this.bishopMoves( fromHere, this.blackView0, this.blackViewL, this.blackViewR );
							if (result1 == null)
								return result2;
							else if (result2 == null)
								return result1;
							else {
								this.set_addset(result1, result2);
							    return result1;
							}
						}
						case Suit.RED: {
							result1 = this.rookMoves( fromHere, this.redView0 );
							result2	= this.bishopMoves( fromHere, this.redView0, this.redViewL, this.redViewR );
							if (result1 == null)
								return result2;
							else if (result2 == null)
								return result1;
							else {
								this.set_addset(result1, result2);
							    return result1;
							}
						}
						}
					}
	 				case Piece.KING: {
						switch(fromHere.getHomeSuit()) {
						case Suit.WHITE:
							return this.kingMoves( fromHere, this.whiteView0, this.whiteViewL, this.whiteViewR);
						case Suit.BLACK:
							return this.kingMoves( fromHere, this.blackView0, this.blackViewL, this.blackViewR);
						case Suit.RED:
							return this.kingMoves( fromHere, this.redView0, this.redViewL, this.redViewR);
						}
					}
				}
				return null;
			}
		}

		pawnMoves( fromHere: ChessField, view0: ChessField[][], viewL: ChessField[][], viewR: ChessField[][]) {
			let result = [];

			// a pawn's move
			 let x0 =10;  let y0 = 10;
			 let xL =10;  let yL = 10;
			 let xR =10;  let yR = 10;
		    for ( let i=0; i<8; i++) {
	        	for ( let j=0; j<8; j++) {
//	        		console.log("Chess", "X="+i+" y="+j );
	        		if ( view0[i][j] == fromHere ) {
	        			x0 = i;
	        			y0 = j;
	        		}
//	        		console.log("Chess", "  - L..." );
	        		if ( viewL[i][j] == fromHere  ) {
	        			xL = i;
	        			yL = j;
	        		}
//	        		console.log("Chess", "  - R..." );
	        		if ( viewR[i][j] == fromHere ) {
	        			xR = i;
	        			yR = j;
	        		}
	        	}
		    }
			
		    if ( x0 != 10 && y0 != 10 )
		    {
			    // move forward
			    if ( y0 < 7 && !view0[x0][y0+1].isOccupied() )
			    	result.push( view0[x0][y0+1] );
			    if ( y0 == 1 && !view0[x0][2].isOccupied() && !view0[x0][3].isOccupied() )
			    	this.set_add( result, view0[x0][3] );
			    
			    //take left
			    if ( y0 < 7 && x0 > 0 && view0[x0-1][y0+1].isOccupied() && view0[x0-1][y0+1].getSuit() != fromHere.getSuit() )
                    this.set_add( result, view0[x0-1][y0+1] );

			    //take right
			    if ( y0 < 7 && x0 < 7 && view0[x0+1][y0+1].isOccupied() && view0[x0+1][y0+1].getSuit() != fromHere.getSuit() )
                    this.set_add( result, view0[x0+1][y0+1] );
		    }
		    
		    if (  xL != 10 && yL != 10  && ( xL < 4 || yL > 3 ))
		    {
			    // move forward
			    if ( yL < 7 && !viewL[xL][yL+1].isOccupied() )
			    	this.set_add( result, viewL[xL][yL+1] );
			    
			    //take left
			    if ( yL < 7 && xL > 0 && viewL[xL-1][yL+1].isOccupied() && viewL[xL-1][yL+1].getSuit() != fromHere.getSuit() )
			    	this.set_add( result, viewL[xL-1][yL+1] );

			    //take right
			    if ( yL < 7 && xL < 7 && viewL[xL+1][yL+1].isOccupied() && viewL[xL+1][yL+1].getSuit() != fromHere.getSuit() )
			    	this.set_add( result, viewL[xL+1][yL+1] );
		    }
		    
		    if ( xR != 10 && yR != 10 && ( xR > 3 || yR >3 ))
		    {
			    // move forward
			    if ( yR < 7 && !viewR[xR][yR+1].isOccupied() )
                    this.set_add( result, viewR[xR][yR+1] );
			    
			    //take left
			    if ( yR < 7 && xR > 0 && viewR[xR-1][yR+1].isOccupied() && viewR[xR-1][yR+1].getSuit() != fromHere.getSuit() )
			    	this.set_add( result, viewR[xR-1][yR+1] );

			    //take right
			    if ( yR < 7 && xR < 7 && viewR[xR+1][yR+1].isOccupied() && viewR[xR+1][yR+1].getSuit() != fromHere.getSuit() )
			    	this.set_add( result, viewR[xR+1][yR+1] );
		    }
			
			return result;
		}

		rookMoves( fromHere: ChessField, view0: ChessField[][]) {
			let result = [];
			// a rook move
			let x0 =10; let y0 = 10;
		    for (let i=0; i<8; i++) {
	        	for (let j=0; j<8; j++) {
//	        		console.log("Chess", "X="+i+" y="+j );
	        		if ( view0[i][j] == fromHere ) {
	        			x0 = i;
	        			y0 = j;
	        		}
	        	}
		    }

			if ( x0 != 10 && y0 != 10 )
		    {
			    // move forward
			    for( let j=y0 + 1; j<8; j++){
			    	if ( !view0[x0][j].isOccupied() ){
				    	this.set_add( result, view0[x0][j] );
			    	}
			    	else if ( view0[x0][j].getSuit() == fromHere.getSuit())
				    	break;
			    	else {
				    	this.set_add( result, view0[x0][j] );
	                    break;				    	
			    	}
			    }
			    
			    // move backward
			    for( let j=y0 - 1; j>=0; j--){
			    	if ( !view0[x0][j].isOccupied() ){
				    	this.set_add( result, view0[x0][j] );
			    	}
			    	else if ( view0[x0][j].getSuit() == fromHere.getSuit())
				    	break;
			    	else {
				    	this.set_add( result, view0[x0][j] );
	                    break;				    	
			    	}
			    }

			    // move right
			    for( let i=x0 + 1; i<8; i++){
			    	if ( !view0[i][y0].isOccupied() ){
				    	this.set_add( result, view0[i][y0] );
			    	}
			    	else if ( view0[i][y0].getSuit() == fromHere.getSuit())
				    	break;
			    	else {
				    	this.set_add( result, view0[i][y0] );
	                    break;				    	
			    	}
			    }

			    // move left
			    for( let i=x0 - 1; i>=0; i--){
			    	if ( !view0[i][y0].isOccupied() ){
				    	this.set_add( result, view0[i][y0] );
			    	}
			    	else if ( view0[i][y0].getSuit() == fromHere.getSuit())
				    	break;
			    	else {
				    	this.set_add( result, view0[i][y0] );
	                    break;				    	
			    	}
			    }

		    }
			return result;

		}

	  bishopMoves( fromHere: ChessField, view0: ChessField[][], viewL: ChessField[][], viewR: ChessField[][]) {
			let result = [];
			// a bishop move
			 let x =10;  let y = 10;
		    for ( let i=0; i<8; i++) {
	        	for ( let j=0; j<4; j++) {
	        		if ( view0[i][j] == fromHere ) {
	        			x = i;
	        			y = j;
	        		}
	        	}
		    }

			if ( x != 10 && y != 10 )
		    {
			    // move up right
				  let n = Math.min(7-x, 7-y);
			    if( x < 4 && x <= y ) {
				    for( let i=1; i<=n; i++){
				    	if ( !viewL[x+i][y+i].isOccupied() ){
					    	this.set_add( result, viewL[x+i][y+i] );
				    	}
				    	else if ( viewL[x+i][y+i].getSuit() == fromHere.getSuit())
					    	break;
				    	else {
					    	this.set_add( result, viewL[x+i][y+i] );
	                        break;				    	
				    	}
				    }
	            }
			    if( x >= y ) {
				    for( let i=1; i<=n; i++){
				    	if ( !view0[x+i][y+i].isOccupied() ){
					    	this.set_add( result, view0[x+i][y+i] );
				    	}
				    	else if ( view0[x+i][y+i].getSuit() == fromHere.getSuit())
					    	break;
				    	else {
					    	this.set_add( result, view0[x+i][y+i] );
	                        break;				    	
				    	}
				    }
			    	
			    }
			    	
			    
			    // move down left
				n = Math.min(x, y);
			    for( let i=1; i<=n; i++){
			    	if ( !view0[x-i][y-i].isOccupied() ){
				    	this.set_add( result, view0[x-i][y-i] );
			    	}
			    	else if ( view0[x-i][y-i].getSuit() == fromHere.getSuit())
				    	break;
			    	else {
				    	this.set_add( result, view0[x-i][y-i] );
	                    break;				    	
			    	}
			    }
			    
			    // move up left
				n = Math.min(x, 7-y);

			    if( x > 3 && y >= 7-x ) {
			    	for( let i=1; i<=n; i++){
				    	if ( !viewR[x-i][y+i].isOccupied() ){
					    	this.set_add( result, viewR[x-i][y+i] );
				    	}
				    	else if ( viewR[x-i][y+i].getSuit() == fromHere.getSuit())
					    	break;
				    	else {
					    	this.set_add( result, viewR[x-i][y+i] );
	                        break;				    	
				    	}
				    }
			    }
			    if( y <= 7-x ) {
				    for( let i=1; i<=n; i++){
				    	if ( !view0[x-i][y+i].isOccupied() ){
					    	this.set_add( result, view0[x-i][y+i] );
				    	}
				    	else if ( view0[x-i][y+i].getSuit() == fromHere.getSuit())
					    	break;
				    	else {
					    	this.set_add( result, view0[x-i][y+i] );
	                        break;				    	
				    	}
				    }
			    	
			    }
			    	
			    
			    // move down right
				n = Math.min(7-x, y);
			    for( let i=1; i<=n; i++){
			    	if ( !view0[x+i][y-i].isOccupied() ){
				    	this.set_add( result, view0[x+i][y-i] );
			    	}
			    	else if ( view0[x+i][y-i].getSuit() == fromHere.getSuit())
				    	break;
			    	else {
				    	this.set_add( result, view0[x+i][y-i] );
	                    break;				    	
			    	}
			    }


		    }
			return result;
		}
		
		knightMoves( fromHere: ChessField, view0: ChessField[][], viewL: ChessField[][], viewR: ChessField[][]) {
			let result = [];
			
			// a knight move
			  let x =10; let y = 10;
		    for (let i=0; i<8; i++) {
	        	for (let j=0; j<4; j++) {
	        		if ( view0[i][j] == fromHere ) {
	        			x = i;
	        			y = j;
	        		}
	        	}
		    }
		    
		    if ( this.canGo( x-2, y-1, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x-2][y-1]);
		    if ( this.canGo( x-2, y+1, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x-2][y+1]);
		    if ( this.canGo( x-1, y-2, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x-1][y-2]);
		    if ( this.canGo( x-1, y+2, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x-1][y+2]);
		    if ( this.canGo( x+1, y-2, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x+1][y-2]);
		    if ( this.canGo( x+1, y+2, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x+1][y+2]);
		    if ( this.canGo( x+2, y-1, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x+2][y-1]);
		    if ( this.canGo( x+2, y+1, view0, fromHere.getSuit()) )
		    	this.set_add( result, view0[x+2][y+1]);
		    
		    if (x>1 && x<4 && y > 1) {
			    if ( this.canGo( x+1, y+2, viewL, fromHere.getSuit()) )
			    	this.set_add( result, viewL[x+1][y+2]);
			    if ( this.canGo( x+2, y+1, viewL, fromHere.getSuit()) )
			    	this.set_add( result, viewL[x+2][y+1]);
		    }
		    	
		    if (x>3 && x<6 && y > 1) {
			    if ( this.canGo( x-2, y+1, viewR, fromHere.getSuit()) )
			    	this.set_add( result, viewR[x-2][y+1]);
			    if ( this.canGo( x-1, y+2, viewR, fromHere.getSuit()) )
                    this.set_add( result, viewR[x-1][y+2]);
		    }
		    
			return result;
		}

		private canGo( x: number,  y: number, view: ChessField[][], mySuit: Suit) {
			if( 0 <= x && x <= 7 && 0 <= y && y <= 7 ) {
				if ( !view[x][y].isOccupied() )
					return true;
			    if ( view[x][y].getSuit() != mySuit )
			    	return true;
			}
			return false;
		} 		    
				   
		kingMoves( fromHere, view0, viewL, viewR) {
        let result = [];
			// a king move
			  let x =10; let y = 10;
		    for ( let i=0; i<8; i++) {
	        	for ( let j=0; j<4; j++) {
	        		//console.log("Chess", "X="+i+" y="+j );
	        		if ( view0[i][j] == ( fromHere ) ) {
	        			x = i;
	        			y = j;
	        		}
	        	}
		    }
		    for( let i= x-1; i<= x+1; i++)
			    for( let j= y-1; j<= y+1; j++) {
			    	if( this.canGo(i, j, view0, fromHere.getSuit()) )
			    			this.set_add( result, view0[i][j]);
			    	if (x<4 && this.canGo(i, j, viewL, fromHere.getSuit()) )
			    			this.set_add( result, viewL[i][j]);
			    	if (x>3 && this.canGo(i, j, viewR, fromHere.getSuit()) )
		    			this.set_add( result, viewR[i][j]);
			    }
			return result;
    }

onTouchEvent(xCo, yCo) {
if ( true )	{   	
//	    	switch (event.getAction()) {
//	    	case MotionEvent.ACTION_DOWN: {
	    			let gDXpos = 0;
			      let gDYpos = 0;
	        	let gXpos1 = xCo;
	          let gYpos1 = yCo;
	          let fingerMoved=false;
console.log(this.ID + " : onTouch");
                    //not in use in Java script, so disabled for the moment
                   let gXpos = 0;
                   let gYpos = 0;
                   let gZoom = 1;

	            	let vXpos = (gXpos / gZoom) + (gXpos1 / gZoom) ;
	            	let vYpos = (gYpos / gZoom)  + (gYpos1 / gZoom);
	            	//canvas.scale(gZoom, gZoom, gXpos+(gDXpos/gZoom), gYpos+(gDYpos/gZoom));
		let reportString = "xC: "+ gXpos + "   yC:" + gYpos + "     x: "+ gXpos1 + "   y:" + gYpos1;
	          //  	console.log( reportString );
	            	let touchedField = this.fieldTouched(vXpos, vYpos);
	            	if (touchedField != null && touchedField.isSelected()) {
                        console.log("Unselect selected field!"); 
                        this.clearSelection();	
                    }    
	            	else if (touchedField != null && touchedField.getCanBeMovedTo()) {
                       console.log("Move!");
	                   let fromHere = this.findSelectedField();
	                   touchedField.setPiece(fromHere.getPiece());
	                   touchedField.setSuit(fromHere.getSuit());
	                   touchedField.setPicture(fromHere.getPicture());
	                   fromHere.setPiece(null);
	                   fromHere.setSuit(null);
	                   this.clearSelection();
	            	}
	            	else if (touchedField != null){
                        console.log(this.ID + " : Select this field!");
                        this.clearSelection();
	            		touchedField.select();
	            		let legals = this.getLegalMoves(touchedField, touchedField.getSuit()); // LET OP DIT moet de kleur zijn  van degene die de beurt heeft!!!!
                        if (legals != null)
                          for (let i=0; i<legals.length; i++) 
                             legals[i].setCanBeMovedTo();
	            	}
	            }
	        	//break;

	    //	case MotionEvent.ACTION_MOVE: {
	   // 		if (event.getHistorySize()>0) {
		//    			if (fingerMoved || Math.abs(gXpos1-event.getX())>5 ||  Math.abs(gYpos1-event.getY())>5){
		 //   			  fingerMoved = true;
//		    			  if (gDontMove) {
//		    				  ChessField here = fieldTouched((gXpos+event.getX())/gZoom, (gYpos+event.getY())/gZoom);
//		    				  if ( here != gMoveFrom && gMoveFrom != null && here != null) {
//		    					  if (here != gMoveTo && gMoveTo != null) {
//		    						  gMoveTo.deSelect();
//		    					  }
//		    					  gMoveTo = here;
//								  gMoveTo.select();
//		    				  }
//		    			  
//		    			  }
//		    			  else {
		   //     			  gDXpos = event.getX()-gXpos1;
		    //    		      gDYpos = event.getY()-gYpos1;
//		    			  }

		        		      
		        		    //	    			}
//		    		   else if (event.getEventTime()-event.getDownTime() > 500) {
//		      		       gMoveFrom = fieldTouched((gXpos+event.getX())/gZoom, (gYpos+event.getY())/gZoom);
//		      		       if (gMoveFrom != null) {
//		      		    	   if (gMoveFrom.isOccupied()) {
//		      		    		   gMoveFrom.select();
//		      		    		   gDontMove = true;
//		      		    	   }
//		      		       }
		    //		   }
		   // 		}
	    //		}
	   	//	    break;
	    //	case MotionEvent.ACTION_UP: {
	   // 			gXpos=gXpos-(gDXpos/gZoom);
	   // 			gYpos=gYpos-(gDYpos/gZoom);
	   // 			gDXpos = 0;
	   // 			gDYpos = 0;
	   // 		}
	   //		    break;
	   // 	}    
	   // 	this.invalidate();
	   // 	return true;
        } 

	   fieldTouched(xTouch: number, yTouch: number){
		    let minDistCentre = 200;
			  let touchedField = null;	
if (this.board == null)	console.log("board is not initialized");
	    	for (let t=0; t<3; t++) {
		    	for (let x=0;x<8;x++) {
		    		for (let y=0; y<4; y++){
		    			let f = this.board[t][x][y];
		    			let dist =  Math.sqrt(Math.pow(f.getCenterX()-xTouch, 2) +
		    					Math.pow(f.getCenterY()-yTouch, 2));
		    			if( dist < minDistCentre ) {
		    				minDistCentre = dist;
		    				touchedField = f;
		    			}
		    		}
		    	}
		    }
	    	return touchedField;
	    }
	    
	    findSelectedField(){
		    for (let t=0; t<3; t++) 
		    	for (let x=0;x<8;x++) 
		    		for (let y=0; y<4; y++)
		    			if( this.board[t][x][y].isSelected() )
		    				return this.board[t][x][y];
		    return null;			
	    }

	    clearSelection(){
		    for ( let t=0; t<3; t++) {
		    	for ( let x=0;x<8;x++) {
		    		for ( let y=0; y<4; y++){
		    			this.board[t][x][y].deSelect();
		    			this.board[t][x][y].clearCanBeMovedTo();
		    		}
		    	}
		    }
	    }
        

        set_add(theArray, theElement ) {
            if( theArray.indexOf(theElement)  == -1)
               theArray.push(theElement)
        }
        set_addset(theArray, theAdditive ) {
            for(; theAdditive.length > 0;)
               this.set_add( theArray, theAdditive.pop());
        }

    }

class ChessField {

private occupied: boolean;
private x1: number;
private y1: number;
private x2: number;
private y2: number;
private x3: number;
private y3: number;
private x4: number;
private y4: number;
private centerX: number;
private centerY: number;
private thisPiece: Piece;
private thisSuit: Suit;
private homeSuit: Suit;
private thePicture;
private selected: boolean;
private canBeMovedTo: boolean;

constructor( home: Suit) {
  this.occupied = false;
	this.x1=0;
	this.y1=0;
	this.x2=0;
	this.y2=0;
	this.x3=0;
	this.y3=0;
	this.x4=0;
	this.y4=0;
	this.centerX =0;
	this.centerY=0;
	this.thisPiece = null;
	this.thisSuit = null;
	this.homeSuit = home;
  this.thePicture = null;
  this.selected = false;
  this.canBeMovedTo = false;
}    


  select() {
	    this.selected = true;
	}

  deSelect() {
		this.selected = false;
	}

	isSelected(){
		return this.selected;
	}
	
	isOccupied() {
		return this.occupied;
	}
	
	getCanBeMovedTo() {
		return this.canBeMovedTo;
	}
	
	setCanBeMovedTo() {
		this.canBeMovedTo = true;
	}
	
	clearCanBeMovedTo() {
		this.canBeMovedTo = false;
	}
	
	getHomeSuit() {
		return this.homeSuit;
	}
	
	getX1() {
		return this.x1;
	}
	getY1() {
		return this.y1;
	}
	getX2() {
		return this.x2;
	}
	getY2() {
		return this.y2;
	}
	getX3() {
		return this.x3;
	}
	getY3() {
		return this.y3;
	}
	getX4() {
		return this.x4;
	}
	getY4() {
		return this.y4;
	}
	getCenterX() {
		return this.centerX;
	}
	getCenterY() {
		return this.centerY;
	}

	setX1( value: number) {
		this.x1 = value;
		this.centerX = (this.x1+this.x2+this.x3+this.x4)/4;
	}
	setY1( value: number) {
		this.y1 = value;
        this.centerY = (this.y1+this.y2+this.y3+this.y4)/4;
	}
	setX2( value: number) {
		this.x2 = value;
		this.centerX = (this.x1+this.x2+this.x3+this.x4)/4;
	}
	setY2( value: number) {
		this.y2 = value;
        this.centerY = (this.y1+this.y2+this.y3+this.y4)/4;
	}
	setX3( value: number) {
		this.x3 = value;
		this.centerX = (this.x1+this.x2+this.x3+this.x4)/4;
	}
	setY3( value: number) {
		this.y3 = value;
        this.centerY = (this.y1+this.y2+this.y3+this.y4)/4;
	}
	setX4( value: number) {
		this.x4 = value;
		this.centerX = (this.x1+this.x2+this.x3+this.x4)/4;
	}
  setY4( value: number) {
		this.y4 = value;
        this.centerY = (this.y1+this.y2+this.y3+this.y4)/4;
	}
  setPiece( p: Piece){
    	this.thisPiece = p;
    	if ( p == null)
        this.occupied = false;
    	else
        this.occupied = true;
  }
  
  setSuit( s: Suit){
  	this.thisSuit = s;
  }

  getPiece(){
   	return this.thisPiece;
  }
  getSuit(){
   	return this.thisSuit;
  }
    
  setPicture( thisButton){
   	this.thePicture = thisButton;
  }
    
  getPicture() {
   	return this.thePicture;
  }

}

// End of Chess3p project
new ChessBoard();