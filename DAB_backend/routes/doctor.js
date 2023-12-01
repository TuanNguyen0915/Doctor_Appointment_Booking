import { Router } from "express"
import * as doctorCtrl from "../controllers/doctorController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"
import { router as reviewRouter } from './review.js'

const router = Router()

router.get('/:doctorId', doctorCtrl.showDoctor)
router.get('/', doctorCtrl.getAllDoctors)
router.put('/:doctorId', authenticate, restrict(['doctor']), doctorCtrl.updateDoctor)
router.delete('/:doctorId', authenticate, restrict(['doctor']), doctorCtrl.deleteDoctor)


// nested router
router.use('/:doctorId/reviews', reviewRouter)

export { router }