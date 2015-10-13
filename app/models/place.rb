class Place < ActiveRecord::Base
  def self.search(find_params)
    query = (<<-SQL)
      SELECT
        *
      FROM
        places
      WHERE
        places.name LIKE '%?%'
     SQL

    Place.find_by_sql(query, find_params)
  end

end
