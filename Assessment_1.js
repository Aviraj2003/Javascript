/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// Create a variable to hold your NFTs
let nftCollections = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, superPower, ability1, ability2, ability3, ultimate) {
    let NFT = {
        name: name,
        superPower: superPower,
        ability1: ability1,
        ability2: ability2,
        ability3: ability3,
        ultimate: ultimate
    };
    nftCollections.push(NFT);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollections.length; i++) {
        console.log("\n\n==================== SUPERHERO DETAILS ====================\n\n");
        console.log("Name: " + nftCollections[i].name);
        console.log("Super Power: " + nftCollections[i].superPower);
        console.log("Ability 1: " + nftCollections[i].ability1);
        console.log("Ability 2: " + nftCollections[i].ability2);
        console.log("Ability 3: " + nftCollections[i].ability3);
        console.log("Ultimate: " + nftCollections[i].ultimate);
        console.log("\n\n====================================================\n");
    }
}

// Print the total number of NFTs we have created to the console
function getTotalSupply() {
    console.log("Total NFTs Created: " + nftCollections.length);
}

// Call your functions below this line
mintNFT("Spider-Man", "Wall-Crawling", "Web-Shoot", "Spider-Sense", "Super Strength", "Ultimate Web Blast");
mintNFT("Iron Man", "Powered Armor Suit", "Repulsor Rays", "Unibeam", "Flight", "Proton Cannon");
mintNFT("Deadpool", "Regenerative Healing", "Swordsmanship", "Marksmanship", "Hand-to-Hand Combat", "Maximum Effort");
mintNFT("Thor", "God of Thunder", "Mjolnir Strike", "Lightning Control", "Flight", "God Blast");
mintNFT("Hulk", "Superhuman Strength", "Thunder Clap", "Superhuman Durability", "Healing Factor", "Worldbreaker");

listNFTs();
getTotalSupply();
