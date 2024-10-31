import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SelectedPhoneInfo } from 'src/common-interfaces/ecom-api.types';
import { EcomStateService } from 'src/services/ecom-state.service';
import { TentiativeService } from 'src/services/tentiative.service';
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
    public store: Store<{
      selectedPhoneInformationSelector: SelectedPhoneInfo;
    }>,
    route: ActivatedRoute,
    public ecomStateService: EcomStateService,
    public tentiativeService: TentiativeService
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
    this.ecomStateService.selectedPhoneInformation$ = this.store.select(
      'selectedPhoneInformationSelector'
    );
    //tentiative change
    this.tentiativeService.tempSelectedDeviceInfo$.next(this.params);
    console.log(this.tentiativeService.tempSelectedDeviceInfo$.value);
  }
}
