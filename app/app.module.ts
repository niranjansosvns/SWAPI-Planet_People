import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { PlanetListComponent } from './Planet/planet-list.component';
import { PlanetService } from './Planet/planet-list.service';
import { PeopleListComponent } from './People/people-list.component';
import { PeopleService } from "./People/people-list.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        PlanetListComponent,
        PeopleListComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        PlanetService,
        PeopleService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }