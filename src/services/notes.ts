import axios from "axios"
import { ICreateNote, IGetNote, IUpdateNote } from "../data/models";

export const fetchNotes  = async () => {
    let notes : IGetNote[] = []
    try {
        const response = await axios.get("https://localhost:7157/Note")
        notes = response.data
    } catch (e) {
        console.error(e)
    }
    return notes
}

export const createNote = async (note:ICreateNote) =>{
    const response = await axios.post("https://localhost:7157/Note", note)
    return response.status
}

export const deleteNote = async (id:string) =>{
    const response = await axios.delete("https://localhost:7157/Note", {params : {id : id}})
    return response.status
}

export const updateNote = async (note:IUpdateNote) =>{
    const response = await axios.patch("https://localhost:7157/Note", note)
    return response.status
}