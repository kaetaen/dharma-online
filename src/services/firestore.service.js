import { firestoreDB } from "../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore"; 

class FirestoreService {
    constructor () {
        this.db = firestoreDB
        this.collection = "practice"
    }

    async createPractice(content) {
        try {
            await addDoc(collection(this.db, this.collection), content);
            console.log("Practice added")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async getPractices() {
        try {      
            const queryResult = await getDocs(collection(this.db, this.collection));
            return queryResult

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

const firestoreService = new FirestoreService()

export default firestoreService