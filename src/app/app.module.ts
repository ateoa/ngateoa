/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Ateoa
 * @Email: zhuchao@asteria.com
 * @Date: 2022-03-23 17:52:35
 * @LastEditors: Ateoa
 * @LastEditTime: 2022-03-23 20:21:59
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,

    RoutesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
