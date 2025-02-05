import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Student } from "@app/models";
import {
	MatSnackBar,
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";
import { StudentsService } from "@app/services/students";

@Component({
	selector: "app-form-registro",
	imports: [],
	templateUrl: "./form-registro.component.html",
	styleUrl: "./form-registro.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: { duration: 3000 },
		},
	],
})
export class FormRegistroComponent {
	private _snackBar = inject(MatSnackBar);
	private studentsService = inject(StudentsService);

	addStudent(student: Student) {
		this.studentsService.addStudent(student).subscribe({
			next: () => {
				this._snackBar.open("Estudiante registrado", "Ok", {
					panelClass: ["snackbar-success"],
				});
			},
			error: () => {
				this._snackBar.open("Error al registrar estudiante", "Ok", {
					panelClass: ["snackbar-error"],
				});
			},
		});
	}

	onSubmit(event: Event): void {
		event.preventDefault();
		const student: Student = {
			id: 0, // assuming id is auto-generated or not needed for creation
			nombre: (document.getElementById("nombre") as HTMLInputElement).value,
			apellidoPaterno: (
				document.getElementById("apellidoPaterno") as HTMLInputElement
			).value,
			apellidoMaterno: (
				document.getElementById("apellidoMaterno") as HTMLInputElement
			).value,
			fechaNacimiento: (
				document.getElementById("fechaNacimiento") as HTMLInputElement
			).value,
			ci: (document.getElementById("ci") as HTMLInputElement).value,
			direccion: (document.getElementById("direccion") as HTMLTextAreaElement)
				.value,
			numCelular: (document.getElementById("numCelular") as HTMLInputElement)
				.value,
			email: (document.getElementById("email") as HTMLInputElement).value,
			carrera: (document.getElementById("carrera") as HTMLInputElement).value,
		};

		this.addStudent(student);
	}
}
