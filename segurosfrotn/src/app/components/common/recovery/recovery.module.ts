import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryRoutingModule } from './recovery-routing.module';
import { RecoveryComponent } from './recovery.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecoveryComponent],
  imports: [
    CommonModule,
    RecoveryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RecoveryModule { }
