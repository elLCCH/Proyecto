import { ContactosComponent } from './contactos/contactos.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { PDFMakerComponent } from './pdfmaker/pdfmaker.component';
import { VisorPDFComponent } from './visor-pdf/visor-pdf.component';
import { AdministrativosComponent } from './admins/administrativos/administrativos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioEComponent } from './inicio-e/inicio-e.component';
import { Modulo1Component } from './modulo1/modulo1.component';
import { Modulo2Component } from './modulo2/modulo2.component';
import { Modulo3Component } from './modulo3/modulo3.component';
import { Modulo4Component } from './modulo4/modulo4.component';
import { PrerrequisitoComponent } from './prerrequisito/prerrequisito.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { SemestreComponent } from './semestre/semestre.component';
import { PlanEComponent } from './plan-e/plan-e.component';


const routes: Routes = [
  {path: 'administrativos', component:AdministrativosComponent},
  {path: 'PDF', component:VisorPDFComponent},
  {path: 'PDFMaker', component:PDFMakerComponent},
  {path: 'Pruebas', component:PruebasComponent},
  {path: 'login', component:LoginComponent},
  {path: 'InicioE', component:InicioEComponent},
  {path: 'Contactos', component:ContactosComponent},
  {path: 'modulo1', component:Modulo1Component},
  {path: 'modulo2', component:Modulo2Component},
  {path: 'modulo3', component:Modulo3Component},
  {path: 'modulo4', component:Modulo4Component},
  {path: 'prerrequisito', component:PrerrequisitoComponent},
  {path: 'estudiante', component:EstudianteComponent},
  {path: 'semestre', component:SemestreComponent},
  {path: 'plan-e', component:PlanEComponent},
  {path: '**', component:InicioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
