// A.
// System sets initial value.
// App subscribes to system color mode changes.
const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
  }
  
  // B.
  // System sets initial value.
  // App color mode is detached from system color mode changes.
  const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
  }
  
  // C.
  // You choose initial value.
  // App color mode is detached from system color mode changes.
  const config: ThemeConfig = {
    initialColorMode: 'dark', // 'dark' | 'light'
    useSystemColorMode: false,
  }
  
  /