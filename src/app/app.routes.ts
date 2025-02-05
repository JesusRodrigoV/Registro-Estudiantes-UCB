import { Routes } from "@angular/router";
import { FormRegistroComponent } from "./src/form-registro";
import { HomeComponent } from "./src/home";
import { StudentsComponent } from "./src/students";

export const routes: Routes = [
	{ path: "", component: HomeComponent, title: "Inicio" },
	{ path: "home", component: HomeComponent, title: "Inicio" },
	{
		path: "register",
		component: FormRegistroComponent,
		title: "Registro Estudiantes",
	},
	{ path: "students", component: StudentsComponent, title: "Estudiantes" },
];
