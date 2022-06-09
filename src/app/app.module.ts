import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from "@angular/common/http";
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
    BaseCourseComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
