let xp = parseInt(localStorage.getItem("xp")) || 0;
let level = "E";

function calculateLevel(xp) {
  if (xp >= 300) return "S";
  if (xp >= 200) return "A";
  if (xp >= 150) return "B";
  if (xp >= 100) return "C";
  if (xp >= 50) return "D";
  return "E";
}

function updateUI() {
  document.getElementById("root").innerHTML = `
    <h1>⚔️ Stark Protocol Activated</h1>
    <p>System Booted. Missions incoming…</p>
    <button onclick="checkIn()" style="padding:10px 20px; font-size:16px;">✅ Daily Check-In</button>
    <p>🌟 XP: ${xp}</p>
    <p>🧬 Level: ${calculateLevel(xp)}</p>
    <hr/>
    <h2>🔥 Daily Missions</h2>
    <ul style="text-align:left; display:inline-block; font-size:18px;">
      <li>⏰ 3:00 AM – 10KM Run</li>
      <li>💪 100 Push-ups | 100 Squats | 100 Sit-ups</li>
      <li>🧘‍♂️ 15 Min Meditation (Kundalini)</li>
      <li>🧊 Cold Shower | 📖 20 Min Study</li>
    </ul>
    <p style="color:green;">🎯 Rewards: XP, Discipline, Strength</p>
    <p style="color:red;">⚠️ Punishment: -XP if Skipped</p>
  `;
}

function checkIn() {
  const today = new Date().toDateString();
  const lastCheckIn = localStorage.getItem("lastCheckIn");
  if (lastCheckIn === today) {
    alert("✅ Already checked in today!");
    return;
  }
  xp += 10;
  localStorage.setItem("xp", xp);
  localStorage.setItem("lastCheckIn", today);
  alert("🎉 Check-in Successful! +10 XP");
  updateUI();
}

updateUI();
