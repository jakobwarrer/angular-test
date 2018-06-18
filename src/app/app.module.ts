import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { AdventureTimeService } from './adventure-time.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TableComponent, TableRowComponent, FilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [AdventureTimeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
