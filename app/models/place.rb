class Place < ActiveRecord::Base

  def self.search(find_params)
    find_params = "%#{find_params.downcase}%"
    self.where("LOWER(name) LIKE ?", find_params)
  end



end
