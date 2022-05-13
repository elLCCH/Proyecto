import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrativosComponent } from './admins/administrativos/administrativos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PdfViewerModule}  from  'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {NgxPaginationModule} from 'ngx-pagination';
import { VisorPDFComponent } from './visor-pdf/visor-pdf.component';
import { PDFMakerComponent } from './pdfmaker/pdfmaker.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ContentComponent } from './components/shared/content/content.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SettingComponent } from './components/shared/setting/setting.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactosComponent } from './contactos/contactos.component';
import { ReporteComponent } from './reporte/reporte.component';
import { InicioEComponent } from './inicio-e/inicio-e.component';
import { Modulo1Component } from './modulo1/modulo1.component';
import { Modulo2Component } from './modulo2/modulo2.component';
import { Modulo3Component } from './modulo3/modulo3.component';
import { Modulo4Component } from './modulo4/modulo4.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrativosComponent,
    VisorPDFComponent,
    PDFMakerComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettingComponent,
    PruebasComponent,
    LoginComponent,
    InicioComponent,
    ContactosComponent,
    ReporteComponent,
    InicioEComponent,
    Modulo1Component,
    Modulo2Component,
    Modulo3Component,
    Modulo4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
