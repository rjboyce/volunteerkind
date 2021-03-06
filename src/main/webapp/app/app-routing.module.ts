import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { errorRoute } from './layouts/error/error.route';
import { navbarRoute } from './layouts/navbar/navbar.route';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { Authority } from 'app/config/authority.constants';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { AboutComponent } from './about/about.component';
import { MemberComponent } from './member/member.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          data: {
            authorities: [Authority.ADMIN],
          },
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
        },
        {
          path: 'event-signon',
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./event-signin/event-signin.module').then(m => m.EventSignInModule),
        },
        {
          path: 'about',
          component: AboutComponent,
        },
        {
          path: 'member',
          component: MemberComponent,
        },
        {
          path: 'userevents',
          canActivate: [UserRouteAccessService],
          loadChildren: () => import('./userevents/userevents.module').then(m => m.UserEventsModule),
        },
        ...LAYOUT_ROUTES,
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
