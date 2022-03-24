import { LoginComponent } from './login/login.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PDFMakerComponent } from './pdfmaker/pdfmaker.component';
import { VisorPDFComponent } from './visor-pdf/visor-pdf.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'administrativos', component:AdministrativosComponent},
  {path: 'PDF', component:VisorPDFComponent},
  {path: 'PDFMaker', component:PDFMakerComponent},
  {path: 'Pruebas', component:PruebasComponent},
  {path: 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
