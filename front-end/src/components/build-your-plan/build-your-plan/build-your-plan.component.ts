import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EcomStateService } from 'src/services/ecom-state.service';
import { selectedPhoneInformationAction } from 'src/store/app.action';

@Component({
  selector: 'app-build-your-plan',
  templateUrl: './build-your-plan.component.html',
  styleUrls: ['./build-your-plan.component.scss'],
})
export class BuildYourPlanComponent {
  params: any;
  selectedDeviceInfo: any;
  constructor(
    public store: Store<{ selector: any }>,
    route: ActivatedRoute,
    public ecomStateService: EcomStateService
  ) {
    route.queryParams.subscribe((val) => {
      this.params = {
        color: val['color'],
        ram: val['ram'],
        storage: val['storage'],
        title: val['title'],
        price: val['price'],
      };
    });

    this.store.dispatch(
      selectedPhoneInformationAction({ selectedPhoneInformation: this.params })
    );
  }
}
