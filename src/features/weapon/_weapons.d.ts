type Weapon = {
  name: string,
  range: number
}

declare module '*/weapons.json' {
  const data: Weapon[];
  export default data;
}
