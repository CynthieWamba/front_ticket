import { Component } from '@angular/core';
import { TicketAPIServiceServiceService } from '../../service/ticket-apiservice-service.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Ticket } from '../../domain/tickets';

@Component({
  selector: 'app-ticket-listing',
  templateUrl: './ticket-listing.component.html',
  styleUrl: './ticket-listing.component.css',
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService,ConfirmationService]

})
export class TicketListingComponent {


  tickets: Ticket[] = [];
  selectedTickets!: Ticket[];
  ticketDialog!: boolean;
  submitted!: boolean;
  statuses: any[] = [];
  ticket!: Ticket;

  constructor(private ticketService: TicketAPIServiceServiceService,   private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ticketService.getTickets ().subscribe((data) => {
      console.log(data);
      data.results.forEach((e, index) => {
        this.tickets.push({
          "id":         index + 1,
          "content":    e.content,
          "title":      e.title,
          "tags":       e.tags?.map(item => item.name).join(", "),
          "comments":   e.comments?.length,
          "state":      e.state,
          "assign_to":  e.assign_to?.map(item => item.name).join(", ")
        })
      })
    });
  }

  openNew() {
    this.submitted = false;
    this.ticketDialog = true;
}

deleteSelectedProducts() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected products?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.tickets = this.tickets.filter(val => !this.selectedTickets.includes(val));
            this.selectedTickets = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        }
    });
}

editProduct(product: Ticket) {
    this.ticket = {...product};
    this.ticketDialog = true;
}

deleteProduct(ticket: Ticket) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete ' + ticket.title + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.tickets = this.tickets.filter(val => val.id !== ticket.id);
            this.ticket = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
        }
    });
}

hideDialog() {
    this.ticketDialog = false;
    this.submitted = false;
}

saveProduct() {
    this.submitted = true;

    if (this.ticket.title!.trim()) {
        if (this.ticket!.id) {
            this.tickets[this.findIndexById(""+this.ticket.id)] = this.ticket;
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        }
        else {
            this.ticket.id = this.createId();
            this.tickets.push(this.ticket);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }

        this.tickets = [...this.tickets];
        this.ticketDialog = false;
        this.ticket = {};
    }
}

findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.tickets.length; i++) {
        if (""+this.tickets[i].id === id) {
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
