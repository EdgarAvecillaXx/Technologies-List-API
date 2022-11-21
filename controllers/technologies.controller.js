const { Technology } = require('../models');

function TechnologiesController() {}

TechnologiesController.getAll = async (req, res) => {
  try {
    let technologies = await Technology.find();
    technologies = technologies.map(technology => {
      technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
      return technology;
    });
    res.send({ data: technologies });
  } catch (e) {
    console.log(e.message);
    res.status(500).send({ error: ['Internal server error', e.message] });
  }
};

TechnologiesController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    let technology = await Technology.findById(id);
    technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
    res.send({ data: technology });
  } catch (e) {
    console.log(e.message);
    res.status(400).send({ error: `ID ${id} is invalid or not exists` });
  }
};

TechnologiesController.search = async (req, res) => {
  const { name } = req.params;
  try {
    let technologies = await Technology.find({ name: { $regex: new RegExp(name, 'i') } });
    technologies = technologies.map(technology => {
      technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
      return technology;
    });
    res.send({ data: technologies });
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = TechnologiesController;
