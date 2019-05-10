class Pokemon < ActiveRecord::Base
  attr_accessor :id, :name, :url, :evolution_chain
end

def self.search(search)
    if search
        find(:all, :conditions => ['id EQUALS ?', "%#{search}%"])
    else
        find(:all)
    end
end