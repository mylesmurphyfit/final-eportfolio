import AboutCard from '../components/cards/AboutCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AboutPage({ paragraphs = [], links = [], headshot }) {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function getRandomPokemon() {
      // Get total count of Pokémon
      const speciesRes = await axios.get(
        'https://pokeapi.co/api/v2/pokemon-species?limit=1'
      )
      const count = speciesRes.data.count

      // Random ID from 1..count
      const id = Math.floor(Math.random() * count) + 1

      // Fetch
      const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

      setPokemon({
        name: pokemonRes.data.name,
        image:
          pokemonRes.data.sprites?.other?.['official-artwork']?.front_default ??
          pokemonRes.data.sprites?.front_default ??
          '',
      })
    }

    getRandomPokemon()
  }, [])

  const pokemonSubtitle = pokemon ? pokemon.name : 'Loading...'
  const pokemonParagraphs = pokemon ? ['Your random Pokémon of the day.'] : []

  return (
    <section className="cards-grid cards-grid-about">
      <AboutCard
        title="About Me"
        subtitle="Software engineer and graduate student"
        image={headshot}
        imageAlt="Myles Murphy headshot"
      />
      <AboutCard
        title="Background"
        subtitle="Experience and interests"
        paragraphs={paragraphs}
        links={links}
      />
      <AboutCard
        title="Pokémon of the day"
        subtitle={pokemonSubtitle}
        image={pokemon?.image || null}
        imageAlt={pokemon ? pokemon.name : 'pokemon'}
        paragraphs={pokemonParagraphs}
      />
    </section>
  )
}

export default AboutPage
 