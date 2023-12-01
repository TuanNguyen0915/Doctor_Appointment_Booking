import { Router } from 'express'
import * as reviewCtrl from '../controllers/reviewController.js'
import { authenticate, restrict } from '../auth/verifyToken.js'

const router = Router({mergeParams: true})

router.route('/')
  .get(reviewCtrl.getAllReviews)
  .post(authenticate, restrict(['patient']), reviewCtrl.createReview)

export { router }