import { toast } from "react-hot-toast";
import { db } from "../firebaseConfig/firebase";
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export const getCollectionDocuments = async (collectionName) => {
  const datos = await getDocs(collection(db, collectionName));

  let resulQuery = datos.docs.map((item) => {
    return item.data();
  });
  return resulQuery;
};


export const updateData = async (collectionName, id, data) => {
  try {
    await setDoc(doc(db, collectionName, id), data);
  } catch (error) {
    toast.error("No se guardo la informacion", error)
  }

};

export const deleteData = async (collectionData, id) => {
  try {
    await deleteDoc(doc(db, collectionData, id));
  } catch (e) {
    console.log("error bd eliminando informacion", e);
  }
};


