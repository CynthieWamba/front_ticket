import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketListingComponent } from './tickets/ticket-listing/ticket-listing.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserListingComponent } from './users/user-listing/user-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    UsersComponent,
    TicketsComponent,
    ProjectDetailComponent,
    ProjectListingComponent,
    TicketDetailComponent,
    TicketListingComponent,
    UserDetailComponent,
    UserListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
