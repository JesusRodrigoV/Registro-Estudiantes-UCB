import { Component } from "@angular/core";
import { Button } from "../../models/button.model";
import { ButtonComponent } from "./button";

@Component({
	selector: "app-header",
	imports: [ButtonComponent],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.scss",
})
export class HeaderComponent {
	protected buttons: Array<Button> = [
		{
			text: "Inicio",
			route: "/home",
		},
		{
			text: "Registro de estudiantes",
			route: "/students",
		},
	];
}
