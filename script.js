// ELEMENTS
const proceedBtn = document.querySelector("#proceedBtn");
const connectBtn = document.querySelector("#connectBtn");
const addressSection = document.querySelector("#addressSection");
const solInput = document.querySelector("#solAddress");
const progressFill = document.querySelector(".progress > span");
const termsModal = document.querySelector(".modal");
const acceptBtn = document.querySelector("#acceptBtn");

// STEP 1: Proceed button shows Connect Wallet
proceedBtn.addEventListener("click", () => {
  proceedBtn.classList.add("hidden");
  connectBtn.classList.remove("hidden");
});

// STEP 2: Connect Wallet button shows wallet input section
connectBtn.addEventListener("click", () => {
  connectBtn.classList.add("hidden");
  addressSection.classList.remove("hidden");
  solInput.focus();
});

// STEP 3: Update progress bar as user types Solana wallet
solInput.addEventListener("input", () => {
  const length = solInput.value.length;
  let percent = Math.min((length / 44) * 100, 100); // typical Solana address ~44 chars
  progressFill.style.width = percent + "%";
});

// STEP 4: Show Terms modal when input has some value and user leaves input
solInput.addEventListener("blur", () => {
  if (solInput.value.trim().length > 0) {
    termsModal.classList.remove("hidden");
  }
});

// STEP 5: Accept Terms closes modal
acceptBtn.addEventListener("click", () => {
  termsModal.classList.add("hidden");
  // stop here as requested
});
