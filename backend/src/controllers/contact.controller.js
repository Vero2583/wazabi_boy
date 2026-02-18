import { getAllContact, createContact, getContactByData, updateContactByData, deleteByData } from "../models/contact.model.js";
import {contactSchema} from "../validations/contact.validation.js"


// récuperer le contact

export const getContact = async (req, res) => {
    try {
       
        const contact = await getContact();
        res.json(contact)

    } catch (error) {
        console.error("Erreur de la recuperation du contact dans le model", error.message)
        res.status(500).json({message: "erreur serveur lors de la recuperation du contact"})
    }
}

// creation du contact

export const create = async (req, res) => {
    try {
        
        const {name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel} = req.body
        const avatar = req.file ? req.file.filename : null
        
        // validation du contact
        
        const {error} = contactSchema.validate({name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel})
        if (error) {
            return res.status(400).json({message: error.details[0].message})
        }

        await createContact({name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel})
        res.status(201).json({message: "contact crée avec succés"})

    } catch (error) {
        console.error("erreur lors de la creation des annonces dans model", error.message)
        res.stattus(500).json({message: "erreur serveur lors de la creation du contact"})
    }
}

// recuperer un contact par son id 

export const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);

    if (!contact) {
      return res.status(400).json({ message: "Aucun contact trouvé " });
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

export const updateContactById = async (req, res) => {
  try {
    
    const { id } = req.params;
    const { name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel } = req.body;

    if (!name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel) {
      return res.status(400).json({ message: "aucun contact trouvé " });
    }

    const { error } = contactSchema.validate({ name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const affectRows = await updateContactById( id, name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel);

    if (affectRows) {
      return res.status(404).json({ message: "Aucun contact trouvé " });
    }

    res.json({ message: "contact mise a jour avec success  ", name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel });
  } catch (error) {
    console.error(
      "Erreur lors de la recuperation du contact dans le model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la creation du contact ",
    });
  }
};

// Suppprimer une categorie

export const deleteById = async (req, res) => {
  try {

    const { id } = req.params;
    const affectRows = await deleteById(id);


    if (affectRows) {
      return res.status(404).json({ message: "aucun contact trouvé " });
    }


    res.json({ message: "contact supprimé " });



  } catch (error) {
    console.error(
      "Erreur lors de la recuperation du contact dans model ",
      error.message,
    );
    res.status(500).json({
      message: "erreur serveur lors de la suppression du contact ",
    });
  }
};
