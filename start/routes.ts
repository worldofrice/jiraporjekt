/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AdminController from '#controllers/admin_controller';
import FeedbacksController from '#controllers/feedbacks_controller';
import router from '@adonisjs/core/services/router';

router.on('/').renderInertia('home');
router.get('/feedback', [FeedbacksController, 'index']);
router.post('/feedback', [FeedbacksController, 'create']);
router.get('/adminpage', [AdminController, 'index']); 