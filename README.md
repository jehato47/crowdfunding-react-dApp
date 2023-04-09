# 🌐 Decentralized Crowdfunding

This project contains two Solidity smart contracts for creating and managing a decentralized crowdfunding campaign:

- 🏭 `CampaignFactory.sol`: factory contract that deploys new campaign contracts and keeps track of their addresses.
- 💰 `Campaign.sol`: contract that manages a single crowdfunding campaign, with features such as accepting contributions, creating spending requests, approving requests, and finalizing them.

## 🚀 Getting Started

To run the project, you will need to have the following software installed:

- 🌐 [Node.js](https://nodejs.org/)
- ⛓️ [Ganache](https://www.trufflesuite.com/ganache)
- 📦 [Truffle](https://www.trufflesuite.com/truffle)
- 💳 [MetaMask](https://metamask.io/)

Once you have these tools installed, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the project's dependencies.
3. Open Ganache and start a new workspace.
4. In MetaMask, connect to your local Ganache network and import one of the accounts using its private key.
5. Run `truffle migrate` to deploy the smart contracts to your local network.
6. Run `npm start` to start the frontend application.
7. In your browser, go to `http://localhost:3000` to access the application.

## 💻 Usage

The application allows you to create new crowdfunding campaigns and manage existing ones. Here are the main features:

### 🌱 Creating a new campaign

To create a new crowdfunding campaign, enter a minimum contribution amount and click the "Create Campaign" button. This will deploy a new `Campaign` contract to the network, and you will be redirected to the campaign details page.

### 💸 Contributing to a campaign

To contribute to a campaign, enter a contribution amount and click the "Contribute" button. This will send Ether to the campaign contract and add you as an approver.

### 📝 Creating a spending request

To create a new spending request, enter a description, a value, and the address of the recipient, and click the "Create Request" button. This will add a new spending request to the campaign.

### 👍 Approving a spending request

To approve a spending request, click the "Approve" button next to the request you want to approve. This will add your approval to the request.

### 🎉 Finalizing a spending request

To finalize a spending request, click the "Finalize" button next to the request you want to finalize. This will send Ether to the recipient and mark the request as complete.

### 💰 Withdrawing all Ether

To withdraw all Ether from a campaign, click the "Withdraw" button. This will send all Ether in the campaign contract to the manager's address.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
