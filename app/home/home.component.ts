import {Component, ViewContainerRef} from '@angular/core';

import {
  InputText,
  Button,
  Fieldset,
  Panel
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
    Button,
    Fieldset,
    Panel
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

  public onSubmit = () => {
    this.generatorService.generate(this.passwordAmount, this.letterAmount, this.numberAmount);
  }
}
