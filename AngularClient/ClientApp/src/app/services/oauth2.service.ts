//import { Injectable, Component, OnInit, OnDestroy, Inject } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Rx';
//import { Subscription } from 'rxjs/Subscription';

//import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';


//@Injectable()
//export class OAuthService2 implements OnInit, OnDestroy {

//  constructor(private oauthService: OAuthService) {
//    this.oauthService.redirectUri = window.location.origin;
//    this.oauthService.clientId = '{client-id}';
//    this.oauthService.scope = 'openid profile email';
//    this.oauthService.issuer = 'https://{yourOktaDomain}.com/oauth2/default';
//    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
//    // Load Discovery Document and then try to login the user
//    this.oauthService.loadDiscoveryDocument().then(() => {
//      this.oauthService.tryLogin();
//    });
//  }


//  ngOnInit() {
//    //this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
//    //  (isAuthorized: boolean) => {
//    //    this.isAuthorized = isAuthorized;
//    //  });
//  }

//  ngOnDestroy(): void {
//    //this.isAuthorizedSubscription.unsubscribe();
//    //this.oidcSecurityService.onModuleSetup.unsubscribe();
//  }

//  loginWithPassword() {
//    //this.oktaAuthWrapper.login(this.username, this.password)
//    //  .catch(err => console.error('error logging in', err));
//  }

//  login() {
//    this.oauthService.initImplicitFlow();
//  }

//  logout() {
//    this.oauthService.logOut();
//  }
//}

