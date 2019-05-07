class V1::PokemonsController < ApplicationController
    def index
        render json: { 
            :pokemons => [
                :name => 'ditto',
                :url => 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
            ]}
    end
end