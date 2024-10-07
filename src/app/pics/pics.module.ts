import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicsRoutingModule } from './pics-routing.module';
import { PicComponent } from './pages/pic/pic.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PicComponent,
    CreateComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    PicsRoutingModule,
    SharedModule
  ]
})
export class PicsModule { }
