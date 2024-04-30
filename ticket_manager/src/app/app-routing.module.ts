import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { UsersComponent } from './users/users.component';
import { TagsComponent } from './tags/tags.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "tags",
    component: TagsComponent
  },
  {
    path: "tickets",
    component: TicketsComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
