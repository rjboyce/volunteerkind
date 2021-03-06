import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { EventComponent } from './list/event.component';
import { EventDetailComponent } from './detail/event-detail.component';
import { EventUpdateComponent } from './update/event-update.component';
import { EventDeleteDialogComponent } from './delete/event-delete-dialog.component';
import { EventRoutingModule } from './route/event-routing.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  imports: [SharedModule, EventRoutingModule, NgxMaterialTimepickerModule],
  declarations: [EventComponent, EventDetailComponent, EventUpdateComponent, EventDeleteDialogComponent],
  entryComponents: [EventDeleteDialogComponent],
})
export class EventModule {}
