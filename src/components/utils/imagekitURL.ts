export function imagekitURL(
  url: string | undefined | null,
  height: string | number = '',
  width: string | number = ''
) {
  return `https://ik.imagekit.io/devparty/tr:w-${height},h-${width}/${url}`
}
