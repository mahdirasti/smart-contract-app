const JSONParser = (val: string) => {
  try {
    return JSON.parse(val)
  } catch (e) {
    console.error(e)
    return null
  }
}
export default JSONParser
