/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FeedbacksController from '#controllers/feedbacks_controller';
import router from '@adonisjs/core/services/router';
import AdminPage from '#components/adminpage.vue';

router.on('/').renderInertia('home');
router.get('/feedback', [FeedbacksController, 'index']);
router.post('/feedback', [FeedbacksController, 'create']);
router.get('/adminpage', ({ view }) => {
    return view.render('adminpage');
});