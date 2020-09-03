import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotebookComponent } from './components/notebook/notebook.component';
import { NotebooksSectionComponent } from './components/notebooks-section/notebooks-section.component';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { NewNotesSectionComponent } from './components/new-notes-section/new-notes-section.component';
import { CreateAccountSectionComponent } from './components/create-account-section/create-account-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    NotebooksSectionComponent,
    LoginSectionComponent,
    NewNotesSectionComponent,
    CreateAccountSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
