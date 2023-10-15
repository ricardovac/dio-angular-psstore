import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	templateUrl: './card-pricing.component.html',
	styleUrls: ['./card-pricing.component.scss'],
})
export class CardPricingComponent implements OnInit {
	@Input()
	gameType: string = 'Digital Ps4';
	@Input()
	gamePrice: string = 'R$ 199,99';

	constructor() {}

	ngOnInit() {}
}
