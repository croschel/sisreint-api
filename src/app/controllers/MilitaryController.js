import * as Yup from 'yup';
import Military from '../models/Military';

class MilitaryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      identidade: Yup.string().required(),
      cpf: Yup.string().required(),
      nome: Yup.string().required(),
      om: Yup.string().required(),
      posto_grad: Yup.string().required(),
      arma: Yup.string().required(),
      ex_militar: Yup.boolean().required(),
      data_nascimento: Yup.string().required(),
      data_praca: Yup.string().required(),
      historico: Yup.string().required(),
      processo: Yup.number().required(),
      situacao: Yup.string().required(),
      tipo_data_publicacao: Yup.string().required(),
      consequencia: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation Error" });
    }

    const military = await Military.create(req.body);


    return res.json(military);
  }

  async index(req, res) {
    const militaries = await Military.findAll();
    return res.json(militaries);
  }

  async delete(req, res) {

    const military = await Military.findByPk(req.params.id);
    if (!military) {
      return res.status(401).json({ error: "This Military does not exists" });
    }

    await military.destroy();

    return res.json({ message: "Military was deleted" })

  }
}

export default new MilitaryController();
