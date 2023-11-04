import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './pages';

const routes: Routes = [
  {   path: 'posts',  component: PostsListComponent,
        children :[
          { path: 'list', component: PostsListComponent},
        ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}