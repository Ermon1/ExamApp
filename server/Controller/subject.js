const Subject = require("../model/subject");

const subjectController={

createSubject :async (req, res) => {
  try {
    const { subjectName } = req.body;
    const newSubject = new Subject({ subjectName });
    const savedSubject = await newSubject.save();
    res.json(savedSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},


 getAllSubjects : async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},


 getOneSubject : async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},
 updateSubject : async (req, res) => {
  try {
    const { subjectName } = req.body;
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      { subjectName },
      { new: true }
    );
    res.json(updatedSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

 deleteSubject : async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

}

module.exports = subjectController;
