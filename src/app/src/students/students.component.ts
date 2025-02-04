import { AsyncPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Student } from "@app/models";
import { StudentsService } from "@app/services/students";
import { Observable } from "rxjs";

@Component({
	selector: "app-students",
	imports: [AsyncPipe],
	templateUrl: "./students.component.html",
	styleUrl: "./students.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentsComponent {
	private studentsService = inject(StudentsService);
	students$: Observable<Student[]> = this.studentsService.getStudents();
}
