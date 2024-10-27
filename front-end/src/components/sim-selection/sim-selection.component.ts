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
      url: 'assets/airtel.png',
    },
    {
      simName: 'Jio',
      url: 'assets/jio.webp',
    },
    {
      simName: 'BSNL',
      url: 'assets/bsnl.jpg',
    },
    {
      simName: 'VI',
      url: 'assets/vi.jpg',
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
