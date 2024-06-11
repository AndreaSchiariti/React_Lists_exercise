import { Color } from "./Color";

export function Colors({arrayOfColors}) {
  return arrayOfColors.map(obj => <Color key={obj.id} color={obj}/>)
}