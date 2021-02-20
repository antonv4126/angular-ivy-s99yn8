import { Component, Input } from '@angular/core';

@Component({
  selector: 'chess-board',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css'],
})

export class ChessBoardComponent {
  @Input() id:  string;
  @Input() headertxt:  string;
  @Input() maintxt:  string;
  @Input() tiletype: string;
 }