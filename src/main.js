import './style.css';
import { db } from './firebaseConfig.js';
import { doc, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'; // ✅ Import UUID generator

document.getElementById('studentForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const roll = document.getElementById('roll').value;
  const name = document.getElementById('name').value;
  const studentClass = document.getElementById('class').value;
  const phoneNo = document.getElementById('phoneNo').value;

  const uuid = uuidv4(); 

  try {

    await setDoc(doc(db, 'Student Data', 'Name Record', studentClass, uuid), {
      roll,
      name,
      phoneNo,
      id: uuid, // optional: store the UUID in the doc
    });

    const msg = document.getElementById('message');
    msg.textContent = 'Student data submitted successfully!';
    msg.style.color = 'green';
    document.getElementById('studentForm').reset();
  } catch (error) {
    const msg = document.getElementById('message');
    msg.textContent = `Error: ${error.message}`;
    msg.style.color = 'red';
  }
});