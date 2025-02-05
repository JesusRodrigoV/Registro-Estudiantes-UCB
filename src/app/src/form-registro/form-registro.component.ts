import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Student } from "@app/models";
import {
	MatSnackBar,
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";
import { StudentsService } from "@app/services/students";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-form-registro",
	imports: [FormsModule],
	templateUrl: "./form-registro.component.html",
	styleUrl: "./form-registro.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: { duration: 5000 },
		},
	],
})
export class FormRegistroComponent {
	private _snackBar = inject(MatSnackBar);
	private studentsService = inject(StudentsService);
	newStudent: Student = {
		id: 0,
		nombre: "",
		apellidoPaterno: "",
		apellidoMaterno: "",
		fechaNacimiento: "",
		ci: "",
		direccion: "",
		numCelular: "",
		email: "",
		carrera: "",
	};

	addStudent() {
		console.log("Entre a agregar un estudiante:");
		this.studentsService.addStudent(this.newStudent).subscribe({
			next: (response) => {
				console.log("Lo agregué");
				this._snackBar.open("Estudiante registrado", "Ok", {
					panelClass: ["snackbar-success"],
				});
			},
			error: () => {
				console.log("Hay error");
				this._snackBar.open("Error al registrar estudiante", "Ok", {
					panelClass: ["snackbar-error"],
				});
			},
		});
	}
}
