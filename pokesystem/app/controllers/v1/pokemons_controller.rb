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
        
        chain = firstGen
        
        if firstGen.first.species.name == pokemon_species.name
            evolution = secondGen.first.species.name
        elsif thirdGen.first.length == 0
            evolution = "Don't have Evolution"
        else
            evolution = firstGen.first.species.name
        end

        if evolution
            return evolution
        end
    end

    def get_pokemons_from_api
        numbers = [*1..10]
        @pokeArr = []
        @evoArr = []

        numbers.each do |id|
            pokemons = PokeApi.get(pokemon_species: id)
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
            pokemon = Pokemon.new(nome: poke[i], img: @img_url, evolution: @evoArr[i])
            pokemon.save
            id += 1
        end
      end
end