import { environment } from './../../environments/environment';
import { CategoryControllerService } from './../../@swagger/api/categoryController.service';
import { ElementRef,Component, OnInit , NgZone, ViewChild} from '@angular/core';
import { AlertController , InfiniteScroll  } from '@ionic/angular';
import { Router } from '@angular/router';
import { List } from '@ionic/angular';
import { Filter } from './../../@swagger';
import { fromEvent, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})

export class CategoryPage implements OnInit {
  apiUrl = environment.apiUrl;
  result;
  pageLength = 0;
  searchText = '';
  @ViewChild('slidingList') slidingList: List;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  @ViewChild('filter') filter: ElementRef;
  // Private
  private _unsubscribeAll: Subject<any>;
  constructor(
              private _categoryCotroller: CategoryControllerService,
              private _alertController: AlertController,
              private _router : Router,
              private _ngZone: NgZone,  
             ) 
             { 
                // Set the private defaults
                this._unsubscribeAll = new Subject();
             }

  ngOnInit() {
      this.getDataFromServer();
    // this.initSearch();
    }

    ngAfterViewInit() {
      this.initSearch();
      // this.getDataFromServer();
    }
 
    initSearch(){
      fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe(()=> {
        this.searchText = this.filter.nativeElement.value;
        this.getDataFromServer();
      })
    }

    getDataFromServer(){
      const filter: Filter = {
        page: 1,
        rowsPerPage: 7,
        searchText: this.searchText
      };
      this._categoryCotroller.getPublicCategoriesUsingPOST(filter).subscribe(result=> {
        this.result = result;
        this.pageLength = result.header.pagination.total;
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
                      this._ngZone.runOutsideAngular(() => {
                          this._ngZone.run(() => { 
                              this.ngOnInit();
                          });
                      });
                }, error => {
                    console.log(error);
                });
            }
          }
        ]
      });
      await alert.present();
      await this.slidingList.closeSlidingItems();
    }


    viewCategory(id){
        this._router.navigateByUrl('/CategoryDetail/'+id);
    }

    editCategory(id){
      this._router.navigateByUrl('/CategoryEdit/'+id);
    }


    addCategory(){
      this._router.navigateByUrl('/categories)');
    }


    loadData(event) {
      let filter = {
        page: 1,
        rowsPerPage: 1000,
        searchText: ''
      };
      this._categoryCotroller.getPublicCategoriesUsingPOST(filter).subscribe(result=> {
        this.result = result;
        setTimeout(() => {
          event.target.complete();
          if (this.result.length == 1000) {
            event.target.disabled = true;
          }
        }, 500);
      });
    }
    toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }

    doRefresh(event) {
      let filter = {
        page: 1,
        rowsPerPage: 1000,
        searchText: ''
      };
      this._categoryCotroller.getPublicCategoriesUsingPOST(filter).subscribe(result=> {
        this.result = result;
        setTimeout(() => {
          event.target.complete();
        }, 500);
      });
     
    }

}
