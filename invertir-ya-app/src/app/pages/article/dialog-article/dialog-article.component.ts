import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Article } from 'src/app/model/article.model';


@Component({
  selector: 'app-dialog-article',
  templateUrl: './dialog-article.component.html',
  styleUrls: ['./dialog-article.component.scss']
})
export class DialogArticleComponent implements OnInit{

  htmlContent1 = '';

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '9rem',
    maxHeight: '20rem',
    placeholder: 'Ingresa el texto aquí...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };

  form: UntypedFormGroup;
  local_data: any;
  action: string;

  constructor(
    public dialogRef: MatDialogRef<DialogArticleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Article,
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,

  ) { 
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  ngOnInit(): void {
    this.createForm();
    if (this.action === 'Editar') {
      this.form.patchValue(this.local_data);
    }
  }

  createForm()
  {
    this.form = this.fb.group({
      id: [null],
      title: [null],
      type: [null],
      content: [null],
      imgUrl: [null]
    });
  }

  onChange(event: any) {
    console.log('changed');
  }

  onBlur(event: any) {
    console.log('blur ' + event);
  }

  operate(){
    if(this.form.valid){
      this.dialogRef.close({event: this.action, data: this.form.value});
    }else{
      this.snackBar.open('Complete los campos requeridos', 'Aceptar', {
        duration: 2000,
      });
    }
  }
}
