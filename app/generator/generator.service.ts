import {
  Injectable
} from '@angular/core';

import {Key} from '../keys/key.model';

@Injectable()
export class GeneratorService {
  private key: Key;

  constructor () {}

  public generate = (passwordAmount, letterAmount, numberAmount): Array<Key> => {
    // numbers 48-57
    // letters 65-90, 97-122
    let letterToAdd: string;
    let numberToAdd: string;
    let keyArr: Array<Key> = new Array<Key>();    

    for (let i = 0; i < passwordAmount; i++) {
      this.key = new Key();
      this.key.value = '';

      for (let j = 0; j < letterAmount; j++) {
        let flipBit = Math.round(Math.random());
        if (flipBit === 1) {
          let charCode = Math.floor(91 - Math.random() * 26);
          letterToAdd = String.fromCharCode(charCode);
          this.key.value += letterToAdd;
        } else if (flipBit === 0) {
          let charCode = Math.floor(123 - Math.random() * 26)
          letterToAdd = String.fromCharCode(charCode);
          this.key.value += letterToAdd;
        } else {
          console.log('flipBit: something went terribly wrong during letter generation');
        }
        
      }

      for (let j = 0; j < numberAmount; j++) {
        let charCode = Math.floor(58 - Math.random() * 10);
        numberToAdd = String.fromCharCode(charCode);
        this.key.value += numberToAdd;
      }
      
      this.key.value = this.shuffle(this.key.value);
      keyArr.push(this.key);
      this.key = null;
    }

    console.log(keyArr);

    return keyArr;
  }

  private shuffle = (keyValue): string => {
    let keyValueArr = keyValue.split('');

    for (let i = 0; i < keyValueArr.length; i++) {
      let randomIndex = Math.floor(Math.random() * keyValueArr.length);
      let tmp = keyValueArr[i];
      keyValueArr[i] = keyValueArr[randomIndex];
      keyValueArr[randomIndex] = tmp;
    }

    // console.log(keyValueArr);
    return keyValueArr.join('');
  }

  // TODO
  private swap = () => {

  };

  private clear = () => {

  };
}
