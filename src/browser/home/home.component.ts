import {Component, ViewContainerRef} from '@angular/core';

import {GeneratorService} from '../common/services/generator/generator.service';
import {InputSplit} from '../common/input/input-split.component';
import {ButtonSubmit} from '../common/button/button-submit.component';

@Component({
  selector: 'my-app',
  templateUrl: './src/browser/home/home.component.html',
  styleUrls: ['./src/browser/home/home.component.css'],
  providers: [
    GeneratorService
  ],
  directives: [
    InputSplit,
    ButtonSubmit
  ]
})

export class Home {
  public viewContainerRef: ViewContainerRef;
  public generatorService: GeneratorService;
  public passwordAmount: number;
  public letterAmount: number;
  public numberAmount: number;

  constructor (
      viewContainerRef: ViewContainerRef,
      generatorService: GeneratorService) {
    this.viewContainerRef = viewContainerRef;
    this.generatorService = generatorService;
  }

  // public onSubmit = () => {
  //   this.generatorService.generate(this.passwordAmount, this.letterAmount, this.numberAmount);
  // }

  public handlePasswordAmount = ($event) => {
    this.passwordAmount = $event;
  };

  public handleLetterAmount = ($event) => {
    this.letterAmount = $event;
  };

  public handleNumberAmount = ($event) => {
    this.numberAmount = $event;
  };

  public handleSubmission = ($event) => {
    this.generatorService.generate(this.passwordAmount, this.letterAmount, this.numberAmount);
  };
}
