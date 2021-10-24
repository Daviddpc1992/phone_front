import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phone } from '../interface/phone';
import { ServiceService } from '../service/service.service';

declare var Swal;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formulario: FormGroup;
  phone: Phone;
  form: any;
  files: any;
  constructor(private service: ServiceService, private router: Router, private activateRoute: ActivatedRoute
  ) {
  }
  
  ngOnInit(): void {
    let sub = this.activateRoute.params.subscribe(async (params: Params) => {
      let Id = params['id'];
      this.phone = await this.service.getByIdPhone(Id);
console.log(this.phone)
      this.formulario = new FormGroup({
        name: new FormControl(this.phone[0].name, []),
        manufacturer: new FormControl(this.phone[0].manufacturer, []),
        description: new FormControl(this.phone[0].description, []),
        color: new FormControl(this.phone[0].color, []),
        price: new FormControl(this.phone[0].price, []),
        screen: new FormControl(this.phone[0].screen, []),
        processor: new FormControl(this.phone[0].processor, []),
        ram: new FormControl(this.phone[0].ram, []),
        imageFile: new FormControl('', []),
      });
    })
  }
  async onSubmit(){
    const fd = new FormData();
    fd.append('name', this.formulario.value.name);
    fd.append('manufacturer', this.formulario.value.manufacturer);
    fd.append('description', this.formulario.value.description);
    fd.append('color', this.formulario.value.color);
    fd.append('price', this.formulario.value.price);
    fd.append('screen', this.formulario.value.screen);
    fd.append('processor', this.formulario.value.processor);
    fd.append('ram', this.formulario.value.ram);
    fd.append('imageFile', this.files);
    const response = await this.service.update(this.phone[0].id, fd);
    if (response['affectedRows'] === 1) {
      this.router.navigate(['/']);
    }

}
}
    