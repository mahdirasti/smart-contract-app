function dataURLtoFile(dataurl: string, filename: string) {
  fetch(dataurl)
    .then(async (response) => {
      const contentType = response.headers.get("content-type")
      const blob = await response.blob()
      const file = new File([blob], filename)
      return file
    })
    .catch((err) => {
      return null
    })
}
export default dataURLtoFile
