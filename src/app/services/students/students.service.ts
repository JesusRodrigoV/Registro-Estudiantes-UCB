import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "@app/models/student.model";

@Injectable({
	providedIn: "root",
})
export class StudentsService {
	private mainUrl = "http://localhost:4000/";
	private studentsUrl = `${this.mainUrl}/students`;

	http = inject(HttpClient);

	private httpOptions = {
		headers: new HttpHeaders({ "Content-Type": "application/json" }),
	};

	getStudents(): Observable<Student[]> {
		return this.http.get<Student[]>(this.studentsUrl);
	}

	getStudentByCi(ci_est: string): Observable<Student> {
		return this.http.get<Student>(`${this.studentsUrl}/ci/${ci_est}`);
	}

	addStudent(student: Student): Observable<Student> {
		return this.http.post<Student>(this.studentsUrl, student, this.httpOptions);
	}

	updateStudent(ci_est: string, student: Partial<Student>): Observable<{ message: string }> {
		return this.http.put<{ message: string }>(`${this.studentsUrl}/${ci_est}`, student, this.httpOptions);
	}

	// Eliminar estudiante
	deleteStudent(ci_est: string): Observable<{ message: string }> {
		return this.http.delete<{ message: string }>(`${this.studentsUrl}/${ci_est}`);
	}
}
