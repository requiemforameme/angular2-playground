import {
	Component,
	Input,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'button-submit',
	templateUrl: './src/browser/common/button/button-submit.component.html',
	styleUrls: ['./src/browser/common/button/button-submit.component.css']
})

export class ButtonSubmit {
	@Input() label: string;
	@Output() submitted: EventEmitter<any> = new EventEmitter();

	constructor () {}

	emitSubmit = () => {
		this.submitted.emit(event);
	};
}
