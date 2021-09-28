import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { HomeComponent } from "./home/home.component";

export const appRoute: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
  ]