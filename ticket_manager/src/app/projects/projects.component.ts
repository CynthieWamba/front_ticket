import { Component } from '@angular/core';
import { ProjectAPIServiceServiceService } from '../service/project-apiservice-service.service';
import { Project } from '../domain/project';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  providers: [MessageService,ConfirmationService]
})
export class ProjectsComponent {
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
    this.projectService.getProjects().subscribe((data) => {
      console.log(data)
    });
  }


    openNew() {
        this.submitted = false;
        this.projectDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.projects = this.projects.filter(val => !this.selectedProjects.includes(val));
                this.selectedProjects = [];
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
            }
        });
    }

    editProduct(product: Project) {
        this.project = {...product};
        this.projectDialog = true;
    }

    deleteProduct(project: Project) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + project.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.projects = this.projects.filter(val => val.id !== project.id);
                this.project = {};
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }
        });
    }

    hideDialog() {
        this.projectDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.project.name!.trim()) {
            if (this.project!.id) {
                this.projects[this.findIndexById(""+this.project.id)] = this.project;
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
            }
            else {
                this.project.id = this.createId();
                this.projects.push(this.project);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
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
