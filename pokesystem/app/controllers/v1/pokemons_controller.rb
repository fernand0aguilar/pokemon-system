# frozen_string_literal: true

class V1::PokemonsController < ApplicationController
    skip_before_action :verify_authenticity_token
    require 'poke-api-v2'

    def index
        pokemons = Pokemon.all
        get_pokemons_from_api
        render json: pokemons
    end

    def get_evolution_chain(pokemon_species)
        evolution_chain = pokemon_species.evolution_chain.get.chain

        firstGen = evolution_chain.evolves_to
        secondGen = evolution_chain.evolves_to.first.evolves_to
        thirdGen = evolution_chain.evolves_to.first.evolves_to.first.evolves_to
        
        if firstGen.first.species.name != pokemon_species.name && secondGen.first.species.name != pokemon_species.name
            evolution = firstGen.first.species.name
        elsif firstGen.first.species.name == pokemon_species.name
            evolution = secondGen.first.species.name
        end

        if evolution
            return evolution
        end
        return "Nao Tem Evolucao"
    end

    def get_pokemons_from_api
        numbers = [*1..151]
        @pokeArr = []
        @evoArr = []

        numbers.each do |id|
            pokemon = PokeApi.get(pokemon_species: id)
            @evoArr << get_evolution_chain(pokemon)
            @pokeArr << pokemon.name
            
            if id % 50 == 0 && id != 150
                puts "API accepts only 100 req per minute. Sleeping 30s"
                sleep(30)
            end 
        end
        create_pokemon(@pokeArr)
    end

    def create_pokemon(poke)
        id = 1
        for i in 0..poke.length-1
            @img_url = "https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/v2/sprites/pokemon/" + id.to_s + ".png"
            pokemon = Pokemon.new(name: poke[i], url: @img_url, evolution: @evoArr[i])
            pokemon.save
            id += 1
        end
      end
end