export default function main<T>(
  store: string,
  initialValue?: T,
) {
  const isClient = typeof window != 'undefined'
  const storage = isClient ? window.localStorage : undefined
  let storeData: T | Record<string, never> = {}

  if (storage && store) {
    try {
      const previousStore = storage.getItem(store)
      if (previousStore) {
        storeData = JSON.parse(previousStore)
      } else {
        storage.setItem(store, JSON.stringify(initialValue))
        storeData = JSON.parse(storage.getItem(store) || '{}')
      }
    } catch (_error) {
      storeData = {}
    }
  }

  function set<T>(value: { [K in keyof T]?: T[K] }): T | Record<string, never> {
    if (storage && store) {
      try {
        const currentStore = JSON.parse(storage.getItem(store) || '{}')
        const newStore: T = Object.assign({}, currentStore, value)

        storage.setItem(store, JSON.stringify(newStore))

        return newStore
      } catch (_error) {
        return {}
      }
    }

    return {}
  }

  function get<T>(key: keyof T) {
    if (storage && store) {
      try {
        const currentStore: T = JSON.parse(storage.getItem(store) || '{}')

        return currentStore[key]
      } catch (_error) {
        return null
      }
    }

    return null
  }

  return {
    store: storeData,
    set,
    get,
  }
}
