import {
	Component,
	Output,
	EventEmitter,
	Input
} from '@angular/core';

import {KeyBuilder} from '../models/keys/key-builder.model';

@Component({
	selector: 'input-split',
	templateUrl: './src/browser/common/input/input-split.component.html'
})

export class InputSplit {
	@Input() title: string;
	@Output() amount: EventEmitter<number> = new EventEmitter();
	model: number;

	constructor () {}

	emitAmount = () => {
		this.amount.emit(this.model);
	};
}

