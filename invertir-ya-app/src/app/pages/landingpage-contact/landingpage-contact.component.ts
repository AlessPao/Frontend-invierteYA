import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-landingpage-contact',
  templateUrl: './landingpage-contact.component.html',
  styleUrls: ['./landingpage-contact.component.scss']
})
export class LandingpageContactComponent implements OnInit{
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService
  ) { }
  ngOnInit(): void {
    this.init();
  }

  init()
  {
    this.contactService.findAll().subscribe(data => {
      this.contacts = data;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.contacts = this.filter(filterValue);
  }

  filter(v: string): Contact[] {
    return this.contacts.filter((x) => x.fullName.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }

  deleteContact(id: number): void {
    const ok = confirm('¿Estás seguro que deseas eliminar el mensaje?');
    if(ok)
    {
      this.contactService.delete(id).subscribe(() => {
        this.init();
      });
    }
  }
}
