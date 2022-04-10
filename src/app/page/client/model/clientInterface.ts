
export interface ClientI {
  id                  :any | number
  ,name               :string
  ,lastname           :string
  ,gender             :string
  ,email              :string
  ,status           :string
  ,telefono           :string
  ,localStorageOrApi  :boolean
  ,address            :ClientAddressI[]
}

export interface ClientAddressI {
  clientId            :string
  ,country            :string
  ,city               :string
  ,address            :string
}
