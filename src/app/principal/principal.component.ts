import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  standalone:true,
  imports: [MdbCollapseModule, RouterModule],
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
