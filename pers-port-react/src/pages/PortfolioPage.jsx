export default function PortfolioPage() {
  return (
    <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 h-screen">
      <div className="grid grid-flow-col justify-around py-12">
        <button
          className="weather object-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto"
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
        <button
          className="bookshelf object-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto"
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
        <button
          className="space bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto"
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
      </div>
      <div className="grid grid-flow-col justify-around py-12">
        <button
          className="calc bg-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto"
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Bearded-Bros-Breakdown-for-Better-Budgeting/')
          }
        ></button>
        <button
          className="dino bg-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto"
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
        <button
          className="dino bg-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto"
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
      </div>
    </body>
  );
}
