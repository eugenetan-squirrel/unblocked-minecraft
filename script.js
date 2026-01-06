const firebaseConfig = {
  apiKey: "AIzaSyAgmKwiwiuD-Sf388i2fCfHAtZ3EVQR3Wc",
  authDomain: "minecraft-unblocked-f7867.firebaseapp.com",
  databaseURL: "https://minecraft-unblocked-f7867-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "minecraft-unblocked-f7867",
  storageBucket: "minecraft-unblocked-f7867.firebasestorage.app",
  messagingSenderId: "176284909990",
  appId: "1:176284909990:web:0ebcd0389cc796d6e78f67",
  measurementId: "G-1B1E5LE39J"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const GAME_URL =
  "https://cdn.jsdelivr.net/gh/PlanetDogeCodes/Eagletcraft-1.12@main/source%20file/egc1-12.xml";

async function openUndetectable() {
  const html = await fetch(GAME_URL).then(r => r.text());
  const w = window.open("", "_blank");
  if (!w) return alert("Popup blocked");
  w.document.open();
  w.document.write(html);
  w.document.close();
  w.document.documentElement.requestFullscreen?.();
}

function checkCode() {
  const input = document.getElementById("code").value;

  db.ref("secret").get().then(snap => {
    if (snap.exists() && snap.val() === input) {
      openUndetectable();
    } else {
      alert("Wrong code");
    }
  });
}
