
export interface ClientI {
  id                  :any | number
  ,name               :string
  ,lastname           :string
  ,gender             :string
  ,email              :string
  ,status             :string
  ,cellphone           :string
  ,localStorageOrApi  :boolean
  ,clientAddress       :ClientAddressI[]
}

export interface ClientAddressI {
  clientId            :any | number
  ,country            :string
  ,city               :string
  ,address            :string
}
