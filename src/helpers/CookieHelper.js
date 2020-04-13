import { withCookies } from 'react-cookie';

export default withCookies({
  setEhfmCookie: (cookies) => cookies.set('eh-fm', 1),
  getEhfmCookie: (cookies) => cookies.get('eh-fm')
});
