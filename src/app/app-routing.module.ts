import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MonitorComponent } from './views/monitor/monitor.component';
import { PcgamerComponent } from './views/pcgamer/pcgamer.component';
import { ProdutoComponent } from './views/produto/produto.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path:"pcgamer" , component: PcgamerComponent},
  { path: "monitor", component: MonitorComponent },
  { path: "produto", component: ProdutoComponent},
  { path: "login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
