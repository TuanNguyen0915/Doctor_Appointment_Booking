import { Router } from "express"
import * as DoctorCtrl from "../controller/doctor.js"
import { authenticate, restrict } from "../auth/auth.js"
import { router as reviewRouter } from "./review.js"

const router = Router()
// nested route
router.use('/:doctorId/reviews', reviewRouter)

router.get('/', DoctorCtrl.getAllDoctors)
router.get('/:doctorId', DoctorCtrl.showDoctor)
router.put('/:doctorId', authenticate, restrict(['doctor']), DoctorCtrl.updateDoctor)
router.delete('/:doctorId', authenticate, restrict(['doctor']), DoctorCtrl.deleteDoctor)

router.get('/profile/me', authenticate, restrict(['doctor']), DoctorCtrl.getDoctorProfile)

export { router }