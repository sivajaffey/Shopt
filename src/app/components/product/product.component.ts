import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { TextsService } from 'src/app/services/texts.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = new Array();
  productList:product[] = [];
  displayedColumns: string[] = ['title', 'description', 'instock', 'delete'];
  productForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('',Validators.required),
    instock: new FormControl<number>(0, Validators.required),
    // image: new FormControl('', Validators.required),
  });
  constructor(private common: CommonService, private text: TextsService) {}
  ngOnInit(): void {
      this.getProducts();
  }
  addProduct() {
    if (this.productForm.valid) {
        let arr:any = this.common.getLocal('products');
        if (Number(this.productForm.value.instock) < 1) {
          this.common.snackBar(this.text.config.errors.productstkerror);
        }  else {
          if (arr != null) {
            this.products = JSON.parse(arr);
            this.products.push(this.productForm.value);
            this.common.setLocal('products',this.products);
          } else {
            this.products.push(this.productForm.value);
          }
          this.productForm.reset();
          this.common.snackBar(this.text.config.errors.productsuccess);
          this.getProducts();
        }
    } else {
      this.common.snackBar(this.text.config.errors.producterror);
    }
  }
  getProducts() {
    let arr:any= this.common.getLocal('products');
    arr = (arr == null) ? [] : JSON.parse(arr);
    this.productList=(arr.length >0) ? arr : [];
  }
  deleteProduct(product:any) {
    let index = this.productList.indexOf(product);
    this.productList.splice(index,1);
    this.common.setLocal('products',this.productList);
    this.getProducts()
  }
  // setImage(e:any) {
  //   let file = e.target.files[0];
  //   console.log(file);
  // }
}
interface Form {
  title: String;
  description: String;
  instock: Number;
}
interface product {
  title:string,
  description:string,
  instock:number
}
