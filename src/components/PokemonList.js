/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { api } from "../configs/Api";

export default function PokemonList() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetch() {
      let response = await api.get(`/pokemon?limit=80`);
      setData(response.data);
      console.log(response.data);
    }

    fetch();
  }, []);

  if (!data) return null;

  return (
    <div className="container mx-auto">
      <div className="my-6 w-32 drop-shadow-lg">
        <h2 className="tracking-wider text-2xl font-bold border-b-4 w-3/6 pb-2 border-yellow">
          Pokedex
        </h2>
      </div>
      <div className="card-list grid grid-cols-8 gap-2">
        {data.results.map((item, index) => {
          let count = index + 1;
          return (
            <a
              key={index}
              href={"/detail/" + count}
              className="card-item flex flex-col items-center rounded-2xl bg-maroon"
            >
              <img
                className="h-30 rounded-t-2xl brightness-75 hover:filter-none transition delay-100"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt=""
              />
              <h1 className="card-title py-2">{item.name}</h1>
            </a>
          );
        })}
      </div>
    </div>
  );
}
