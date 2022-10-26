export function handleChange({ event, setSmth }: any) {
  setSmth(event.target.value);
  console.log(event.target.value);
}
