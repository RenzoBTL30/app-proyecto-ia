import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceIAService } from './service-ia.service';

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
  PDF:any;
  habilidad:string = 'Comprende el modelo de redes bayesianas';

  preguntas:any[]=[];

  /*
  preguntas = [
    {
        "numero": 1,
        "pregunta": "¿Qué método se puede utilizar para estimar la tendencia en un modelo de series de tiempo?",
        "opciones": [
            {
                "opcion": "Regresión exponencial",
                "num_opcion": 1
            },
            {
                "opcion": "Promedio móvil",
                "num_opcion": 2
            },
            {
                "opcion": "Regresión logística",
                "num_opcion": 3
            },
            {
                "opcion": "Regresión cuadrática",
                "num_opcion": 4
            }
        ],
        "respuesta": "2"
    },
    {
        "numero": 2,
        "pregunta": "¿Qué ayuda a determinar el orden de las partes de promedio móvil y autorregresivas en un modelo de series de tiempo?",
        "opciones": [
            {
                "opcion": "Funciones de correlación lineal",
                "num_opcion": 1
            },
            {
                "opcion": "Funciones de autocorrelación total y parcial",
                "num_opcion": 2
            },
            {
                "opcion": "Funciones de correlación cruzada",
                "num_opcion": 3
            },
            {
                "opcion": "Funciones de desviación estándar",
                "num_opcion": 4
            }
        ],
        "respuesta": "2"
    },
    {
        "numero": 3,
        "pregunta": "¿Qué indicador se recomienda utilizar para evaluar si un modelo de series de tiempo es bueno o no?",
        "opciones": [
            {
                "opcion": "Coeficiente de determinación",
                "num_opcion": 1
            },
            {
                "opcion": "Coeficiente de correlación",
                "num_opcion": 2
            },
            {
                "opcion": "Coeficiente de variación",
                "num_opcion": 3
            },
            {
                "opcion": "Coeficiente de regresión",
                "num_opcion": 4
            }
        ],
        "respuesta": "1"
    },
    {
        "numero": 4,
        "pregunta": "¿Qué se recomienda descartar al construir un modelo de series de tiempo?",
        "opciones": [
            {
                "opcion": "Coeficientes significativos",
                "num_opcion": 1
            },
            {
                "opcion": "Estructuras que arrojen residuos como ruido blanco",
                "num_opcion": 2
            },
            {
                "opcion": "Modelos evaluados según el Criterio de Información de Schwarz",
                "num_opcion": 3
            },
            {
                "opcion": "Modelos con ajuste cercano a la unidad",
                "num_opcion": 4
            }
        ],
        "respuesta": "2"
    },
    {
        "numero": 5,
        "pregunta": "¿Qué se define como el origen de los pronósticos en un modelo de series de tiempo?",
        "opciones": [
            {
                "opcion": "El primer dato del conjunto de evaluación",
                "num_opcion": 1
            },
            {
                "opcion": "El índice correspondiente al último dato del conjunto de entrenamiento",
                "num_opcion": 2
            },
            {
                "opcion": "El tamaño del conjunto de entrenamiento",
                "num_opcion": 3
            },
            {
                "opcion": "El último dato del conjunto de evaluación",
                "num_opcion": 4
            }
        ],
        "respuesta": "2"
    },
    {
        "numero": 6,
        "pregunta": "¿Qué es importante considerar al seleccionar el conjunto de entrenamiento en un modelo de series de tiempo?",
        "opciones": [
            {
                "opcion": "Tamaño representativo",
                "num_opcion": 1
            },
            {
                "opcion": "Conjunto homogéneo",
                "num_opcion": 2
            },
            {
                "opcion": "Conjunto con residuos nulos",
                "num_opcion": 3
            },
            {
                "opcion": "Conjunto con coeficientes significativos",
                "num_opcion": 4
            }
        ],
        "respuesta": "1"
    },
    {
        "numero": 7,
        "pregunta": "¿Qué metodología de pronóstico puede demandar conjuntos de entrenamiento más o menos numerosos?",
        "opciones": [
            {
                "opcion": "Regresión exponencial",
                "num_opcion": 1
            },
            {
                "opcion": "Modelo ARIMA",
                "num_opcion": 2
            },
            {
                "opcion": "Regresión logística",
                "num_opcion": 3
            },
            {
                "opcion": "Promedio móvil",
                "num_opcion": 4
            }
        ],
        "respuesta": "2"
    },
    {
        "numero": 8,
        "pregunta": "¿Qué tipo de modelos se pueden utilizar en análisis de series de tiempo además de la regresión lineal?",
        "opciones": [
            {
                "opcion": "Regresión exponencial",
                "num_opcion": 1
            },
            {
                "opcion": "Regresión logística",
                "num_opcion": 2
            },
            {
                "opcion": "Regresión cuadrática",
                "num_opcion": 3
            },
            {
                "opcion": "Todas las anteriores",
                "num_opcion": 4
            }
        ],
        "respuesta": "4"
    },
    {
        "numero": 9,
        "pregunta": "¿Qué ayuda a suavizar los efectos ajenos a la tendencia en un análisis de series de tiempo?",
        "opciones": [
            {
                "opcion": "Modelos ARIMA",
                "num_opcion": 1
            },
            {
                "opcion": "Promedio móvil",
                "num_opcion": 2
            },
            {
                "opcion": "Modelos de regresión logística",
                "num_opcion": 3
            },
            {
                "opcion": "Funciones de correlación lineal",
                "num_opcion": 4
            }
        ],
        "respuesta": "2"
    },
    {
        "numero": 10,
        "pregunta": "¿Qué es importante para asegurar que un modelo de series de tiempo pueda captar diversos patrones de comportamiento?",
        "opciones": [
            {
                "opcion": "Conjunto de evaluación diverso",
                "num_opcion": 1
            },
            {
                "opcion": "Residuos que se comporten como ruido blanco",
                "num_opcion": 2
            },
            {
                "opcion": "Tamaño del conjunto de entrenamiento",
                "num_opcion": 3
            },
            {
                "opcion": "Componentes del conjunto de entrenamiento diversos",
                "num_opcion": 4
            }
        ],
        "respuesta": "4"
    }
]
    */

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  fileName: string = '';

  selectedFile: File | null = null;

  constructor (private serviceIAService: ServiceIAService) {
  }

  ngOnInit() {

  }


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

  generarPreguntas() {
    this.serviceIAService.postData(this.PDF, this.nroPreguntas, this.habilidad).subscribe({
      next: (data) => {
        this.preguntas = data;
        console.log(this.preguntas);
      },
      error: (e) => { }
    })
  }

  convertirStringToNumber(respuesta:string) {
    return Number(respuesta);
  }
  

}
