const QuestionCategory = require("../model/questionCatagory");


const questionCategory = {
 getAllQuestionCategories : async (req, res) => {
  try {
    const questionCategories = await QuestionCategory.find();
    res.json(questionCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

 getOneQuestionCategory : async (req, res) => {
  try {
    const questionCategory = await QuestionCategory.findById(req.params.id);
    res.json(questionCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  },
 

 createQuestionCategory : async (req, res) => {
  const questionCategory = new QuestionCategory({
    questionCategoryID: req.body.questionCategoryID,
    categoryName: req.body.categoryName,
  });

  try {
    const newQuestionCategory = await questionCategory.save();
    res.status(201).json(newQuestionCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
},

updateQuestionCategory : async (req, res) => {
  try {
    const updatedQuestionCategory = await QuestionCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedQuestionCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

 deleteQuestionCategory : async (req, res) => {
  try {
    await QuestionCategory.findByIdAndDelete(req.params.id);
    res.json({ message: "Question category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
}


module.exports = questionCategory