import Router from 'koa-router';
import setText from './cgi/set-text';
import getTrigger from './cgi/get-trigger';
// For help see https://github.com/ZijianHe/koa-router#api-reference
export default (router: Router) => {
  router.post('/cgi-bin/set-text', setText);
  router.get('/cgi-bin/get-trigger', getTrigger);
};
