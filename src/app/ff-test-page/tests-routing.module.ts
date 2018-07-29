import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { TestComponent } from './test.component';

const routes: Routes = [
  Route.withShell([
    { path: 'test', component: TestComponent, data: { title: extract('Test') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TestsRoutingModule { }
