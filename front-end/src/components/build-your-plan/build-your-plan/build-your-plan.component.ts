import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectedPhoneInformationAction } from 'src/store/app.action';

@Component({
  selector: 'app-build-your-plan',
  templateUrl: './build-your-plan.component.html',
  styleUrls: ['./build-your-plan.component.scss'],
})
export class BuildYourPlanComponent {
  params: any;
  constructor(public store: Store<{ selector: any }>, route: ActivatedRoute) {
    route.queryParams.subscribe((val) => {
      this.params = {
        color: val['color'],
        ram: val['ram'],
        storage: val['storage'],
        title: val['title'],
      };
    });
    this.store.dispatch(selectedPhoneInformationAction(this.params));
  }
}
