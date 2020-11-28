import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { tap, filter, switchMapTo, take, map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';
import { DaffCartItemsGuardRedirectUrl } from './cart-items-guard-redirect.token';

/**
 * A routing guard that will ensure that the cart is not empty before allowing activation of a route.
 * If the cart has items in it, then `canActivate` will emit true. If not, it will emit false and redirect to a specific path.
 * The url is `/` by default but can be overridden with the {@link DaffCartItemsGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffCartItemsGuard implements CanActivate {
  constructor(
		private facade: DaffCartFacade,
		private router: Router,
		@Inject(DaffCartItemsGuardRedirectUrl) private redirectUrl: string
	) {}

  canActivate(): Observable<boolean> {
    return this.facade.resolved$.pipe(
      filter(resolved => resolved),
      switchMapTo(this.facade.isCartEmpty$),
      map(isCartEmpty => !isCartEmpty),
      take(1),
			tap(hasNonEmptyCart => {
				if (!hasNonEmptyCart) {
					this.router.navigateByUrl(this.redirectUrl)
				}
			})
		)
  }
}
