/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Ateoa
 * @Email: zhuchao@asteria.com
 * @Date: 2022-03-23 18:08:51
 * @LastEditors: Ateoa
 * @LastEditTime: 2022-03-23 20:33:35
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
