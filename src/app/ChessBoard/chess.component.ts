import { Component, Input } from '@angular/core';

@Component({
  selector: 'chess-board',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})

export class ChessBoard {
  @Input() id:  string;
 }