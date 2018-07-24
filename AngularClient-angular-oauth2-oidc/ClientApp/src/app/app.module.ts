import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // HTTP_INTERCEPTORS 추가
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { CallApiComponent } from './call-api/call-api.component'; // 테스트용 Component

// angular-oauth2-oidc 관련 추가
import { OAuthModule } from 'angular-oauth2-oidc';
import { CallbackComponent } from "./Callback/callback.component";
import { TokenInterceptor } from "./services/token.interceptor";
import { HttpService } from './services/http.service';
import { AuthGuard } from './services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CallApiComponent      // 추가
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    OAuthModule.forRoot(),  // 추가
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'call-api', component: CallApiComponent }, //,  canActivate: [AuthGuard] },
    ])
  ],
  providers: [
    // 아래 모두 추가됨.
    HttpService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 아래 추가
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
