
import { NgModule } from '@angular/core';
import { EmulatorPathPipe } from './emulator-path-pipe';
import { TimestampPipe } from './timestamp.pipe';

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [EmulatorPathPipe, TimestampPipe],
  exports: [EmulatorPathPipe, TimestampPipe]
})
export class PipesModule {}