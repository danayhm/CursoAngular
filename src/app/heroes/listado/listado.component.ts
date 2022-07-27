import { Component } from '@angular/core';
//import { constants } from 'os';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe()
  {
    //this.heroes.shift()
    this.heroeBorrado = this.heroes.shift() || '';
  }

  //showHeroe(): boolean
  //{
  //  if(this.heroeBorrado != '')
  //  {
  //    return true;
  //  }
  //  else
  //  {
  //    return false;
  //  }
  //  
  //}

}
