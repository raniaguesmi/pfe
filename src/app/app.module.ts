import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { LayoutComponent } from './home/layout/layout.component';
import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SpecialiteComponent } from './home/specialite/specialite.component';
import { GererSecretaireComponent } from './home/gerer-secretaire/gerer-secretaire.component';
import { ProfileMedecinComponent } from './home/profile-medecin/profile-medecin.component';
import { ModifierMedecinComponent } from './home/modifier-medecin/modifier-medecin.component';
import { ListeRdvComponent } from './home/liste-rdv/liste-rdv.component';
import { EmailComponent } from './home/email/email.component';
import { ConsulterRdvComponent } from './home/consulter-rdv/consulter-rdv.component';
import { PatientComponent } from './home/patient/patient.component';
import { ListePatientsComponent } from './home/liste-patients/liste-patients.component';
import { ReclamationsComponent } from './home/reclamations/reclamations.component'; // for FullCalendar!

import { QRCodeModule } from 'angular2-qrcode';
import { ForgePasswordComponent } from './forge-password/forge-password.component';
import { ChangerMotdpasseComponent } from './home/changer-motdpasse/changer-motdpasse.component';
// import { Pipe, PipeTransform } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    AcceuilComponent,
    SignInComponent,
    SpecialiteComponent,
    GererSecretaireComponent,
    ProfileMedecinComponent,
    ModifierMedecinComponent,
    ListeRdvComponent,
    EmailComponent,
    ConsulterRdvComponent,
    PatientComponent,
    ListePatientsComponent,
    ReclamationsComponent,
    ForgePasswordComponent,
    ChangerMotdpasseComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // pour les requetes http vest obligatoir
    ReactiveFormsModule, // importitha ater jai utilisé formbuilder wel form groupe eli houma des fonctionalité mawjoudine fl module hethe
    FormsModule,
    QRCodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
