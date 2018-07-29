import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { TestsRoutingModule } from './tests-routing.module';
import { TestComponent } from './test.component';
import { JokeService } from './joke.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    TestsRoutingModule,
    FormsModule
  ],
  declarations: [
    TestComponent
  ],
  providers: [
    JokeService
  ]
})
export class TestModule { }
