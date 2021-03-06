import * as Yup from 'yup';
import Treatment from '../models/Treatment';
import Military from '../models/Military';

class TreatmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      qtd_cons_marcada: Yup.number().required(),
      qtd_cons_realizada: Yup.number().required(),
      exame_solicitado: Yup.number().required(),
      exame_agendado: Yup.number().required(),
      exame_realizado: Yup.number().required(),
      laudo_solicitado: Yup.number().required(),
      laudo_confeccionado: Yup.number().required(),
      sessao_fisioterapia: Yup.number().required(),
      ultima_apres: Yup.string().required(),
      prox_apres: Yup.string().required(),
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Validation error" });
    }
    const military = await Military.findByPk(req.params.military_id);
    if (!military) {
      return res.status(400).json({ error: "Military does not exists" });
    }

    const treatment = await Treatment.create(req.body);
    await treatment.update({ military_id: req.params.military_id })


    return res.json(treatment);
  }

  async show(req, res) {
    const { military_id } = req.params;

    const military = await Military.findByPk(military_id);
    if (!military) {
      return res.status(400).json({ error: "Military does not exists" });
    }

    const treatments = await Treatment.findAll({
      where: {
        military_id,
      },
      order: ['ano_referencia'],
      include: [
        {
          model: Military,
        }
      ]
    });
    if (!treatments) {
      return res.status(400).json({ error: "There's no one treatment for this military" })
    }
    return res.json(treatments);

  }

  async index(req, res) {

    const treatments = await Treatment.findAll({
      order: ['ano_referencia'],
    });
    if (!treatments) {
      return res.status(400).json({ error: "There's no one treatment" })
    }
    return res.json(treatments);
  }


  async delete(req, res) {
    const { id } = req.params;
    const treatment = await Treatment.findByPk(id);

    if (!treatment) {
      return res.status(400).json({ error: "Treatment does not exists" });
    }
    await treatment.destroy();

    return res.json({ message: "Treatment was Deleted" });


  }
}

export default new TreatmentController();
