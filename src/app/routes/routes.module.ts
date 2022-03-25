/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Ateoa
 * @Email: zhuchao@asteria.com
 * @Date: 2022-03-23 17:55:14
 * @LastEditors: Ateoa
 * @LastEditTime: 2022-03-23 21:07:39
 */
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { RoutesRoutingModule } from './routes-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    SharedModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
