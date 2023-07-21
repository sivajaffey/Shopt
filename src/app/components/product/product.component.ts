import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('',Validators.required),
    instock: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
  addProduct() {
    console.log(this.productForm.value)
  }
  setImage(e:any) {
    let file = e.target.files[0];
    console.log(file);
  }
}
