import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { api, pokeAPi } from "../configs/Api";

export default function DetailPage() {
  let { id } = useParams();
  const [data, setData] = useState(null);
  const [response, setResponse] = useState([]);

  const catchPokemon = async () => {
    const payload = {
      name: data.name,
      imageUrl: data.sprites.front_default,
      links: data.sprites.front_default,
      pokemon_id: data.id.toString(),
    };

    try {
      let response = await pokeAPi.post(`/catch`, payload);
      if (response.data.status === "05") {
        setResponse("Pokemon Run Away!!");
      }
      if (response.data.status === "07") {
        setResponse("Already Got The Pokemon");
      }
      if (response.data.status === "06") {
        setResponse("API Failed");
      }
      if (response.data.status === "00") {
        setResponse("Gotcha!! Pokemon Berhasil Ditangkap!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function fetch() {
    let response = await api.get(`/pokemon/${id}`);
    setData(response.data);
    // console.log(response.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  if (!data) return null;

  return (
    <div className="wrapper">
      <Navigation />
      <div className="container mx-auto mt-4 flex flex-row">
        <div className="left basis-2/4">
          <div className="bio text-lg leading-8 tracking-wide">
            <h4 className="title">Name : {data.name}</h4>
            <h4 className="height">Height : {data.height}ft</h4>
            <h4 className="weight">Weight : {data.weight}kg</h4>
          </div>
          <ul class="list-inside border rounded-lg list-disc p-4 my-4">
            <h4 className="text-lg font-bold pb-2">Types</h4>
            {data.types.map((item, index) => {
              return <li key={index}>{item.type.name}</li>;
            })}
          </ul>
          <ul class="list-inside border rounded-lg list-disc p-4 my-4">
            <h4 className="text-lg font-bold pb-2">Abilities</h4>
            {data.abilities.map((item, index) => {
              return <li key={index}>{item.ability.name}</li>;
            })}
          </ul>
        </div>
        <div className="right basis-2/4 flex justify-center">
          <img
            className="h-60"
            src={data.sprites.front_default}
            alt={data.name}
          />
          <img
            className="h-60"
            src={data.sprites.back_default}
            alt={data.name}
          />
        </div>
      </div>
      <h4 className="info flex justify-center">{response}</h4>
      <div className="catch-button flex justify-center">
        <button
          onClick={async () => catchPokemon()}
          class="rounded-full bg-yellow p-4 hover:bg-[#f4dc26] font-bold"
        >
          Catch Pokemon!!
        </button>
      </div>
    </div>
  );
}
