# Javascript

## NFT Superhero Collection

This project is a simple implementation of an NFT (Non-Fungible Token) collection featuring superheroes, each with unique metadata attributes such as name, superpower, abilities, and ultimate move. The project includes functionality to mint new NFTs, list all NFTs, and get the total supply of NFTs created.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This project demonstrates the creation and management of a collection of NFTs using JavaScript. Each NFT represents a unique superhero with distinct abilities and powers.

## Features

- Mint new NFTs with custom metadata
- List all NFTs with their metadata
- Get the total number of NFTs created

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aviraj2003/Javascript.git
   cd javascript
   ```
2. No additional dependencies are required for this project.

## Usage

To use this project, simply include the JavaScript code in your environment and call the functions as demonstrated in the example usage below.

### Example Usage

```javascript
// Mint new NFTs
mintNFT("Spider-Man", "Wall-Crawling", "Web-Shoot", "Spider-Sense", "Super Strength", "Ultimate Web Blast");
mintNFT("Iron Man", "Powered Armor Suit", "Repulsor Rays", "Unibeam", "Flight", "Proton Cannon");
mintNFT("Deadpool", "Regenerative Healing", "Swordsmanship", "Marksmanship", "Hand-to-Hand Combat", "Maximum Effort");
mintNFT("Thor", "God of Thunder", "Mjolnir Strike", "Lightning Control", "Flight", "God Blast");
mintNFT("Hulk", "Superhuman Strength", "Thunder Clap", "Superhuman Durability", "Healing Factor", "Worldbreaker");

// List all NFTs
listNFTs();

// Get total supply of NFTs
getTotalSupply();
```

## Functions

### mintNFT(name, superPower, ability1, ability2, ability3, ultimate)

Creates a new NFT with the provided metadata and stores it in the `nftCollections` array.

**Parameters:**
- `name` (string): The name of the superhero.
- `superPower` (string): The main superpower of the superhero.
- `ability1` (string): First ability of the superhero.
- `ability2` (string): Second ability of the superhero.
- `ability3` (string): Third ability of the superhero.
- `ultimate` (string): Ultimate move of the superhero.

### listNFTs()

Prints all the NFTs in the `nftCollections` array with their metadata to the console.

### getTotalSupply()

Prints the total number of NFTs created to the console.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, feel free to contact me:

- Email: your-aviraj9888@gmail.com
- GitHub: [Aviraj2003](https://github.com/Aviraj2003)

---
