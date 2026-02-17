import db from "../config/db"

// recuperation de toute la table contact

export const getAllContact = async () => {
    try {
    
        const [rows] = await db.query("SELECT * FROM contact");
        return rows;
    
    } catch (error) {
        console.error("erreur lors de la récupération des categories", error.message);
       throw error; 
    }

    
}

// créer le contact

export const createContact = async (data) => {
    try {
        
        await db.query("INSERT INTO contact (avatar, name, prenom, adresse, telephonne, email, reseaux, loisirs, id_professionnel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [
            data.avatar,
            data.name,
            data.prenom,
            data.adresse,
            data.telephonne,
            data.email,
            data.reseaux,
            data.loisirs,
            data.id_professionnel

        ])


    } catch (error) {
        console.error('Erreur lors de la creation du contact:', error.message);
        throw error;
    }
}

// recuperer le contact avec son id 


export const getContactByData = async (data) => {
    try {
        const [rows] = await db.query('SELECT * FROM contact WHERE id = ?', [
            data.avatar,
            data.name,
            data.prenom,
            data.adresse,
            data.telephonne,
            data.email,
            data.reseaux,
            data.loisirs,
            data.id_professionnel
        ])      
        return rows[0];

    } catch (error) {
        console.error("erreur de la recuperation du contact", error.message);
        throw error;
    }
}
// modifier ou mettre à jour le contact avec update avec son id


export const updateContactByData = async (data) => {
try {
    const [result] = await db.query('UPDATE contact SET data = ? WHERE id = ?', [
            data.avatar,
            data.name,
            data.prenom,
            data.adresse,
            data.telephonne,
            data.email,
            data.reseaux,
            data.loisirs,
            data.id_professionnel
        ])      
        return result.affectRows;

} catch (error) {
    console.error("erreur de la mise à jour du contact", error.message);
    throw error;
}
}

// Supprimer un element du contact

export const deleteByData = async(data) => {
    try {
        const [result] = await db.query('DELETE FROM contact WHERE data = ?' , [
            data.avatar,
            data.name,
            data.prenom,
            data.adresse,
            data.telephonne,
            data.email,
            data.reseaux,
            data.loisirs,
            data.id_professionnel
        ]) 
       return result.affectRows;

    } catch (error) {
     console.error("erreur lors de la suppression des categories ", error.message);
    throw error; 
    }
}