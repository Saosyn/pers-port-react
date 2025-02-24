export default function PortfolioPage() {
  return (
    <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 h-screen">
      <div className="grid grid-flow-col justify-around py-12">
        <button
          className="weather object-contain w-60 h-60 justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          onClick={() =>
            (window.location.href =
              'https://https://zero9-weather-app.onrender.com//')
          }
        ></button>
        <button
          className="bookshelf object-contain w-60 h-60 justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          onClick={() =>
            (window.location.href =
              'https://https://whats-on-your-shelf.onrender.com//')
          }
        ></button>
        <button
          className="space object-contain w-60 h-60 justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
      </div>
      <div className="grid grid-flow-col justify-around py-12">
        <button
          className="calc bg-contain object-contain w-60 h-60 justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Bearded-Bros-Breakdown-for-Better-Budgeting/')
          }
        ></button>
        <button
          className="dino bg-contain object-contain w-60 h-60 justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
        <button
          className="dino bg-contain object-contain w-60 h-60 justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "
          onClick={() =>
            (window.location.href =
              'https://saosyn.github.io/Under-construction/')
          }
        ></button>
      </div>
    </body>
  );
}
