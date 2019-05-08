def self.search(search)
    if search
        find(:all, :conditions => ['id EQUALS ?', "%#{search}%"])
    else
        find(:all)
    end
end