import { Component, OnInit } from '@angular/core';
import { ProjectAPIServiceServiceService } from '../../service/project-apiservice-service.service';
import { Project } from '../../domain/project';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-project-listing',
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.css',
  styles: [`
        :host ::ng-deep .p-dialog .project-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})


export class ProjectListingComponent {
  projects: Project[] = [];
  selectedProjects!: Project[];
  projectDialog!: boolean;
  submitted!: boolean;
  statuses: any[] = [];
  project!: Project;

  constructor(private projectService: ProjectAPIServiceServiceService,  private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    for (let i = 0; i < 5; i++) {
        this.projects.push({
          "id":         i + 1,
          "name":   "e.Loica",
          "nombre_ticket":   10,
        });
      }

    this.projectService.getProjects().subscribe((data) => {

      data.results.forEach((e, index) => {
        this.projects.push({"index": index + 1,"id": e.id, "name": e.name, "nombre_ticket": e.ticketsList.length})
      })
    });
  }


    openNew() {
        this.submitted = false;
        this.projectDialog = true;
    }

    deleteSelectedProjects() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected projects?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.projects = this.projects.filter(val => !this.selectedProjects.includes(val));
                this.selectedProjects = [];
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Projects Deleted', life: 3000});
            }
        });
    }

    editProject(project: Project) {
        this.project = {...project};
        this.projectDialog = true;
        this.projectService.getProjectInfo(""+project.id).subscribe((data) => {
          console.log(data);
      });
    }

    deleteProject(project: Project) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + project.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
              this.projectService.deleteProject(""+project.id).subscribe((data) => {
                if (data.message){
                  this.projects = this.projects.filter(val => val.id !== project.id);
                  this.project = {};
                  this.messageService.add({severity:'success', summary: 'Successful', detail: data.message, life: 3000});
                }
            });
            }
        });
    }

    hideDialog() {
        this.projectDialog = false;
        this.submitted = false;
    }

    saveProject() {
        this.submitted = true;

        if (this.project.name!.trim()) {
            if (this.project!.id) {
                this.projects[this.findIndexById(""+this.project.id)] = this.project;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Updated', life: 3000});
            }
            else {
                this.project.id = this.createId();
                this.projects.push(this.project);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Project Created', life: 3000});
            }

            this.projects = [...this.projects];
            this.projectDialog = false;
            this.project = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.projects.length; i++) {
            if (""+this.projects[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): number {
        let id = 1;
        /*var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 5; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        */
        return id;
    }
}
