import { useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";

export const HeroPage = () => {
  const { id } = useParams();

  const hero = getHeroById(id);

  console.log(id);

  return (
    <>
      <h1>Hero Component</h1>
    </>
  );
};
