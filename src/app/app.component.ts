import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-proyecto-ia';

  nroPreguntas:number = 0;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  fileName: string = '';

  selectedFile: File | null = null;


  onUploadClick() {
    this.fileInput.nativeElement.click();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    (this.fileInput.nativeElement.closest('.upload-area') as HTMLElement).style.borderColor = '#00aaff';
  }

  onDragLeave() {
    (this.fileInput.nativeElement.closest('.upload-area') as HTMLElement).style.borderColor = '#ccc';
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    (this.fileInput.nativeElement.closest('.upload-area') as HTMLElement).style.borderColor = '#ccc';
    const files = event.dataTransfer!.files;
    if (files.length > 0) {
      this.fileName = files[0].name;
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files!.length > 0) {
      this.fileName = input.files![0].name;
    }
  }

  questions = [
    {
      id: 1,
      text: '¿Qué es una red bayesiana?',
      options: [
        { text: 'Una estructura que sólo modela variables independientes.', correct: false },
        { text: 'Un grafo dirigido acíclico que representa relaciones de dependencia condicional entre variables.', correct: true },
        { text: 'Una secuencia de datos organizados en un modelo lineal.', correct: false },
        { text: 'Ninguna de las anteriores.', correct: false }
      ],
      points: 1,
      selectedOption: null
    },
    {
      id: 2,
      text: '¿Qué representa un nodo en una red bayesiana?',
      options: [
        { text: 'Una variable o atributo aleatorio.', correct: true },
        { text: 'Un parámetro estadístico.', correct: false },
        { text: 'Una relación de causalidad determinista.', correct: false },
        { text: 'Una constante matemática.', correct: false }
      ],
      points: 1,
      selectedOption: null
    }
  ];

  onOptionSelected(question:any, selectedOption:any) {
    question.options.forEach((option: { selected: boolean; }) => {
      option.selected = false;
    });
    selectedOption.selected = true;
    question.selectedOption = selectedOption;
  }

  uploadFile() {
    if (this.selectedFile) {
      // Aquí puedes implementar la lógica para subir el archivo al servidor.
      console.log(`Archivo seleccionado: ${this.selectedFile.name}`);
      // Por ejemplo, puedes usar un servicio de Angular para hacer la subida del archivo.
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }


  async indicarCantPreguntas() {
    const { value: cantidad } = await Swal.fire({
      title: "Ingresa la cantidad de preguntas",
      input: "number"
    });
    if (cantidad) {
      this.nroPreguntas = cantidad;
    }
  }

  

}
