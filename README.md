## Arena Ladder

The Arena Ladder is a custom application developed to address the limitations of the official Blizzard website's ladder system. Frustrated by the inability to filter players specifically from Brazilian servers, I took matters into my own hands and created this application. Its primary purpose is to provide a dedicated ladder that showcases the top players exclusively from Brazilian servers.

Additionally, this project serves as an excellent opportunity for me to expand my knowledge and proficiency in Next.js 13 and explore the exciting new features introduced in the app directory.

## Getting Started
To begin, you'll need to obtain an API client ID and secret from the [Blizzard Developer]("https://develop.battle.net/").

Here's how you can set up the project:

Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/mtswr/wow-ladder.git
```
Navigate to the project directory:
```bash
cd arena-ladder
```
Install the necessary dependencies by running:
```bash
npm install
```
Create a file named .env.local in the project root directory and add the following lines, replacing `<your_client_id>` and `<your_client_secret>` with your actual Blizzard API credentials:
```bash
BLIZZARD_API_CLIENT_ID=<your_client_id>
BLIZZARD_API_CLIENT_SECRET=<your_client_secret>
```
Start the development server:
```bash
npm run dev
```

Open your preferred web browser and visit http://localhost:3000 to access the Arena Ladder application.

## Features
- Display the top players from Brazilian servers.
- Explore player statistics and rankings.
- Gain insights into the competitive scene in the Brazilian region.

## Technologies Used
- Next.js 13
- React
- TailwindCSS
- Blizzard API

## License

[MIT](https://choosealicense.com/licenses/mit/)