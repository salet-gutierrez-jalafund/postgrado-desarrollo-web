import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush // es una estrategia de optimización que permite que Angular solo verifique los cambios en el componente cuando sea necesario, en lugar de verificar todos los componentes en cada cambio de detección. solo revisa algunas cosas no todo
})
export class Navbar {}

// component -> name -> none -> advance -> inlineStyles
