import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mortgage } from 'src/app/model/mortgage.model';
import { CoreService } from 'src/app/services/core.service';
import { MortgageService } from 'src/app/services/mortgage.service';

interface apps {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{

  cuotaMensual: number = 0;
  disabled = false;
  max = 30;
  min = 5;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 5;
  
  form: FormGroup;
  options = this.settings.getOptions();
  apps: apps[] = [

    {
      id: 5,
      img: '/assets/images/svgs/icon-dd-mobile.svg',
      title: 'Calculadora',
      subtitle: 'Fórmula estándar',
      link: '/apps/contacts',
    },

  ];

  constructor(
    private settings: CoreService,
    private fb: FormBuilder,
    private mortgageService: MortgageService
  ) { }
  ngOnInit(): void {
    this.createForm();
  }
  
  createForm()
  {
    this.form = this.fb.group({
      principal: [null, [Validators.required, Validators.min(0)]],
      annualInterest: [null, [Validators.required, Validators.min(0)]],
      period: [5, [Validators.required, Validators.min(0)]],
      cuotaInicial: [null, [Validators.required, Validators.min(0)]],
    });
  }

  submit()
  {
    let mortgage : Mortgage = new Mortgage();
    mortgage.principal = this.form.get('principal')?.value - this.form.get('cuotaInicial')?.value;
    mortgage.annualInterest = this.form.get('annualInterest')?.value;
    mortgage.period = this.form.get('period')?.value;

    this.mortgageService.mortgage(mortgage).subscribe((data: any) => {
      this.cuotaMensual = data?.body;
    });
  }

  onInputChange(event: any)
  {
    const cuotaInicial = event.target.value * 0.10;
    this.form.get('cuotaInicial')?.setValue(cuotaInicial);
  }

  get f () { return this.form.controls; }
}
