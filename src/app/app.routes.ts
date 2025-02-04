import { Routes } from "@angular/router";
import { FormRegistroComponent } from "./src/form-registro";
import { HomeComponent } from "./src/home";

export const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "home", component: HomeComponent },
	{ path: "students", component: FormRegistroComponent },
];
