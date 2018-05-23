import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  auth: service('auth'),
  beforeModel() {
    const auth = get(this, 'auth');

    auth
      .handleAuthentication() // stores access_token, id_token, expires_at in localStorage
      .then(() => {
        this.transitionTo('/dashboard');
      });
  },
});