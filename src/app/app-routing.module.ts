import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/theme/base/base.component';

const routes: Routes = [
  {
    path: 'term-condition',
    loadChildren: () =>
      import('./views/pages/terms/terms.module').then(m => m.TermsModule)
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'journal',
        children: [
          {
            path: ':id',
            loadChildren: () =>
              import('./views/pages/journal/focus/focus.module').then(
                m => m.FocusModule
              )
          },
          {
            path: '',
            loadChildren: () =>
              import('./views/pages/journal/journal.module').then(
                m => m.JournalModule
              )
          }
        ]
      },
      {
        path: 'conferences',
        loadChildren: () =>
          import('./views/pages/conferences/conferences.module').then(
            m => m.ConferencesModule
          )
      },
      {
        path: 'books',
        children: [
          {
            path: ':id',
            loadChildren: () =>
              import('./views/pages/books/focus/focus.module').then(
                m => m.FocusModule
              )
          },
          {
            path: '',
            loadChildren: () =>
              import('./views/pages/books/books.module').then(
                m => m.BooksModule
              )
          }
        ]
      },
      {
        path: 'pay',
        loadChildren: () =>
          import('./views/pages/pay/pay.module').then(m => m.PayModule)
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./views/pages/faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./views/pages/contact/contact.module').then(
            m => m.ContactModule
          )
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./views/pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./views/pages/search/search.module').then(m => m.SearchModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('./views/pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          )
      },
      {
        path: '**',
        redirectTo: '/'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
