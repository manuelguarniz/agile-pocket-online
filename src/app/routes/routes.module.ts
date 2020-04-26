import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { routes } from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class RoutesModule {}
