import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Student } from "@app/models/student.model";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class StudentsService {
	private mainUrl = "http:localhost:4000/api";
	private studentsUrl = this.mainUrl + "/students";

	http = inject(HttpClient);

	getStudents(): Observable<Student[]> {
		return this.http.get<Student[]>(this.studentsUrl);
	}

	addStudent(student: Student): Observable<Student> {
		return this.http.post<Student>(this.studentsUrl, student);
	}
}
