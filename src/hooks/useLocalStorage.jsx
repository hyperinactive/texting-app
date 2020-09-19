import { useEffect, useState } from 'react';

// key unique to the app
// to avoid conficting local storages from many apps running in localhost
const PREFIX = 'whatsapp-clone-';

/**
 * @param key - what to pass and keep
 * @param initialValue - what is normally passed to useState hooks
 */
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    // if the value isn't null return the state of the object
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
    // if the initVal if a function invoke it
    if (typeof initialValue === 'function') {
      return initialValue();
    }
    // else return the function initalValue
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]); // any time key or value changes overwrite the storage with new values

  // return as a normal useState, but code is set up to write into localStorage
  return [value, setValue];
}
