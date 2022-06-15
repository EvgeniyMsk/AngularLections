import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectivesCourseComponent} from "./components/directives-course/directives-course.component";
import {HttpClientComponent} from "./components/http-client/http-client.component";
import {BaseCourseComponent} from "./components/base-course/base-course.component";
import {TestComponentComponent} from "./components/test-component/test-component.component";
import {ValidatorCourseComponent} from "./components/validator-course/validator-course.component";
import {AppRoutingComponent} from "./components/app-routing/app-routing.component";
import {ShowPostComponent} from "./components/show-post/show-post.component";
import {AboutExtraComponent} from "./components/about-extra/about-extra.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'base', component: BaseCourseComponent, canActivateChild: [AuthGuard], children: [
      {path: 'extra', component: AboutExtraComponent}
    ] },
  { path: 'directives', component: DirectivesCourseComponent },
  { path: 'httpclient', component: HttpClientComponent, canActivate: [AuthGuard] },
  { path: 'test', component: TestComponentComponent },
  { path: 'validator', component: ValidatorCourseComponent },
  { path: 'route', component: AppRoutingComponent },
  { path: 'posts/:id', component: ShowPostComponent},
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
