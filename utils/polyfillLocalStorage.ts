// @ts-nocheck
const localStorageMock = {
    getItem: () => null,
    setItem: () => {
        console.debug('tets')
        return null
    }
  };
  
  if (typeof window === "undefined") {
    global.localStorage = localStorageMock;
  }