import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../core/services/guard.service';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [{ path: 'pic', component: ListComponent, canActivate: [GuardService] },
{
  path: 'pic/new',
  component: CreateComponent,
  canActivate: [GuardService],
},
{
  path: 'pic/detail/:id',
  component: DetailComponent,
  canActivate: [GuardService],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicsRoutingModule { }
