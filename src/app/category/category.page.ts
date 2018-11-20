import { environment } from './../../environments/environment';
import { CategoryControllerService } from './../../@swagger/api/categoryController.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})

export class CategoryPage implements OnInit {
  apiUrl = environment.apiUrl;
  result;
  constructor(private _categoryCotroller: CategoryControllerService,
              private _alertController: AlertController,
              private _router : Router) { }

  ngOnInit() {
    let filter = {
      page: 1,
      rowsPerPage: 100,
      searchText: ''
    };
    this._categoryCotroller.getPublicCategoriesUsingPOST(filter).subscribe(result=> {
      this.result = result;
    }, error => {
      console.log("error");
    });

    }

    async delete(id) {
      const alert = await this._alertController.create({
        header: 'Confirm!',
        message: 'Are you sure want to delete this category?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('cancel');
            }
          }, {
            text: 'Okay',
            handler: () => {
              this._categoryCotroller.deleteUsingPOST(id).subscribe(result => {
                       this._router.navigateByUrl('tabs/tabs/(category:category)');
                       console.log(result);
                    // this.ngOnInit();
                }, error => {
                    console.log(error);
                });
            }
          }
        ]
      });
      await alert.present();
    }

}
