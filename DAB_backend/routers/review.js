import { Router } from "express"
import * as ReviewCtrl from "../controller/review.js"
import { authenticate, restrict } from '../auth/auth.js'

const router = Router({mergeParams: true})

router
  .route('/').
  get(ReviewCtrl.getAllReviews)
  .post(authenticate, restrict(['patient']), ReviewCtrl.createReview)

export { router }