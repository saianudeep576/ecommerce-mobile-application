import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'r-sim-selection',
  templateUrl: './sim-selection.component.html',
  styleUrls: ['./sim-selection.component.scss'],
})
export class SimSelectionComponent {
  simSelectionForm: FormGroup;
  simSelectionList = [
    {
      simName: 'Airtel',
      url: 'https://logos-world.net/wp-content/uploads/2020/11/Airtel-Emblem-700x394.png',
    },
    {
      simName: 'Jio',
      url: 'https://static.vecteezy.com/system/resources/previews/017/221/777/original/jio-transparent-free-png.png',
    },
    {
      simName: 'BSNL',
      url: 'https://images.fonearena.com/blog/wp-content/uploads/2021/10/BSNL-logo-1024x693.jpg',
    },
    {
      simName: 'VI',
      url: 'https://resize.indiatvnews.com/en/resize/newbucket/360_-/2024/02/vodafone-idea-1708608271.jpg',
    },
  ];
  constructor(public fb: FormBuilder) {
    this.simSelectionForm = this.fb.group({
      simSelectionRadio: new FormControl('', Validators.required),
    });
  }
  onSimSelectionChange() {
    console.log(this.simSelectionForm.get('simSelectionRadio').value);
  }
}
