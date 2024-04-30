import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListingComponent } from './projects/project-listing/project-listing.component';
import { UsersComponent } from './users/users.component';
import { TicketListingComponent } from './tickets/ticket-listing/ticket-listing.component';
import { ProjectsComponent } from './projects/projects.component';
import { TagsComponent } from './tags/tags.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TagsListingComponent } from './tags/tags-listing/tags-listing.component';
import { UserListingComponent } from './users/user-listing/user-listing.component';

const routes: Routes = [
  {
    path: "project",
    component: ProjectsComponent
  },
  {
    path: "tickets",
    component: TicketListingComponent
  },
  {
    path: "tags",
    component: TagsListingComponent
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
