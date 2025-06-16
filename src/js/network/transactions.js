// import axios from 'axios';
// import Config from '../config/config';
import { auth, db } from '../utils/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import supabase from '../config/supabaseClient';
// import ApiEndpoint from '../config/api-endpoint';

const Transactions = {
  async getAll() {
    const transactionsRef = collection(db, 'transactions');
    const transactionsQuery = query(transactionsRef, where('userId', '==', auth.currentUser.uid));
    const querySnapshot = await getDocs(transactionsQuery);
    const transactions = [];
    querySnapshot.forEach((item) => {
      transactions.push({
        id: item.id,
        ...item.data(),
      });
    });
    return transactions;
  },
  async getById(id) {
    const transactionRef = doc(db, 'transactions', id);
    const docSnapshot = await getDoc(transactionRef);
    return docSnapshot.data();
  },

  async store({ name, date, amount, type, description, evidence }) {
    const transactionsRef = collection(db, 'transactions');
    const data = { name, date, amount, type, description, evidence };
    return await addDoc(transactionsRef, {
      ...data,
      userId: auth.currentUser.uid,
    });
  },

    async update({ id, name, date, amount, type, description, evidence }) {
    const transactionRef = doc(db, 'transactions', id);
    const data = { name, date, amount, type, description, evidence };

      if (!data.evidence) delete data.evidence;

    return await updateDoc(transactionRef, data);
  },
  async destroy(id) {
    const transactionRef = doc(db, 'transactions', id);
    return await deleteDoc(transactionRef);
  },

  async storeEvidence(file) {
  const filePath = `transactions/${auth.currentUser.uid}/${Date.now()}-${file.name}`;
  console.log('Uploading to:', filePath); // Tambahkan ini untuk debug

  const { error } = await supabase.storage.from('money-tracker-app').upload(filePath, file);

  if (error) {
    console.error('Upload error:', error); // Tambahkan ini untuk cek errornya
    throw error;
  }

  return filePath;
},

  async getEvidenceURL(fileFullPath) {
  const { data, error } = supabase.storage.from('money-tracker-app').getPublicUrl(fileFullPath);

  if (error) throw error;
  return data.publicUrl;
},

  async destroyEvidence(fileFullPath) {
  const { error } = await supabase.storage.from('money-tracker-app').remove([fileFullPath]);

  if (error) throw error;
  return true;
}


};

export default Transactions;
