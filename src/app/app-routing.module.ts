import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppScannerComponent } from "./app-scanner/app-scanner.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: "scan", component: AppScannerComponent },
  { path: "", component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
