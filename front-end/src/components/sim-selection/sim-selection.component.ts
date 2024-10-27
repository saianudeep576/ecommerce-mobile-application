import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectedSImInformationAction } from 'src/store/app.action';

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
  constructor(
    public fb: FormBuilder,
    public store: Store<{ selectedSimInformationSelector: '' }>
  ) {
    this.simSelectionForm = this.fb.group({
      simSelectionRadio: new FormControl('', Validators.required),
    });
  }
  onSimSelectionChange() {
    this.store.dispatch(
      selectedSImInformationAction({
        selectedSimInformation:
          this.simSelectionForm.get('simSelectionRadio')?.value,
      })
    );
  }
}
