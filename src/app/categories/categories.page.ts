import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryControllerService } from './../../@swagger/api/categoryController.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  apiUrl = environment.apiUrl;
  pageType: string;
  formGroup: FormGroup;
  category = {
    id: '',
    name: '',
    description: '',
  };
  file: File;

  constructor(
    private _formBuilder: FormBuilder,
    private _categoryControllerService : CategoryControllerService,
    private _route: ActivatedRoute,
    private _router : Router,
    private _toastCtrl : ToastController,
  ) { }

  ngOnInit() {
    this.formGroup = this.createCategoryForm();
  }

  /**
   * Create product form
   *
   * @returns {FormGroup}
   */
  createCategoryForm(): FormGroup {
    return this._formBuilder.group(this.category);
  }

  presentToast() {
    let toast = this._toastCtrl.create({
      message: 'Category was added successfully!',
      duration: 3000,
      position: 'top'
    });
  }

  addNewCategory(){
    const data = this.formGroup.getRawValue();
    this._categoryControllerService.saveUsingPOST(data.name, data.description, null,).subscribe(result => {
        this._router.navigateByUrl('tabs/tabs/(category:category)');
        this.presentToast();
    }, error => {
      console.log("error!");
      this._router.navigateByUrl('/login');
    });
  }

}
