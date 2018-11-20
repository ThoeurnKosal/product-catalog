import { CategoryControllerService } from './../../@swagger/api/categoryController.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  // result;

  // constructor(private _categoryController: CategoryControllerService) {
  // }

  // ngOnInit() {
  //   let filter = {
  //     page: 1,
  //     rowsPerPage: 100,
  //     searchText: ''
  //   };
  //   this._categoryController.getPublicCategoriesUsingPOST(filter).subscribe(result => {
  //     console.log(result);
  //     this.result = result;
  //   }, error => {

  //   });
    // this._categoryController.deleteUsingPOST(3).subscribe(result => {
    //     console.log(result);
    // }, error => {

    // });
  // }
}
