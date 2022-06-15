import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { MultByPipe } from './pipes/mult-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SwitchComponent } from './switch/switch.component';
import { HttpClientComponent } from './components/http-client/http-client.component';
import { ValidatorCourseComponent } from './components/validator-course/validator-course.component';
import { PipesCourseComponent } from './components/pipes-course/pipes-course.component';
import { DirectivesCourseComponent } from './components/directives-course/directives-course.component';
import { BaseCourseComponent } from './components/base-course/base-course.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AuthInterceptorService} from "./auth-interceptor/auth-interceptor.service";
import { AppRoutingComponent } from './components/app-routing/app-routing.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    FilterPipe,
    TestComponentComponent,
    SwitchComponent,
    HttpClientComponent,
    ValidatorCourseComponent,
    PipesCourseComponent,
    DirectivesCourseComponent,
    BaseCourseComponent,
    AppRoutingComponent,
    ShowPostComponent,
    AboutExtraComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
