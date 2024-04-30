import { Component } from '@angular/core';
import { TagsAPIServiceServiceService } from '../../service/tags-apiservice-service.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Tags } from '../../domain/tags';

@Component({
  selector: 'app-tag-listing',
  templateUrl: './tag-listing.component.html',
  styleUrl: './tag-listing.component.css',
  styles: [`
  :host ::ng-deep .p-dialog .tag-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]

})
export class TagListingComponent {


tags: Tags[] = [];
selectedTags!: Tags[];
tagDialog!: boolean;
tagCreate!: boolean;
submitted!: boolean;
status: any[] = [];
tag!: Tags;

constructor(private tagService: TagsAPIServiceServiceService,   private messageService: MessageService, private confirmationService: ConfirmationService) {

}

ngOnInit(): void {
//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//Add 'implements OnInit' to the class.

for (let i = 0; i < 6; i++) {
  this.tags.push({
    "id":         i + 1,
    "index": i+1,
    "name":   "e.name",
    "description":   "liliii",
    "tickets": 5,
    "created_at":       "OWNER",
  });
}

this.tagService.getTags ().subscribe((data) => {
data.results.forEach((e, index) => {
  this.tags.push({
    "index":         index + 1,
    "id": e.id,
    "name":       e.name,
    "description": e.description,
    "tickets":     e.tickets?.length,
    "created_at":  e.created_at
  })
})
});
}

openNew() {
this.submitted = false;
this.tag = {}
this.tagCreate = true;
}

deleteSelectedTags() {
this.confirmationService.confirm({
  message: 'Are you sure you want to delete the selected tags?',
  header: 'Confirm',
  icon: 'pi pi-exclamation-triangle',
  accept: () => {
      this.tags = this.tags.filter(val => !this.selectedTags.includes(val));
      this.selectedTags = [];
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tags Deleted', life: 3000});
  }
});
}

editTag(tag: Tags) {
this.tag = {...tag};
this.tagDialog = true;
}

deleteTag(tag: Tags) {
this.confirmationService.confirm({
  message: 'Are you sure you want to delete ' + tag.name + '?',
  header: 'Confirm',
  icon: 'pi pi-exclamation-triangle',
  accept: () => {
    this.tagService.deleteTag(""+tag.id).subscribe((data) => {
      if (data.message){
        this.tags = this.tags.filter(val => val.id !== tag.id);
        this.tag = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: data.message, life: 3000});
      }
  });
  }
});
}

hideDialog() {
this.tagDialog = false;
this.submitted = false;
}

saveTag() {
this.submitted = true;

if (this.tag.name!.trim()) {
  this.tagService.updateTag(""+this.tag.id,  {"name": this.tag.name,"description": this.tag.description, }).subscribe(
    (data) => {
      this.tag = {
        "index":         this.tag.index,
        "id": data.id,
        "name":       data.name,
        "description": data.description,
        "tickets":     data.tickets?.length,
        "created_at":  data.created_at
      };
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tags mise à jour avec succès', life: 3000});
    }
  )

  this.tags = [...this.tags];
  this.tagDialog = false;
  this.tag = {};
  this.ngOnInit();
}
}

createTag() {
  this.submitted = true;
  if (this.tag.name!.trim()) {
    this.tagService.createTag(this.tag).subscribe((data) => {
      this.messageService.add({severity:'success', summary: 'Successful', detail: data.message, life: 3000});
    });

    this.tags = [...this.tags];
    this.tagCreate = false;
    this.tag = {};
    this.ngOnInit();

  }
  }

findIndexById(id: string): number {
let index = -1;
for (let i = 0; i < this.tags.length; i++) {
  if (""+this.tags[i].id === id) {
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
