export const AddScripts = () => {
  const POPPER = document.createElement('script')
  POPPER.src = 'https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js'
  const TIPPY = document.createElement('script')
  TIPPY.src = 'https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js'
  const TIPPYCSS = document.createElement('link')
  TIPPYCSS.rel = 'stylesheet'
  TIPPYCSS.href = 'https://unpkg.com/tippy.js@6/animations/scale.css'
  document.head.appendChild(POPPER)
  document.head.appendChild(TIPPY)
  document.head.appendChild(TIPPYCSS)
}
