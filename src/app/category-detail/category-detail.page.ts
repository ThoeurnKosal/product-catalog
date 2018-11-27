import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';
import { AlertController } from '@ionic/angular';
import { CategoryControllerService } from './../../@swagger/api/categoryController.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
  apiUrl = environment.apiUrl;
  pageType: string;
  formGroup: FormGroup;
  category = {
    id: '',
    name: '',
    description: '',
    filename: '',
  };
  file: File;

  constructor(
    private _router : Router,
    private _route: ActivatedRoute,
    private _categoryController: CategoryControllerService,
    private _alertController: AlertController,
  )
  { 

  }

  ngOnInit() {
    this._categoryController.getCategoryUsingPOST(this._route.snapshot.params.id).subscribe(result => {
      this.category.name = result.body.name;
      this.category.filename = result.body.filename;
      this.category.description = result.body.description;
      // this.formGroup.controls['id'].setValue(this._route.snapshot.params.id);
      // this.formGroup.controls['name'].setValue(result.body.name);
    }, error => {
      console.log("error");
      this._router.navigateByUrl('/login');
    });
  }

  

}
