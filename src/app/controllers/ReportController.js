import Treatment from '../models/Treatment';
import Military from '../models/Military';

class ReportController {
  async index(req, res) {
    const { year, month } = req.query;

    if (year === undefined || month === undefined) {
      return res.status(401).json({ error: "There's no year or month on query search" })
    }

    const Treatments = await Treatment.findAll({
      where: {
        mes_referencia: month,
        ano_referencia: year,
      },
      include: [
        {
          model: Military
        }
      ]
    });
    if (!Treatments) {
      res.status(401).json({ error: `There is no one Treatment on ${month} de ${year}` });
    }

    res.json(Treatments);

  }
}

export default new ReportController();
