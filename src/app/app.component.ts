import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./src/header";
import { FooterComponent } from "./src/footer";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "Registro-estudiantes";
}
