import express, {Request, Response} from 'express'
import FinancialRecordModel from '../schema/financial-record'

const router = express.Router()

router.get('/getByUserID/:userId', async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId
    const records = await FinancialRecordModel.find({userId: userId})
    if (records.length === 0) {
      return res.status(404).send("No records found for this user.")
    }
    res.status(200).send(records) 
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const newRecord = new FinancialRecordModel(req.body)
    const savedRecord = await newRecord.save()
    res.status(200).send(savedRecord) 
  } catch (err) {
    res.status(500).send(err)
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const newRecordBody = req.body
    const record = await FinancialRecordModel.findByIdAndUpdate(
      req.params.id,
      newRecordBody,
      {new: true}
    )
    if (!record) return res.status(404).send();
    res.status(200).send(record) 
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const record = await FinancialRecordModel.findByIdAndDelete(req.params.id)
    if (!record) return res.status(404).send();
    res.status(200).send(record) 
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router