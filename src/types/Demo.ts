// Copied from '@octokit/rest'
export interface Demo {
  id: number,
  email: string,
  address: Address
}

export type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string
}
