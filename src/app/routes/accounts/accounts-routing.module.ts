/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Ateoa
 * @Email: zhuchao@asteria.com
 * @Date: 2022-03-23 18:09:36
 * @LastEditors: Ateoa
 * @LastEditTime: 2022-03-23 20:16:41
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  { path: '', component: AccountsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
