class V1::PokemonsController < ApplicationController
    def index
        render :json => { 
            :pokemons => [
                {
                :id => 1,
                :name => 'ditto',
                :url => 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                },
                {
                :id => 2,
                :name => 'pikachu',
                :url => 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                }
            ]
        }
    end
end