import { Component } from '@angular/core';
import { UserAPIServiceServiceService } from '../../service/user-apiservice-service.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Ticket, User } from '../../domain/user';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrl: './user-listing.component.css',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]

})
export class UserListingComponent {


users: User[] = [];
selectedUsers!: User[];
userDialog!: boolean;
submitted!: boolean;
statuses: any[] = [];
user!: User;

constructor(private userService: UserAPIServiceServiceService, private messageService: MessageService, private confirmationService: ConfirmationService) {

}

ngOnInit(): void {
//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//Add 'implements OnInit' to the class.
this.userService.getUsers().subscribe((data) => {
console.log(data);
data.results.forEach((e, index) => {
  this.users.push({
    "id":         index + 1,
    "name":   e.name,
    "comments":   e.comments?.length,
    "role":       e.role,
    
  })
})
});
}

openNew() {
this.submitted = false;
this.userDialog = true;
}

deleteSelectedProducts() {
this.confirmationService.confirm({
  message: 'Are you sure you want to delete the selected products?',
  header: 'Confirm',
  icon: 'pi pi-exclamation-triangle',
  accept: () => {
      this.users = this.users.filter(val => !this.selectedUsers.includes(val));
      this.selectedUsers = [];
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
  }
});
}

editProduct(product: User) {
this.user = {...product};
this.userDialog = true;
}

deleteProduct(user: User) {
this.confirmationService.confirm({
  message: 'Are you sure you want to delete ' + user.name + '?',
  header: 'Confirm',
  icon: 'pi pi-exclamation-triangle',
  accept: () => {
      this.users = this.users.filter(val => val.id !== user.id);
      this.user = {};
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
  }
});
}

hideDialog() {
this.userDialog = false;
this.submitted = false;
}

saveProduct() {
this.submitted = true;

if (this.user.name!.trim()) {
  if (this.user!.id) {
      this.users[this.findIndexById(""+this.user.id)] = this.user;
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
  }
  else {
      this.user.id = this.createId();
      this.users.push(this.user);
      this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
  }

  this.users = [...this.users];
  this.userDialog = false;
  this.user = {};
}
}

findIndexById(id: string): number {
let index = -1;
for (let i = 0; i < this.users.length; i++) {
  if (""+this.users[i].id === id) {
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

