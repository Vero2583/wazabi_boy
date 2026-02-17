import db from "../config/db"

// recuperation de toute la table professionnel

export const getAllProf = async () => {
    try {
    
        const [rows] = await db.query("SELECT * FROM professionnel");
        return rows;
    
    } catch (error) {
        console.error("erreur lors de la récupération professionnel", error.message);
       throw error; 
    }

    
}

// créer le contact

export const createProf = async (data) => {
    try {
        
        await db.query("INSERT INTO contact (titre, competences, experiences_professionnelles, diplomes, langues) VALUES (?, ?, ?, ?, ?)", [
            data.titre,
            data.competences,
            data.experiences_professionnelles,
            data.diplomes,
            data.langues
        ])


    } catch (error) {
        console.error('Erreur lors de la creation du contact:', error.message);
        throw error;
    }
}

// recuperer le contact avec son id 


export const getProfByData = async (data) => {
    try {
        const [rows] = await db.query('SELECT * FROM professionnel WHERE id = ?', [
            data.titre,
            data.competences,
            data.experiences_professionnelles,
            data.diplomes,
            data.langues
        ])      
        return rows[0];

    } catch (error) {
        console.error("erreur de la recuperation du contact", error.message);
        throw error;
    }
}
// modifier ou mettre à jour le contact avec update avec son id


export const updateProfByData = async (data) => {
try {
    const [result] = await db.query('UPDATE professionnel SET data = ? WHERE id = ?', [
            data.titre,
            data.competences,
            data.experiences_professionnelles,
            data.diplomes,
            data.langues
        ])      
        return result.affectRows;

} catch (error) {
    console.error("erreur de la mise à jour du contact", error.message);
    throw error;
}
}

// Supprimer un element du contact

export const deleteByData = async (data) => {
    try {
        const [result] = await db.query('DELETE FROM professionnel WHERE data = ?' , [
            data.titre,
            data.competences,
            data.experiences_professionnelles,
            data.diplomes,
            data.langues
        ]) 
       return result.affectRows;

    } catch (error) {
     console.error("erreur lors de la suppression des categories ", error.message);
    throw error; 
    }
}



