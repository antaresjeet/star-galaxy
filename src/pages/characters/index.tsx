import CharacterCard from "@/components/character-card";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { charactersAtom, homeWorldsAtom, loadingAtom } from "@/jotai";
import { Character, HomeWorld, ModalAnimation } from "@/declarations";
import { characterExtras, swTextContent } from "@/constants";
import DarthVaderLoader from "@/components/darth-vader-loader";
import CharacterDetail from "@/components/character-detail";
import Modal from "@/components/modal";

export default function Characters(): JSX.Element {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [homeWorlds, setHomeWorlds] = useAtom(homeWorldsAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();
  const [modalAnimation, setModalAnimation] = useState<ModalAnimation>(ModalAnimation.OPEN);

  useEffect(() => {
    const getData = async () => {
      let charactersData: Character[] = []
      let homeWorldsData: HomeWorld[] = []

      // * fetch characters
      const getCharacters = async () => {
        const response = await fetch(`${process.env.swapiEndPoint}people/`);
        const data = await response.json();
        charactersData = data.results;
      };
      !characters.length && await getCharacters();

      // * fetch homeworlds

      const getHomeWorlds = async () => {
        const response = await fetch(`${process.env.swapiEndPoint}planets/`);
        const data = await response.json();
        homeWorldsData = data.results;
      };
      !homeWorlds.length && await getHomeWorlds();

      // * set home world and image in character 

      const addKeys = async () => {
        const getHomeWorld = async (homeWorldUrl: string): Promise<string> => {
          const response = await fetch(homeWorldUrl);
          const data = await response.json();
          return data.name ?? 'unknown'
        }
        for (let i = 0; i < charactersData.length; i++) {
          charactersData[i].homeworld_name = homeWorldsData.find((planet) => planet.url === charactersData[i].homeworld)?.name ?? await getHomeWorld(charactersData[i].homeworld)
          const extras = characterExtras.find((characterExtra) => characterExtra.url === charactersData[i].url)
          console.log('extras: ', extras)
          Object.assign(charactersData[i], extras)
        }
      }

      await addKeys();
      setCharacters(charactersData);
      setHomeWorlds(homeWorldsData);
      setLoading(false);
    }
    !characters.length && getData();
  }, []);

  const filteredCharacters = characters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log('filteredCharacters: ', filteredCharacters)

  const onModalClose = () => {
    setModalAnimation(ModalAnimation.CLOSE)

    setTimeout(() => {
      setSelectedCharacter(undefined)
    }, 500);
  }

  return (
    <div className="star-characters-container">
      <section className="container mx-auto px-16">
        <div className="star-intro flex justify-between flex-col items-center text-center mx-0 my-[100px] select-none">
          <h1 className="text-[92px] md:text-[90px] lg:text-[110px] xl:text-[120px] text-[#ffe81f] leading-none mb-10">Star wars</h1>
          <h2 className="text-[42px] md:text-[54px] lg:text-[62px] xl:text-[72px] tracking-[3px] leading-none">characters</h2>
        </div>
        {!loading && (
          <div className="character-search flex justify-center">
            <div className="relative w-[58vw]">
              <svg className="absolute left-[20px] top-[19px]" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 7.58347C0.999526 4.44328 3.21735 1.74005 6.29712 1.127C9.37688 0.513948 12.4608 2.16182 13.6629 5.06282C14.865 7.96382 13.8504 11.31 11.2396 13.0549C8.62884 14.7998 5.14905 14.4575 2.92836 12.2372C1.69381 11.0031 1.00015 9.32908 1 7.58347Z" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.2378 12.2383L15.9992 15.9997" stroke="white" strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input type="text" className="w-full p-[18px] !pl-[50px] bg-[#1D1E1F] rounded-md" placeholder="Search the galaxy for your favorite  character..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>
        )}
      </section>
      {!loading && (
        <>
          <section className={`container mx-auto px-12 py-16`}>
            {filteredCharacters.length ? (
              <div className={`characters-list-wrap grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 w-full`}>
                {filteredCharacters.map((character: Character, index: number) => (
                  <div key={index}>
                    <CharacterCard
                      character={character}
                      onCharacterSelect={() => {
                        setSelectedCharacter(character);
                        setModalAnimation(ModalAnimation.OPEN)
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center p-28">
                <p className="text-xl">{swTextContent.characterNotFound}</p>
              </div>
            )}
          </section>
        </>
      )}
      {selectedCharacter && (
        <Modal animation={modalAnimation}>
          <CharacterDetail character={selectedCharacter} onClose={() => onModalClose()} />
        </Modal>
      )}
      {loading && (
        <div className="flex justify-center">
          <DarthVaderLoader />
        </div>
      )}
    </div>
  );
}
