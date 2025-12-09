import Character from "../models/character.js";

export const addCharacter = async (req, res) => {

  if (!req.body) {
    res.status(400).json({ Message: "Body required" });
    return;
  }
  try {
    const {
      name,
      description,
      personalityPrompt,
      creator,
      category,
      isPublic,
    } = req.body;

    if (!name || !personalityPrompt || !creator) {
      return res.status(400).json({
        message: "name, personalityPrompt and creator are required.",
      });
    }
    let avatar = null;
    if (req.file) {
      avatar = `/uploads/${req.file.filename}`;
    }

    await Character.create({
      name,
      avatar,
      description,
      personalityPrompt,
      creator,
      category,
      isPublic,
    });
    res.status(200).json({ Message: "Character Info added Successfully." });
  } catch (error) {
    console.error("Error creating character:", error.message);

    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getAllCharacter = async (req, res) => {
  try {
    const characters = await Character.find({}).sort({ createdAt: -1 });

    if (characters.length === 0) {
      return res.status(404).json({ message: "No characters found" });
    }

    return res.status(200).json({
      message: "Characters fetched successfully",
      count: characters.length,
      characters,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
export const deleteCharacter = async (req, res) => {
  try {
    const id = req.params.id;

    // Count total characters (optional check)
    const count = await Character.countDocuments();
    if (count === 0) {
      return res.json({ Message: "No User Found" });
    }

    // Check if character exists
    const existingCharacter = await Character.findById(id);
    if (!existingCharacter) {
      return res.json({ Message: "Character Not Found" });
    }

    // Delete character
    const character = await Character.findByIdAndDelete(id);

    res.status(200).json({
      Message: "Character Deleted Successfully.",
      deleted: character,
    });
  } catch (error) {
    res.status(500).json({ error: "Deletion failed" });
  }
};
