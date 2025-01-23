export default function PortfolioPage() {
  return (
    <body className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 h-screen">
      <div className="grid grid-flow-col justify-around py-12">
        <div className="weather object-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto">
          Weather App
        </div>
        <div className="bookshelf object-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto">
          Tile 2
        </div>
        <div className="space bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto">
          Tile 3
        </div>
      </div>
      <div className="grid grid-flow-col justify-around py-12">
        <div className="dino bg-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto">
          Tile 4
        </div>
        <div className="dino bg-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto">
          Tile 5
        </div>
        <div className="dino bg-contain bg-red-500 hover:bg-red-400 w-60 h-60 justify-self-auto">
          Tile 6
        </div>
      </div>
    </body>
  );
}
