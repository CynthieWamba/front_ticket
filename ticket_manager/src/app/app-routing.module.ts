import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { UsersComponent } from './users/users.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketListingComponent } from './tickets/ticket-listing/ticket-listing.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserListingComponent } from './users/user-listing/user-listing.component';
import { TagListingComponent } from './tags/tag-listing/tag-listing.component';

const routes: Routes = [
  {
    path: "projects",
    component: ProjectListingComponent
  },
  {
    path: "tickets",
    component: TicketListingComponent
  },
  {
    path: "tags",
    component: TagListingComponent
  },
  {
    path: "users",
    component: UserListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
