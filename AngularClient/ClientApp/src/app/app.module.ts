import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
// 아래 추가됨.
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ConfigurationService } from "./configuration/configuration.service";
// 아래 추가
import { AuthModule, OidcSecurityService } from 'angular-auth-oidc-client';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthService } from './services/auth.service';
import { CallApiComponent } from './call-api/call-api.component';



import { HttpService } from './services-oauth2/http.service';
import { AuthGuard } from './services-oauth2/auth.guard';
import { TokenInterceptor } from "./services-oauth2/token.interceptor"; 

// 아래 추가
const appInitializerFn = (appConfig: ConfigurationService) => {
  return () => {
    return appConfig.loadConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CallApiComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AuthModule.forRoot(), // 추가
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'call-api', component: CallApiComponent }, //,  canActivate: [AuthGuard] },
      { path: 'unauthorized', component: UnauthorizedComponent } // 추가
    ])
  ],
  providers: [ // 모두 추가됨.
    { provide: 'ORIGIN_URL', useFactory: getBaseUrl }, 
    AuthService,
    //HttpService,
    //AuthGuard,
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: TokenInterceptor,
    //  multi: true,
    //},

    //OidcSecurityService,
    //OAuthService, JwksValidationHandler ,
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 아래 추가
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
