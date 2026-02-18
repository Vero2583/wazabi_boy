import { getAllProf, createProf, getProfByData, updateProfByData, deleteByData  } from "../models/professionnel.model.js";
import { profSchema } from "../validations/professionnel.validation.js"


// récuperer le professionnel

export const getProf = async (req, res) => {
    try {
       
        const professionnel = await getProf();
        res.json(professionnel)

    } catch (error) {
        console.error("erreur de la recuperation du professionnel dans le model", error.message)
        res.status(500).json({message: "erreur serveur lors de la recuperation du professionnel"})
    }
}

// creation du professionnel

export const create = async (req, res) => {
    try {
        
        const {titre, competences, experiences_professionnelles, diplomes, langues} = req.body
        
        
        // validation du professionnel
        
        const {error} = profSchema.validate({titre, competences, experiences_professionnelles, diplomes, langues})
        if (error) {
            return res.status(400).json({message: error.details[0].message})
        }

        await createContact({titre, competences, experiences_professionnelles, diplomes, langues})
        res.status(201).json({message: "professionnel crée avec succés"})

    } catch (error) {
        console.error("erreur lors de la creation du professionnel dans model", error.message)
        res.stattus(500).json({message: "erreur serveur lors de la creation du contact"})
    }
}

// recuperer un contact par son id 

export const getProfById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getProfById(id);

    if (!contact) {
      return res.status(400).json({ message: "aucun contact trouvé " });
    }
    res.json(category);
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation du contact dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la creation du contact ",
    });
  }
};

// Modifier le contact

export const updateProfById = async (req, res) => {
  try {
    
    const { id } = req.params;
    const { titre, competences, experiences_professionnelles, diplomes, langues} = req.body;

    if (!titre, competences, experiences_professionnelles, diplomes, langues) {
      return res.status(400).json({ message: "aucun professionnel trouvé " });
    }

    const { error } = contactSchema.validate({ titre, competences, experiences_professionnelles, diplomes, langues });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const affectRows = await updateProfById(id, titre, competences, experiences_professionnelles, diplomes, langues);

    if (affectRows) {
      return res.status(404).json({ message: "aucun professionnel trouvé " });
    }

    res.json({ message: "professionnel mise a jour avec success  ", titre, competences, experiences_professionnelles, diplomes, langues });
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation du professionnel dans le model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la creation du professionnel ",
    });
  }
};

// Suppprimer une categorie

export const deleteById = async (req, res) => {
  try {

    const { id } = req.params;
    const affectRows = await deleteByData(data);


    if (affectRows) {
      return res.status(404).json({ message: "aucun professionnel trouvé " });
    }


    res.json({ message: "professionnel supprimé " });



  } catch (error) {
    console.error(
      "erreur lors de la recuperation du professionnel dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la suppression du professionnel ",
    });
  }
};
