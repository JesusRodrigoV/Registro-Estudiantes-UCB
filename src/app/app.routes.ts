import { Routes } from "@angular/router";
import { FormRegistroComponent } from "./src/form-registro";
import { HomeComponent } from "./src/home";
import { StudentsComponent } from "./src/students";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: "register", component: FormRegistroComponent },
	{ path: "students", component: StudentsComponent },
];
