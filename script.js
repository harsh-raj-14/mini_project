
const backendURL = "http://127.0.0.1:8000"; // Update when deployed

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


// summarizeBtn.addEventListener("click", async () => {
//   const text = contractText.value.trim();
//   if (!text) {
//     alert("Please provide contract text first!");
//     return;
//   }
 summarizeBtn.addEventListener("click", async () => 
   {
      alert("Loaded clause model from /content/models/clause_bert

----- Extractive Summary -----
 A notice in writing from the Institute to the service provider shall be issued giving 30 (Thirty) days time for such termination and vacation of the premises, without assigning any reasons thereof. If all or part of the contract is terminated in accordance with the provisions contained above, the Institute shall pay to the service provider charges up to  the  effective  date  of  termination. 7.7	Schedule of Rates to be Inclusive:

The prices/rates accepted by the service provider shall remain firm till the issue  of  final  certificates and  shall not  be  subjected  to any  escalation except for the adjustments on account of revision of minimum wages by the Government in respect of workmen directly employed on the work. 7.8	Receipts for Payment:

The receipt for payment made on account of the work when executed by a firm must be signed by a person holding due power of attorney in this respect on behalf of the service provider, except when the service providers are  described  in  their  application  for  the  empanelment,  as  a  limited company in which case the receipts must be signed in the name of the company by one of its principal officers or by some other person having authority to give effectual receipt for the company. The  Warden  in-charge/Warden  shall  normally  issue  to  the service provider the completion	certificate within 1 (one) month of receiving an application from him to the effect that the work has been completed in accordance with and as set out in the contract.

----- Clauses (grouped) -----

Other:
 - ﻿  This draft agreement is subject to change/fine tuning before  final award of the contract      (Sample Contract Agreement)      AGREEMENT FOR HALL OF RESIDENCE NO.
 - – __     THIS AGREEMENT has been made on this _th  day of October, 2012 at IIT Kanpur  BETWEEN Indian Institute of Technology Kanpur (hereinafter referred to as the Institute)  incorporated as a body of corporate under the Institute of Technology Act, 1961, through its Director (represented by Dean of Students’ Affairs, Chairman, Council of Wardens & Warden-in-Charge/Warden of Hall of Residence No.-_.)
 - AND M/s __________ registered under ________________________ and having it’s office at __________________________________________________ (hereinafter referred to as The Service Provider which expression shall include his/their respective heirs, executors, administrators and assignees), represented by _____________________________ on the other part.
 - AND  whereas  the  Institute  has  empanelled  some  agencies  for  providing  operational services to its mess of Halls of Residence as per the terms and conditions, specifications and general conditions of the contract, as attached along with this agreement.
 - AND whereas the said terms and conditions, specifications as well as the scope of work to be done, as set out in the General Conditions of the contract, have been accepted and signed by the Service Provider.

Payment / Fees:
 - ________ dated _______ issued by ___________________ in favour of Hall Management, IIT Kanpur payable at UBI, I.I.T.
 - In  consideration  of  the  payments  to  be  made  to  the  Service  Provider,  as hereinafter provided and agreed to by both the parties, the Service Provider shall upon and subject to the said condition execute and complete the contract.
 - 2. The Institute shall pay the Service Provider such sums as shall become payable hereunder at the time and in the manner specified in the said conditions.
 - Payment towards the cost of such material shall be made by the hostel to the vendors or shopkeepers directly against such bills submitted by them.
 - Details related to payments and changes therein on account of such decisions are given in Article 5.

Governing Law:
 - 6. All disputes arising out of or in any way connected with this agreement shall be deemed to have arisen in Kanpur and only courts in Kanpur shall have jurisdiction to determine the same.
 - It will not be open to the parties to challenge the jurisdiction of the arbitrator after the award has been made.
 - 7.15	Jurisdiction:  The contract shall be governed by and constructed according to the laws in 28  force in India.
 - The service provider shall hereby submit to the jurisdiction of the courts situated at Kanpur for the purpose of actions and proceedings arising out of the contract and the courts at Kanpur shall have the sole jurisdiction to hear and decide such actions and proceedings.

Liability:
 - 3.17  The service provider shall be liable to comply with all Labour Laws including Employee’s State Insurance Act 1948 and Employees’ Provident Fund and Miscellaneous  Provisions  Act  1952.
 - The  service  provider  shall  also  be responsible for violation, if any, of the provisions of the Food Adulteration Act.
 - 4.4	The service provider shall be responsible for his employees in observing all security and safety regulations and instructions as may be issued by the Institute from time to time.
 - 4.5	In case, the Institute suffers loss of any nature on account of the service provider	or	his	employees	for	not	following	security/safety regulation/instructions, the service provider shall be liable to make good the loss as determined by the Institute at its sole discretion and the Institute shall have the right to recover such losses, etc., from the dues payable to the 13  service provider and/or security deposit, etc.
 - The  service  provider  shall  be  responsible  for  strict compliance of all statutory provisions of relevant labour laws applicable from time to time in carrying out the above job.

Termination:
 - Violation of this provision will attract penalties and may lead to the termination of the contract    ________________ 12  ARTICLE—4  4.0   Employment of workmen by the Service provider  4.1	The staff employed in the mess shall be provided with uniform by the service provider as per their job assignments and ensure that the uniform is worn while the staff is on duty.
 - hence non compliance or violation of any of these provisions of any of the Acts would lead to the immediate termination of the contract.
 - Whenever the contract is terminated or concluded and the Institute decides 14  that the service provider should not be allowed to run the mess, the Institute shall be entitled to restrain the service provider from entering IIT campus as well as the hostel premises.
 - 6.2	Termination:  The Institute shall at any time be entitled to determine and terminate the contract for any reason including unsatisfactory performance or violation of Minimum Wages Act or of any of the other terms and conditions of the contract.
 - A notice in writing from the Institute to the service provider shall be issued giving 30 (Thirty) days time for such termination and vacation of the premises, without assigning any reasons thereof.

Employment / Roles:
 - 4.3	The service provider shall ensure that all employees engaged by him are free from communicable/infectious disease and are also medically fit to work in the mess.
 - If  in  the  opinion  of  the  Institute  any  of  the  service  provider's employee [s] is found to be suffering from any such disease/condition or if any  employee(s)  of  the  service  provider  is  found  to  have  committed misconduct or misbehavior, the Warden-in-charge/Warden shall have the right  to  ask  the  service  provider  to  remove  such  employee(s)  without questioning the decision of the Institute.
 - The Institute shall be entitled to restrain such employee(s) from entering the mess premises.
 - 4.9	The service provider shall ensure that the minimum wages are paid to the employees in the presence of a nominee of the Institute.
 - The  service  provider  shall  ensure  that  his  employees  strictly observe the normal practices for safe use of electrical fixtures and fittings.

Indemnity:
 - The  service  provider  shall  indemnify  and  keep  the  Institute indemnified  against  all  such  damage  and  compensation  whatsoever  in respect or in relation thereto.

----- Warnings -----
⚠ Missing Clause: Confidentiality");
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
