import { Component, Input } from "@angular/core";
import { Button } from "../../../models/button.model";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-button",
	imports: [RouterLink],
	templateUrl: "./button.component.html",
	styleUrl: "./button.component.scss",
})
export class ButtonComponent {
	@Input({ required: true }) button: Button = {
		text: "",
		route: "",
	};
}
