function openModal(synopsisId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    // Content for each book's synopsis
    const synopsisContent = {
        synopsis1: "<h2>Sypnosis:</h2><p>With the rising tide of steam power and machinery, who can come close to being a Beyonder? Shrouded in the fog of history and darkness, who or what is the lurking evil that murmurs into our ears? Waking up to be faced with a string of mysteries, Zhou Mingrui finds himself reincarnated as Klein Moretti in an alternate Victorian era world where he sees a world filled with machinery, cannons, dreadnoughts, airships, difference machines, as well as Potions, Divination, Hexes, Tarot Cards, Sealed Artifacts… The Light continues to shine but the mystery has never gone far. Follow Klein as he finds himself entangled with the Churches of the world—both orthodox and unorthodox while he slowly develops newfound powers thanks to the Beyonder potions. Like the corresponding tarot card, The Fool, which is numbered 0—a number of unlimited potentials—this is the legend of The Fool.</p>",
        synopsis2: "<h2>Sypnosis:</h2><p>A novel called Three Ways to Survive in a Ruined World (written by the anonymous author tls123) has been written and published over the course of a decade, and Kim Dokja is the sole reader who has followed it to its ending. When the real world is plunged into the premise of Ways of Survival, Kim Dokja's unique knowledge of the novel becomes vital to his survival. Kim Dokja allies with Yoo Joonghyuk, the protagonist of Ways of Survival, in order to change the novel's original plot and more quickly approach the end of the story. As Kim Dokja and his party members progress through the scenarios, they face increasingly difficult threats and life-or-death challenges, struggling to stay alive and work together as they aim to destroy the <Star Stream> that demands their suffering.</p>",
        synopsis3: "<h2>Sypnosis:</h2><p>The story follows an illegitimate child of Demonic Cult Lord, Chun Yeowun, who gets an unexpected visit from his descendant from the future who inserts nano machines into his body. As a prince born from a peasant mother, Chun Yeowun is forbidden to learn martial arts by the 6 highest clans of Demonic Cult, hoping the child would easily lose in the fight to determine the successor for the throne. However, with Nano Machine’s help, Chun Yeowun’s chance to defeat his step-siblings, and claim his right to the throne, is no longer impossible.</p>",
        synopsis4: "<h2>Sypnosis:</h2><p>Growing up in poverty, Sunny never expected anything good from life. However, even he did not anticipate being chosen by the Nightmare Spell and becoming one of the Awakened - an elite group of people gifted with supernatural powers. Transported into a ruined magical world, he found himself facing against terrible monsters - and other Awakened - in a deadly battle of survival. What's worse, the shadow powers he received happened to possess a small, but potentially fatal side effect...</p>",
        synopsis5: "<h2>Sypnosis:</h2><p>A story of a villain, Fang Yuan who was reborn 500 years into the past with the Spring Autumn Cicada he painstakingly refined. With his profound wisdom, battle and life experiences, he seeks to overcome his foes with skill and wit! Ruthless and amoral, he has no need to hold back as he pursues his ultimate goals. In a world of cruelty where one cultivates using Gu - magical creatures of the world - Fang Yuan must rise up above all with his own power.</p>",
        synopsis6: "<h2>Sypnosis:</h2><p>King Grey is a remarkable ruler with a prosperous reign, and yet…opulence and success cannot bury emptiness and solitude. His time as king, however, comes to an abrupt end, and he reincarnates as Arthur Leywin―a baby born in a world of magic and monsters. Equipped with memories of his previous life and the desire to protect the newfound warmth surrounding him, Art begins his journey of becoming a strong warrior once again. Sword training, mana coreformation, magic studies―Art does it all in order to be as powerful as can be! But will it be enough to repel the dangerous forces that threaten his second chance at life…?</p>",
        synopsis7: "<h2>Sypnosis:</h2><p>Zhuo Yifan was the Demon Emperor. One day, he managed to lay his hands on an ancient emperor's book, the Nine Serenities Secret Records. As the book was coveted by many, he was targeted by experts and was even betrayed by his student. After his passing, his soul took over another's body.</p>",
        synopsis8: "<h2>Sypnosis:</h2><p>The 13th disciple of the Mount Hua Sect, one of the greatest third generation swordsmen, the Plum Blossom Sword Saint: Chung Myung. After defeating the Heavenly Demon and ending his reign of chaos, Chung Myung breathed his last on the summit of the Heavenly Demon Sect’s mountain.</p>",
        synopsis9: "<h2>Sypnosis:</h2><p>After losing his life to avenge his murdered brother, he reincarnates until he finds a world worth living in, a world filled with magic and monsters. Follow him along his journey, from grieving brother to alien soldier. From infant to Supreme Magus</p>"
    };

    // Check if the synopsis exists for the given ID
    if (synopsisContent[synopsisId]) {
        modalBody.innerHTML = synopsisContent[synopsisId];
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Close the modal if user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
