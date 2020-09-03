import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebooksSectionComponent } from './components/notebooks-section/notebooks-section.component';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { NewNotesSectionComponent } from './components/new-notes-section/new-notes-section.component';
import { CreateAccountSectionComponent } from './components/create-account-section/create-account-section.component';

const routes: Routes = [
  {path: "login", component: LoginSectionComponent},
  {path: "notebooks", component: NotebooksSectionComponent},
  {path: "new-notes", component: NewNotesSectionComponent},
  {path: "create-account", component: CreateAccountSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
