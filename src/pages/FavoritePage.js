import React, { useEffect, useState } from "react";
import { pokeAPi } from "../configs/Api";
import Navigation from "../components/Navigation";
import Modal from "../components/Modal";

export default function FavoritePage() {
  const [data, setData] = useState(null);
  const [ModalData, setModalData] = useState([]);

  const getFavorite = async () => {
    const { data } = await pokeAPi.get("/favorite");
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getFavorite();
    console.log(data);
  }, []);

  if (!data) return null;

  console.log(ModalData);
  return (
    <div className="wrapper">
      <Navigation />

      <div className="container mx-auto">
        <div className="my-6 w-32 drop-shadow-lg">
          <h2 className="tracking-wider text-2xl font-bold border-b-4 w-3/6 pb-2 border-yellow">
            My Pokemon
          </h2>
        </div>
        <div className="card-list grid grid-cols-8 gap-2">
          {data.data.map((item, index) => {
            let id = item.pokemon_id;
            let name = item.name;

            return (
              <a
                key={index}
                href={"/detail/" + id}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="card-item flex flex-col items-center rounded-2xl bg-maroon"
              >
                <img
                  className="h-30 rounded-t-2xl brightness-75 hover:filter-none transition delay-100"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt=""
                  onClick={() => {
                    setModalData({ name, id });
                  }}
                />
                <h1 className="card-title py-2">{item.name}</h1>
              </a>
            );
          })}
          <Modal name={ModalData.name} id={ModalData.id} />
        </div>
      </div>
    </div>
  );
}
