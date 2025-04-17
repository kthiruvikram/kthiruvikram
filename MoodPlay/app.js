function suggestMusic() {
  const moods = ["Happy", "Sad", "Chill", "Energetic", "Romantic"];
  const suggestions = {
    Happy: "🎶 'Happy' by Pharrell Williams",
    Sad: "💔 'Someone Like You' by Adele",
    Chill: "🧘 'Weightless' by Marconi Union",
    Energetic: "🔥 'Can't Hold Us' by Macklemore",
    Romantic: "💖 'Perfect' by Ed Sheeran"
  };

  const randomMood = moods[Math.floor(Math.random() * moods.length)];
  const suggestion = suggestions[randomMood];

  document.getElementById("suggestion").innerText = `Mood: ${randomMood} — Try: ${suggestion}`;
}
