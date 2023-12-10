// const Category = require("../model/category");

// const categoryController = {
//   createCategory: async (req, res) => {
//     try {
//       const newCategory = await Category.create(req.body);
//       res.status(201).json({ success: true, data: newCategory });
//     } catch (error) {
//       console.log(error.message);
//       res.status(500).json({ success: false, error: error.message });
//     }
//   },

//   getAllCategory: async (req, res) => {
//     try {
//       const categories = await Category.find();
//       res.status(200).json(categories);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },

//   getCategoryById: async (req, res) => {
//     const categoryId = req.params.id;

//     try {
//       const category = await Category.findById(categoryId);
//       if (category) {
//         res.status(200).json(category);
//       } else {
//         res.status(404).json({ error: "Category not found" });
//       }
//     } catch (error) {
//       console.error("Error fetching category by ID:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },

//   updateCategoryById: async (req, res) => {
//     const categoryId = req.params.id;
//     const { categoryName } = req.body;

//     try {
//       const updatedCategory = await Category.findByIdAndUpdate(
//         categoryId,
//         { categoryName },
//         { new: true }
//       );

//       if (updatedCategory) {
//         res.status(200).json(updatedCategory);
//       } else {
//         res.status(404).json({ error: "Category not found" });
//       }
//     } catch (error) {
//       console.error("Error updating category:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },

//   deleteCategoryById: async (req, res) => {
//     const categoryId = req.params.id;

//     try {
//       const deletedCategory = await Category.findByIdAndDelete(categoryId);

//       if (deletedCategory) {
//         res.status(200).json({ message: "Category deleted successfully" });
//       } else {
//         res.status(404).json({ error: "Category not found" });
//       }
//     } catch (error) {
//       console.error("Error deleting category:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   },
// };

// module.exports = categoryController;



// module.exports = categoryController;
