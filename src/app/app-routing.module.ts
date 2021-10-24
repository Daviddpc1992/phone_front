import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { PhonesComponent } from './phones/phones.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component: PhonesComponent },
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
