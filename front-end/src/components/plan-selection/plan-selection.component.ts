import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'r-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss'],
})
export class PlanSelectionComponent {
  options = ['One', 'Two', 'Three'];
  myControl: FormControl = new FormControl();

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val))
    );
  }

  filter(val: string): string[] {
    return this.options.filter(
      (option) => option.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }
}
