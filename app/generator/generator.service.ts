import {
  Injectable
} from '@angular/core';

import {Key} from '../keys/key.model';

@Injectable()
export class GeneratorService {
  private key: Key = new Key();

  constructor () {}

  public generate = (passwordAmount, letterAmount, numberAmount, symbolAmount): string => {
    // symbols 33-47
    // numbers 48-57
    // letters 65-90, 97-122
    for (let i = 0; i < passwordAmount; i++) {
      for (let j = 0; j < letterAmount; j++) {
        let flipBit = Math.round(Math.random());
        let letterToAdd: string;

        if (flipBit === 1) {
          let charCode = Math.floor(90 - (Math.random() * 26));
          letterToAdd = String.fromCharCode(charCode);
          this.key.value += letterToAdd;
        } else if (flipBit === 0) {
          let charCode = Math.floor(122 - (Math.random() * 26));
          letterToAdd = String.fromCharCode(charCode);
          this.key.value += letterToAdd;
        } else {
          console.log('flipBit: Something went horribly wrong');
        }
      }
    }

    return this.shuffle(this.key.value);
  }

  private shuffle = (keyValue): string => {
    let keyValueArr = keyValue.split('');

    for (let i = 0; i < keyValueArr.length; i++) {
      let randomIndex = Math.floor(Math.random() * keyValueArr.length - 1);
      let tmp = keyValueArr[i];
      keyValueArr[i] = keyValueArr[randomIndex];
      keyValueArr[randomIndex] = tmp;
    }

    console.log(keyValueArr.join(''));
    return keyValueArr.join('');
  }

  // TODO
  private swap = () => {

  }
}