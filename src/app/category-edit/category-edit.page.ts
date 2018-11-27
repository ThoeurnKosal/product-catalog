import { AlertController } from '@ionic/angular';
import { CategoryControllerService } from './../../@swagger/api/categoryController.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {
  apiUrl = environment.apiUrl;
  pageType: string;
  formGroup : FormGroup;
  category = {
    id: '',
    name: '',
    description: '',
    filename: '',
  };
  file : File;

  constructor(
    private _router : Router,
    private _route  : ActivatedRoute,
    private _formBuilder : FormBuilder,
    private _categoryCotroller : CategoryControllerService,
    private _alertController : AlertController,
  ) { }

  ngOnInit() {
    this.formGroup = this.createCategoryForm();
    this._categoryCotroller.getCategoryUsingPOST(this._route.snapshot.params.id).subscribe(result => {
      this.category.name = result.body.name;
      this.category.filename = result.body.filename;
      this.category.description = result.body.description;
      this.formGroup.controls['id'].setValue(this._route.snapshot.params.id);
      this.formGroup.controls['name'].setValue(result.body.name);
      this.formGroup.controls['description'].setValue(result.body.description);

    }, error => {
      console.log("error");
      this._router.navigateByUrl('/login');
    });
  }

   /**
   * Create product form
   *
   * @returns {FormGroup}
   */
  createCategoryForm(): FormGroup {
    return this._formBuilder.group(this.category);
  }

  saveCategory() {
    const data = this.formGroup.getRawValue();
    this._categoryCotroller.updateUsingPOST(data.id, data.name, data.description, null).subscribe(result => {
      console.log("category has been saved!")
      this._router.navigateByUrl('/tabs/tabs/(category:category)');
    }, error => {
      console.log(error);
      this._router.navigateByUrl('/login');
    });
  }


}
