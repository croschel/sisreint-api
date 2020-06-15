import * as yup from 'yup';
import Commander from '../models/Commander';

class CommanderController {
  async show(req, res) {
    const commander = await Commander.findOne();

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
    const commander = await Commander.findOne();

    const updatedCommander = await commander.update(req.body);

    return res.json(updatedCommander);
  }
}

export default new CommanderController();
