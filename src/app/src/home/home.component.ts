import { NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-home",
	imports: [NgOptimizedImage],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
