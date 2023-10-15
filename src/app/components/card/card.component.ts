import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@Input()
	gameCover: string = '';
	@Input()
	gameLabel: string = '';
	@Input()
	gameType: string = 'XPTO | PS4';
	@Input()
	gamePrice: string = 'R$ 199,99';

	constructor() {}

	ngOnInit() {}
}
