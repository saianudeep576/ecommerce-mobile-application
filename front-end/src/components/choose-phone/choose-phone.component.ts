import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EcomApiService } from 'src/services/ecom-api.service';

@Component({
  selector: 'app-choose-phone',
  templateUrl: './choose-phone.component.html',
  styleUrls: ['./choose-phone.component.scss'],
})
export class ChoosePhoneComponent implements OnInit {
  imageUrlInfo: any;
  brandsList = ['Apple', 'Realme', 'All Brands'];
  brandSelectionForm: FormGroup;
  filteredList: any = [];
  constructor(public ecomApiService: EcomApiService, public fb: FormBuilder) {
    this.brandSelectionForm = this.fb.group({
      brandSelection: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.ecomApiService.getPhonesInfo().subscribe((val) => {
      this.imageUrlInfo = val;
      this.filteredList = this.imageUrlInfo;
    });
    this.filterData();
  }

  filterData() {
    this.brandSelectionForm
      .get('brandSelection')
      .valueChanges.subscribe((data) => {
        if (data === 'Apple') {
          this.filteredList = this.imageUrlInfo.filter(
            (p: any) => p.brand === 'Apple'
          );
        }
        if (data === 'Realme') {
          this.filteredList = this.imageUrlInfo.filter(
            (p: any) => p.brand === 'Realme'
          );
        }
        if (data === 'All Brands') {
          this.filteredList = this.imageUrlInfo;
        }
      });
    return this.filteredList;
  }
}
