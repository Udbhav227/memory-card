#  Pokémon Memory Card Game (Gotta Click 'Em All!)

A classic memory/click game implemented with React and Vite. The objective is to click on each Pokémon card exactly once per round. If you click a Pokémon you've already clicked in the current round, you lose. The cards are shuffled after every successful click to test your memory!

## 🚀 Live Demo

Experience the game live here:

[Play the Game Here](https://gotta-click-em-all.netlify.app/)

## ✨ Features

The application includes the following features and gameplay mechanics:

* **Multiple Difficulty Modes:** Choose between **Easy**, **Medium**, and **Hard** modes, which adjust the total number of rounds and the number of cards displayed in the playground.
    * Easy Mode: 5 rounds, 3 cards per round.
    * Medium Mode: 7 rounds, 4 cards per round.
    * Hard Mode: 10 rounds, 5 cards per round.
* **Clean Animation:** Uses `framer-motion` for smooth page transitions and responsive animations.

## ⚙️ Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd memory-card
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173` (or the port specified by Vite).

4.  **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    This command will generate the production-ready files in the `dist` directory.