import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { CoreService } from 'src/app/services/core.service';

interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  
  form: FormGroup;
  options = this.settings.getOptions();
  apps: apps[] = [

    {
      id: 5,
      img: '/assets/images/svgs/icon-dd-mobile.svg',
      title: 'Calculadora',
      subtitle: 'Fórmula estándar',
      link: '/calculator',
    },

  ];

  constructor(
    private settings: CoreService,
    private scroller: ViewportScroller,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private contactService: ContactService
  ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm()
  {
    this.form = this.fb.group({
      fullName: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    });
  }

  gotoDemos() {
    this.scroller.scrollToAnchor('demos');
  }

  submit()
  {
    this.contactService.sendMessage(this.form.value).subscribe((data: Contact) => {
      this._snackBar.open('Mensaje enviado correctamente', 'INFO', {duration: 2000});
      this.reset();
    });
  }

  reset()
  {
    this.form.reset();
    this.form.markAsUntouched();
  }

  get f() {
    return this.form.controls;
  }
}
