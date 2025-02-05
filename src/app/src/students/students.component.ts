import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Student } from "@app/models";
import { StudentsService } from "@app/services/students";
import { Observable } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {
	MatSnackBar,
	MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from "@angular/material/snack-bar";

@Component({
	selector: "app-students",
	imports: [AsyncPipe, MatProgressSpinnerModule],
	templateUrl: "./students.component.html",
	styleUrl: "./students.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
			useValue: { duration: 3000 },
		},
	],
})
export class StudentsComponent {
	private studentsService = inject(StudentsService);

	private _snackBar = inject(MatSnackBar);

	protected students$: Observable<Student[]> =
		this.studentsService.getStudents();

	protected headerKeys: String[] = [
		"Nombre",
		"Apellido",
		"Carrera",
		"Fecha Nacimiento",
		"Correo Electronico",
	];

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
}
