// Your web app's Firebase configuration
const firebaseConfig = {

};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);
const db = firebase.firestore();

// Form submission handler
document.getElementById('studentForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const roll = document.getElementById('roll').value;
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const phoneNo = document.getElementById('phoneNo').value;

    try {
        // Create the document path: Students/[Class name]/[Roll Number]
        await db.collection('Data').doc('Students').collection(studentClass).doc(roll).set({
            roll: roll,
            name: name,
            phoneNo: phoneNo
        });
        

        document.getElementById('message').textContent = 'Student data submitted successfully!';
        document.getElementById('message').style.color = 'green';

        // Reset the form
        document.getElementById('studentForm').reset();
    } catch (error) {
        document.getElementById('message').textContent = `Error: ${error.message}`;
        document.getElementById('message').style.color = 'red';
    }
});
