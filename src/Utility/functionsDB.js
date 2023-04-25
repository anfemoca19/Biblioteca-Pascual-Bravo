import db from "../firebaseConfig/firebase"
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

export const updateDatas = async (collectionName, id, data) => {
  console.log(db)
return db.collection("books").doc("0").set({ nombre_autor: "Andres" });
}



export const updateData = async (collectionName, id, data) => {
  await setDoc(doc(db, collectionName, id), data);
};

export const updateOnlySomeFields = async (collectionName, id, data) => {
  try {
    await updateDoc(doc(db, collectionName, id), data)
  } catch (e) {
    console.log("error bd actualizando informacion", e);
    alert("error bd", e);
    return
  }
};

export const deleteData = async (collectionData, id) => {
  try {
    await deleteDoc(doc(db, collectionData, id));
  } catch (e) {
    console.log("error bd eliminando informacion", e);
  }
};

export const getCollectionWhere = async (
  collectionData,
  fieldName,
  textToFind
) => {
  try {
    const q = query(
      collection(db, collectionData),
      where(fieldName, "==", textToFind)
    );

    const querySnapshot = await getDocs(q);

    let resulQuery = querySnapshot.docs.map((item) => {
      return item.data();
    });

    return resulQuery;
  } catch (error) {
    console.log(error);
    return [];
  }
};
