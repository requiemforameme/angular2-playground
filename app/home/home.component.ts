import {Component, ViewContainerRef} from '@angular/core';

import {
  InputText,
  Button
} from 'primeng/primeng';

import {GeneratorService} from '../generator/generator.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/home/home.component.html',
  styleUrls: ['./app/home/home.component.css'],
  providers: [
    GeneratorService
  ],
  directives: [
    InputText,
    Button
  ]
})

export class Home {
  public viewContainerRef: ViewContainerRef;
  public generatorService: GeneratorService;
  public passwordAmount: number = 1;
  public letterAmount: number = 0;
  public numberAmount: number = 0;
  public symbolAmount: number = 0;

  constructor (
      viewContainerRef: ViewContainerRef,
      generatorService: GeneratorService) {
    this.viewContainerRef = viewContainerRef;
    this.generatorService = generatorService;
  }

  public onSubmit = () => {
    if (this.passwordAmount < 1) {
      this.passwordAmount = 1;
    }

    if (this.letterAmount < 1) {
      this.letterAmount = 32;
    }

    if (this.numberAmount < 1) {
      this.numberAmount = 32;
    }

    if (this.symbolAmount < 1) {
      this.symbolAmount = 0;
    }

    this.generatorService.generate(this.passwordAmount, this.letterAmount, this.numberAmount, this.symbolAmount);
  }
}
