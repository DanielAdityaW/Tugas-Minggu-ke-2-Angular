import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { GithubModule } from './github/github.module';
import { AuthModule } from './auth/auth.module';
import { DocsModule } from './docs/docs.module';
import { PicsModule } from './pics/pics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    CoreModule,
    //HomeModule,
    AdminModule,
    SharedModule,
    GithubModule,
    AuthModule,
    DocsModule,
    PicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
