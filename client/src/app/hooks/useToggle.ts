import { Dispatch, SetStateAction, useCallback, useState } from "react";

function useToggleHook(
  defaultValue?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);
  const toggle = useCallback(() => setValue((x) => !x), []);
  return [value, toggle, setValue];
}
export { useToggleHook };
