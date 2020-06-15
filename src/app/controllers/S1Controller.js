import * as yup from 'yup';
import S1Boss from '../models/S1Boss';

class S1Controller {
  async show(req, res) {
    const commander = await S1Boss.findOne();

    return res.json(commander);
  };

  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string(),
      posto_grad: yup.string(),
      funcao: yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: "Check your data and try again" })
    }
    const commander = await S1Boss.findOne();

    const updatedCommander = await commander.update(req.body);

    return res.json(updatedCommander);
  }
}

export default new S1Controller();
