import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsLocalComponent } from './details-local/details-local.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { ListadoLocalComponent } from './listado-local/listado-local.component';
import { PhonesComponent } from './phones/phones.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: ListadoLocalComponent },
  { path: 'phones', pathMatch: 'full', component: PhonesComponent },
  { path: 'phones/:id', component: DetailsLocalComponent },
  { path: 'phone/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: FormComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  
  exports: [RouterModule]
})
export class AppRoutingModule {

}
