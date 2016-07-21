import {Injectable} from '@angular/core';

import {KeyBuilder} from '../../models/keys/key-builder.model';
import {Key} from '../../models/keys/key.model';

import {GeneratorService} from '../../services/generator/generator.service';


@Injectable()
export class KeyBridger {
	private key: Key;
	private keyBuilder: KeyBuilder;

	constructor (private generatorService: GeneratorService) {
		// this.key = new Key();
		// this.keyBuilder = new KeyBuilder();
	}

	public bridge = (key: Key, keyBuilder: KeyBuilder) => {
		this.key = key;
		this.keyBuilder = keyBuilder;
	};
}