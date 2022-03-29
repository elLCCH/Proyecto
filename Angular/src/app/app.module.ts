import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';
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
    ContactosComponent
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
