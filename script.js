
const backendURL = "http://localhost:8000/summarize"; // Update when deployed

const fileInput = document.getElementById("fileInput");
const contractText = document.getElementById("contractText");
const summarizeBtn = document.getElementById("summarizeBtn");
const loading = document.getElementById("loading");
const results = document.getElementById("results");
const summaryElem = document.getElementById("summary");
const clausesElem = document.getElementById("clauses");
const warningsElem = document.getElementById("warnings");

async function extractTextFromPDF(file) {
  const pdf = await pdfjsLib.getDocument(await file.arrayBuffer()).promise;
  let text = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((s) => s.str).join(" ");
  }
  return text;
}

fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  if (file.type === "text/plain") {
    const text = await file.text();
    contractText.value = text;
  } else if (file.type === "application/pdf") {
    contractText.value = "Extracting text from PDF...";
    const text = await extractTextFromPDF(file);
    contractText.value = text;
  } else {
    alert("Please upload a .txt or .pdf file.");
  }
});

summarizeBtn.addEventListener("click", async () => {
  const text = contractText.value.trim();
  if (!text) {
    alert("Please provide contract text first!");
    return;
  }

  loading.classList.remove("hidden");
  results.classList.add("hidden");

  try {
    const response = await fetch(backendURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();

    summaryElem.textContent = data.summary || "No summary available.";
    clausesElem.innerHTML = (data.clauses || [])
      .map((c) => `<li>${c}</li>`)
      .join("");
    warningsElem.innerHTML = (data.warnings || [])
      .map((w) => `<li>${w}</li>`)
      .join("");

    results.classList.remove("hidden");
  } catch (err) {
    alert("⚠️ Could not connect to backend. Please check your API server.");
    console.error(err);
  } finally {
    loading.classList.add("hidden");
  }
});
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const themeBtn = document.getElementById('themeBtn');

    menuBtn.addEventListener('click', () => {
      sidebar.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      themeBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    });
