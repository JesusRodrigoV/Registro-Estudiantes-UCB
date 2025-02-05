import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Student } from "@app/models";
import { StudentsService } from "@app/services/students";
import { Observable } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
	selector: "app-students",
	imports: [AsyncPipe, MatProgressSpinnerModule],
	templateUrl: "./students.component.html",
	styleUrl: "./students.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent {
	private studentsService = inject(StudentsService);

	protected students$: Observable<Student[]> =
		this.studentsService.getStudents();

	protected headerKeys: String[] = [
		"Nombre",
		"Apellido Paterno",
		"Apellido Materno",
		"Fecha de Nacimiento",
		"CI",
		"Dirección",
		"Número de Celular",
		"Correo Institucional",
		"Carrera",
	];
}
