import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Phone } from '../interface/phone';
import { ServiceService } from '../service/service.service';

declare var Swal;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario : FormGroup;
  arrPhone : Phone[];

  constructor(private service: ServiceService, private router: Router
  ) {

    this.formulario = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [
      ]),
      manufacturer: new FormControl('', [
      ]),
      description: new FormControl('', [
      ]),
      color: new FormControl('', [
      ]),
      price: new FormControl('', [
      ]),
      imageFile: new FormControl('', [
      ]),
      screen: new FormControl('', [
      ]),
      processor: new FormControl('', [
      ]),
      ram: new FormControl('', [
      ]),
    })
  }

  ngOnInit(): void {

  }
 async onSubmit(){
   const newPhone = await this.service.createPhone(this.formulario.value);
    if(newPhone){
      this.formulario.value;
      
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Your phone has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/phones']);
    }
  }

}
